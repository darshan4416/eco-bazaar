import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(){
    return(
       <div>
        <div className="sign-up">
              
       </div>

       <div className="signup-container">
           <div className="signup-form">
               <h1>Login</h1>

               <label className="labels" for="email">Email</label>
               <input className="input-fields" type="text" placeholder="ram@example.com"></input>

               <label className="labels" for="password">Password</label>
               <input className="input-fields" type="password" placeholder="password"></input>

               <button className="btn" type="submit">Login</button>
               <p className="signin-line">Don't have an account ?&ensp; <Link to="/register" className="linkit" href="#">Sign Up</Link></p>
           </div>
       </div>
       </div>
    );
}

export default Login;