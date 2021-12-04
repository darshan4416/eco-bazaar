import './App.css';
import { useState,useEffect, React } from 'react';
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Signup from './components/Register/Signup';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {BrowserRouter as Router, Routes,  Route, Link} from "react-router-dom";
import {db} from "./firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
function App() {
   // const [Users,setUsers] = useState([]);
   const [Item,setItem] = useState("");
   useEffect(() => {
       db.collection("Items").onSnapshot(snapshot =>{
           console.log(snapshot.docs.map(doc => doc.data().Item));
       })
   }, [])

  return (
    // <Router>
    <div>
        <div className="tempSignup">
                <input type="text" onChange={(event)=>{
                     setItem(event.target.value);
                }} value={Item}></input>
                 </div>
      </div>
  
  );
}

export default App;
