import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
               
            </ul>
        </nav>

        <div className="nav-brand">
            <h1 className='nav-name'>DeezPizza</h1>
        </div>

        <div className="nav-component">
            <div> <i className="fas fa-search"></i> </div>
            <div><i class="fa-solid fa-bag-shopping"></i></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
