"use client"
import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
// import { BsCart } from "react-icons/bs";
// import {BsPersonCircle} from 'react-icons/bs';
import '../styles/desktop.css'
import '../styles/globals.css'
const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Categories", url:"/collection",subMenu: true },
    { id: 3, name: "Offers & Combos", url: "/offers"},
    
];

const subMenuData = [
    { id: 1, name: "Hair Care" , url:"/collection/haircare"},
    { id: 2, name: "Skin Care", url:"/collection/skincare"},
    { id: 3, name: "Laundary & Dishwash", url:"/collection/laundary-dishwash"},
    { id: 4, name: "Hand & Bodywash", url:"/collection/hand-bodywash"},
    { id: 5, name: "Food Beverages", url:"/collection/food-and-beverages"},
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <div className="dataArrayComponents align_items_center">
        <ul className="dataStyle d_flex align_items_center ">
            {data.map((item) => {
                return (
                    
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ?(
                            <li className="catagory d_flex align_items_center"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                
                                {item.name}
                                <BsChevronDown size={14}/>

                                {showCatMenu && (
                                    <ul className="catagoryIcon">
                                        {subMenuData.map((submenu)=>{
                                            return(
                                                <Link key={submenu.id} href={submenu.url} onClick={()=>setShowCatMenu(false)}>
                                                    <li className="catagoryComponents d_flex align_items_center">{
                                                        submenu.name}</li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) :  (
                            <li className="cursor_pointer">
                            <Link href={item.url}>{item.name}</Link></li>
                        )}
                    </React.Fragment>
                   
        
                );
            })}
        </ul>
        
        
        </div>
    );
};

export default Menu;