import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Menu from './Pages/Menu'

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Footer from "./Component/Footer";



function App() {
  return <>
  <Router>
    <Navbar/>
    <Sidebar/>
    <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/menu"  element={<Menu />}/>
          
    </Routes>
    <Footer/>
  </Router>
  </>
}

export default App;
