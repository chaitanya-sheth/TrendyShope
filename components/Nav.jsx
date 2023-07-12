"use client";
import "../styles/mobile.css";
import "../styles/tab.css";
import "../styles/globals.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { BsCart } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import Searchbar from "./Searchbar";
import "../styles/desktop.css";
import { useSelector } from "react-redux";
// import { cartData } from "@/redux/reducer";


const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);

  const result = useSelector((state)=>state.cartData);
  console.warn("data in header", result[0]);

  return (
    <div className="mainNav d_flex align_items_center width_100">
      <div className="mobileStyle nav d_flex width_100">
        <div className="logoBox d_flex align_items_center">
          <Link href="/">
            <img
              src="/logo2.png"
              className="d_flex align_items_center logo"></img>
            
          </Link>
        </div>
        <div>
          <Searchbar />
        </div>
        
        <div className="catagoryMenu d_flex">
          <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
          {mobileMenu && (
            <MenuMobile
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
              setMobileMenu={setMobileMenu}
            />
          )}
      
          <div className="icons cartIcon">
            <Link href="/cart"><BsCart size={25} style={{color:"black"}}/></Link>
            {result.length > 0 ? <span className="cartResult">{result.length}</span> : null}
          </div>
          <div className="profileIcon icons align_items_center justify_content_center">
            <BsPersonCircle size={25} />
          </div>
          <div className="drawerIcon align_items_center justify_content_center">
            {mobileMenu ? (
              <VscChromeClose
                size={20}
                className="CloseIcon"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <FiMenu
                className="fiMenuIcon"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
