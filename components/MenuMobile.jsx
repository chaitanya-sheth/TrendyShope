"use client";
import '../styles/globals.css'
import '../styles/mobile.css'
import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

// import { BsCart } from "react-icons/bs";
// import { BsPersonCircle } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Categories", url:"/collection",subMenu: true },
  { id: 3, name: "Offers & Combos", url: "/offers" },
  { id: 4, name: "Sign Up/ Login", url: "/login" },
];

const subMenuData = [
  { id: 1, name: "Hair Care", url:"/collection/haircare" },
  { id: 2, name: "Skin Care", url:"/collection/skincare" },
  { id: 3, name: "Hand & Bodywash", url:"/collection/hand-bodywash" },
  { id: 4, name: "Laundary & Dishwash", url:"/collection/laundary-dishwash" },
  { id: 5, name: "Food Beverages", url:"/collection/food-and-beverages" },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul 

// className={`menuMobile1 d_flex flex_col ${showCatMenu ? 'showMenu' : ''}`}
    // className={`menuMobile1 d_flex flex_col ${showCatMenu ? 'showMenu' : ''}`}
    //  className={`menuMobile1 d_flex flex_col width_100 ${
    //               showCatMenu ? 'expanded' : ''
    //             }`}
    className="menuMobile1 d_flex flex_col width_100"
    >
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li 
              //  className={`menuMobile2 d_flex flex_col ${
              //     showCatMenu ? 'expanded' : ''
              //   }`}
                className="menuMobile2 d_flex flex_col"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="menuMobile3 d_flex justify_content_between align_items_center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className="menuMobile4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href={submenu.url}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="menuMobile5 d_flex justify_content_between">
                            {submenu.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="menuMobile6">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
