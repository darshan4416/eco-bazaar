import React from "react";
import { Link } from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';
import "./signup.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
function Signup(){
    return(
       <div>
        <div className="sign-up">
              
       </div>

       <div className="signup-container">
           <div className="signup-form">
               <h1>Register</h1>
              <label className="labels" for="fullname">FullName</label>
               <input className="input-fields" type="text" placeholder="Ram Chandra"></input>

               <label className="labels" for="email">Email</label>
               <input className="input-fields" type="text" placeholder="ram@example.com"></input>

               <label className="labels" for="password">Password</label>
               <input className="input-fields" type="password" placeholder="password"></input>

               <label className="labels" for="phone no">Phone no.</label>
               <input className="input-fields" type="password" placeholder="Phone Number"></input>

               <button className="btn" type="submit">Register</button>
               <p className="signin-line">Already have an account ?&ensp; <Link to="/login" className="linkit">Sign In</Link></p>
           </div>
       </div>
       </div>
    );
}

export default Signup;