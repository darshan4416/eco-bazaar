import { useState,useEffect, React } from 'react'
import {db} from "./firebase";
function Signup() {
    const [Users,setUsers] = useState([]);

   useEffect(() => {
       db.collection("users").onSnapshot(snapshot =>{
           console.log(snapshot.docs.map(doc => doc.data().user));
       })
   }, [])


    return (
        <>
            <div className="tempSignup">
                <label>FullName:</label>
                <input type="text"></input>
                <label>Email-id:</label>
                <input type="text"></input>
                <label>Password:</label>
                <input type="password"></input>
                <label>Phone no.:</label>
                <input type="text"></input>
            </div>
        </>
    )
}

export default Signup
