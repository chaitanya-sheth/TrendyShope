"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/desktop.css";
import "../styles/globals.css";
import { Data } from "@/data/Data";
import { HiOutlineShoppingBag ,HiMinus,HiPlus } from "react-icons/hi";
import Link from "next/link";
import {addToCart} from "@/redux/action";
import { removeFromCart } from "@/redux/action";
import { useDispatch, useSelector } from "react-redux";
import productList from "@/redux/productAction";

const responsive = {
  1: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  2: {
    breakpoint: { max: 3000, min: 1124 },
    items: 4,
  },
  3: {
    breakpoint: { max: 1124, min: 870 },
    items: 3,
  },
  4: {
    breakpoint: { max: 870, min: 464 },
    items: 3,
  },
};

const DesktopOfferCards = ({ searchQuery }) => {
  const getDiscountedPricePercentage = (originalPrice, discountedPrice) => {
    return ((originalPrice - discountedPrice) / originalPrice) * 100;
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  const filteredData = Data.filter((item) => !item.discounted_price);
  
  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToBag = (item) => {
    dispatch(addToCart(item));
    setAddedProducts((prevAddedProducts) => [...prevAddedProducts, item.id]);
  };

  const handleRemoveFromBag = (item) => {
    dispatch(removeFromCart(item)); // Dispatching the removeFromCart action
    setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((productId) => productId !== item.id)
    );
  };

  const isProductAdded = (item) => addedProducts.includes(item.id);



  return (
    <section className="desktopOfferCard">
      <div className="desktopOfferCard1 d_flex flex_col">
        <div className="desktopOfferCard2">Best Sellers</div>

        <Carousel responsive={responsive}>
          {filteredData.map((item) => {
          
            return (
              <div key={item.id}>
                <div className="desktopOfferCard3 d_flex cursor_pointer">
                  <div className="desktopOfferCard4">
                    <Link href={item.url}>
                      <div className="desktopOfferCard5">
                        <img src={item.img} alt="Image" />
                      </div>
                    </Link>
                    <div>
                      <div className="productDetail">
                        <p className="productName">{item.name}</p>
                        <div style={{ marginBottom: "10px" }}>
                          <span className="originalPriceText">
                            &#8377;{item.price}
                          </span>
                        </div>
                     
                        {/* {isProductAdded(item) ? (
                          <div className="d_flex addToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleRemoveFromBag(item.id)}
                            >
                              <div>
                                <HiMinus />
                              </div>
                            </button>
                            <button className="d_flex justify_content_center align_items_center buttonEffect">
                              <div>
                              <HiOutlineShoppingBag/>      
                              </div>
                           
                            </button>
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleAddToBag(item)}
                            >
                              <div>
                                <HiPlus />
                              </div>
                            </button>
                          </div>
                        ) : (
                          <div className="d_flex addToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleAddToBag(item)}
                            >
                              <div>
                                <HiOutlineShoppingBag />Add to bag 
                              </div>
                            </button>
                          </div>
                        )} */}
                        <div className="d_flex addToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleAddToBag(item)}
                            >
                              <div>
                                <HiOutlineShoppingBag />Add to bag 
                              </div>
                            </button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default DesktopOfferCards;
