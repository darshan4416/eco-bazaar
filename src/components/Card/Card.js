import React from 'react'
import "./Card.css";
import Products from '../productsdata';
function Card() {
    return (
        <>
 <div className="wrapper">
      <div className="product-img">
      <img src="https://www.ecohoy.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/P/a/PartyPack11000x1000.jpg
       " height="420" width="327" />
     </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation<br /> of peeled fruits and vegetables as<br /> functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth. </p>
      </div>
      <div className="product-price-btn">
        <p><span>78</span>$</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

        </>
    )
}

export default Card
