"use client"
import React from "react";
import { Data } from "@/data/Data";
import "../styles/mobile.css";
import "../styles/globals.css";
import { HiOutlineShoppingBag ,HiMinus,HiPlus } from "react-icons/hi";
import Link from "next/link";
import {addToCart} from "@/redux/action";
import { removeFromCart } from "@/redux/action";
import { useDispatch, useSelector } from "react-redux";
import productList from "@/redux/productAction";
import { useEffect, useState } from "react";

const MobileOffersCard = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToBag = (item) => {
    dispatch(addToCart(item));
    setAddedProducts((prevAddedProducts) => [...prevAddedProducts, item.id]);
  };

  const handleRemoveFromBag = (item) => {
    dispatch(removeFromCart(item));
    setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((productId) => productId !== item.id)
    );
  };

  const isProductAdded = (item) => addedProducts.includes(item.id);
 console.log(addedProducts.length);
   
  const filteredData = Data.filter((item) => !item.discounted_price);



  return (
    <div className="scrollbarHidden mobileOfferCards1">
      {filteredData.map((item, index) => (
        <div key={index} className="d_flex mobileOfferCards2 ">
       
          <div className="mobilecardImage1">
          {/* {item.url && ( */}
        <Link href={item.url}>
            <img src={item.img} alt="Images" width={"55px"} className="mobilecardImage2 adjustHeight" />
            </Link>
          {/* )} */}
          </div>
         
          <div className="d_flex flex_col align_items_center justify_content_center">
            <div className="mobileCardDetail1">
              <p className="mobileCardDetail2">{item.name}</p>
              <div style={{marginBottom:"10px"}}>
                <span className="mobileCardDetail4">
                      &#8377;{item.price}
                    </span>
              </div>

              {isProductAdded(item) == 0 ? (
                <div>
                            <button
                              className="mobileOfferCardButton1 d_flex"
                              onClick={() => handleAddToBag(item)}
                            >
                          
                              <div>
                                <HiOutlineShoppingBag />Add to bag
                              </div>
                            
                            </button>
                          </div>
                        ) : (
                          <div className="d_flex">
                          
                          <button
                            className="mobileOfferCardButton0 d_flex minusButtonEffect"
                            onClick={() => handleRemoveFromBag(item.id)}
                          >
                            <div>
                              <HiMinus />
                            </div>
                          </button>
                          <button className="mobileOfferCardButton0 d_flex">
                            <div>
                            <HiOutlineShoppingBag/>
                            </div>
                          </button>
                          <button
                            className="mobileOfferCardButton0 d_flex plusButtonEffect"
                            onClick={() => handleAddToBag(item)}
                          >
                            <div>
                              <HiPlus />
                            </div>
                          </button>
                        </div>
                        
                        )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileOffersCard;
