import React from 'react';
import { Footerstyle } from './Footerstyle';
import { NavLink } from 'react-router-dom';
import { Button } from '../Styles/Button';
import {FaDiscord} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <Footerstyle>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
          <h5>Ready to start your journey.</h5>
          <h5>Talk to us today.</h5>
          </div>
          
          <div>
            <NavLink to="/">
              <Button className='btn'>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>   
      
      <footer>
        <div className="container grid grid-four-column">
          <div className="about-footer">
            <h3>Syntax</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="join-footer">
            <h3>Join Us </h3>
            <form action="#">
              <input type="Email" placeholder="Subscribe"
              autoComplete="off"
              required
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <div>
                <a href="https://discord.com/" target="_blank">
                <FaDiscord className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/instagram/" target="_blank">
                <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-cont">
            <h3>Call Us</h3>
            <h4>+91 987654321</h4>
          </div>
        </div>

        <div className="footer-bottom">
          <hr/>
          <div className="contaiiner griid griid-tw0-column">
            <p>
              @{new Date().getFullYear()} Syntax. All Right Reserved.
            </p>
            <div className="p2">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>

    </Footerstyle>
  )
};

export default Footer;