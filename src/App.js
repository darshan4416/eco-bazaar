import './App.css';
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {BrowserRouter as Router, Routes,  Route, Link} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route path='/' element={<><Navbar/><Card/></>}/>
      <Route path='/explore' element={<><Navbar/></>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
