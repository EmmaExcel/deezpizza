import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-components">
      <div className="st-footer">
        <div className="st-footer-header">
          <h1>Want To Receive Our Newsletters?</h1>

          <div className="st-footer-paragraph">
            <p>
              join our e-mail list for the latest news,update & special event
              info
            </p>
          </div>
        </div>

        <div className="st-footer-input">
          <p>Join Us:</p>
          <div className="st-footer-input-container">
            <input type="text" placeholder="Email Address.." id="newsletter" />
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="nd-footer">
        <div className="nd-footer-container">
          <div className="nd-footer-brand">
            <h1>DeezPizza</h1>
          </div>

          <div className="nd-footer-content">
            <h4>Quick Link</h4>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter fa-flip" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-discord fa-flip" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-square-instagram fa-flip" />
              </a>
            </li>
          </ul>
        </div>

        <p className="copyright">&copy;Copyright 2022 DeezNuts</p>
      </div>
    </section>
  );
};

export default Footer;
