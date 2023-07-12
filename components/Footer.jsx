"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoCall } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io5';
import '../styles/globals.css';
import '../styles/mobile.css';
import '../styles/desktop.css';

const Footer = () => {
  return (
    <footer className="footertag">
      <div className="d_flex justify_content_between flex_col footerMainClass">
        
        <div className="d_flex mainPart">
         

          
          <div className="leftSide">
            {/* MENU START */}
            <div className="d_flex menu">
              <div className="heading cursor_pointer">
                get help
              </div>
              <div className="text cursor_pointer">
                Order Status
              </div>
              <div className="text cursor_pointer slashbar">
                |
              </div>
              <div className="text cursor_pointer">
                Delivery
              </div>
              <div className="text cursor_pointer slashbar">
                |
              </div>
              <div className="text cursor_pointer">
                Returns
              </div>
              <div className="text cursor_pointer slashbar">
                |
              </div>
              <div className="text cursor_pointer">
                Payment Options
              </div>
              <div className="text cursor_pointer slashbar">
                |
              </div>
              <div className="text cursor_pointer">
                Cookie Notice
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="d_flex col menu">
              <div className="heading cursor_pointer">
                My Account
              </div>
              <div className="text cursor_pointer">
                Have any query?
              </div>
              <div className="text cursor_pointer slashbar">
                |
              </div>
              <div className="d_flex text cursor_pointer">
               <div className="icoWithText"><IoCall/></div> <div>1800 123 4567</div>
              </div>
              <div className="text cursor_pointer slashbar">
                |
              </div>
              <div className="d_flex text cursor_pointer">
               <div className="iconWithText"><IoLogoWhatsapp/></div> <div>Whatsapp</div>
              </div>
            
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}


        <div className="d_flex justify_content_center socialMediaIconBox">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="d_flex justify_content_center align_items_center cursor_pointer socialMediaIcon "
          >
            <FaFacebookF size={20} />
          </div>
          <div
            onClick={() => window.open("https://twitter.com", "_blank")}
            className="d_flex justify_content_center align_items_center cursor_pointer socialMediaIcon"
          >
            <FaTwitter size={20} />
          </div>
          <div 
          onClick={() => window.open("https://youtube.com", "_blank")}
          className="d_flex justify_content_center align_items_center cursor_pointer socialMediaIcon">
            <FaYoutube size={20} />
          </div>
          <div 
          onClick={() => window.open("https://instagram.com", "_blank")}
          className="d_flex justify_content_center align_items_center cursor_pointer socialMediaIcon">
            <FaInstagram size={20} />
          </div>
        </div>
        {/* <div className="d_flex justify_content_center text contactUs cursor_pointer">
                <button className="contactUsButton">Contact Us</button>
              </div> */}
        {/* <div className="text cursor_pointer">
                <button className="contactUsButton">Contact Us</button>
              </div> */}
      </div>
      <div className="d_flex justify_content_between bottomPart">
        
        <div className="copyRight cursor_pointer">
          © 2023 CPS
        </div>
    
        <div className="d_flex justify_content_center endPart">
          <div className="endText cursor_pointer">
            Guides
          </div>
          <div className="endText cursor_pointer">
            Terms of Sale
          </div>
          <div className="endText cursor_pointer">
            Terms of Use
          </div>
          <div className="endText cursor_pointer">
            Privacy Policy
          </div>
        </div>
    
      </div>
    </footer>
  );
};

export default Footer;
