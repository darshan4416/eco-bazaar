import './App.css';
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Routes,  Route, Link} from "react-router-dom";
import Signup from './components/Register/Signup';
function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route path='/' element={<><Navbar fixed="top" /><Card/></>}/>
      <Route path='/explore' element={<><Navbar/></>}/>
      <Route path='/register' element={<><Signup/></>}/>
      <Route path='/login' element={<><Login/></>}/>

    </Routes>
    </div>
    </Router>
  );
}

export default App;
