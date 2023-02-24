import React from "react";
import "./Menu.css";
import video from "../images/pexels-kampus-production-8627116.mp4";
import menu from '../Menudata'

const Menu = () => {
  return (
    <>
      <h1 className="menu-title">Our Menu</h1>
      <section className="menu-container">
        <div  className="menu-video">
          <video width="100%" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="menu-list-container">

        <div className="menu">
            {
              menu.map((item)=>{
                const {id,image,name}=item
                return(
                  <div className="menu-box" key={id}>
                    <div className="menu-box-image"><img src={image} alt="" /></div>
                    <footer className="menu-box-footer">
                      <div className="menu-box-name"><h4>{name}</h4></div>
                      <div className="order"><button>Add to Cart</button></div>
                    </footer>
                  </div>
                )
              })
            }
        </div>

      </section>
    </>
  );
};

export default Menu;
