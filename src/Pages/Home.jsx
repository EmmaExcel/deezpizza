import React from "react";
import "./Home.css";
import HomeMenu from "../HomeMenu";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="main-text">
          <div className="home-header">
            <h1>Get DeezPizza</h1>

            <div className="home-paragraph">
              <p>Beyound Your Imaginations..</p>
            </div>
          </div>

          <div className="home-button">
            <button>Let's Eat</button>
          </div>
        </div>
      </section>

      <section className="home-menu">
          <div className="home-menu-header">
            <h1>Customers Favourite</h1>
          </div>
        <div className="home-menu-container">

          <div className="home-menu-content">
            {HomeMenu.map((item) => {
              const { id, name, image, price } = item;
              return (
                
                  <div className="grid-container" key={id}>
                    <div className="home-menu-content-grid">
                      <div className="home-menu-box">
                        <div className="home-menu-box-image">
                          <img src={image} alt={name} />
                        </div>

                        <footer className="home-menu-box-desp">
                          <div className="home-menu-box-name">
                            <h2>{name}</h2>
                          </div>

                          <div className="home-menu-box-price">
                            <h4>{price}</h4>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                 
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
