import React, { Fragment } from 'react'
import "./Card.css";
import Products from '../productsdata';
function Card() {
    return (
        <Fragment className="ParentCard">
        {
          Products.map((Product)=>{
            return(
              <div className="wrapper">
              <div className="product-img">
              <img src= {Product.imgUrl} height="420" width="327" />
             </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{Product.ProductName}</h1>
                <h2>We love Earth</h2>
                <p>Lorem Functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth. </p>
              </div>
              <div className="product-price-btn">
                <p><span>{Product.price}</span></p>
                <button type="button">buy now</button>
              </div>
            </div>
          </div>
            )
          })
        }
 

        </Fragment>
    )
}

export default Card
