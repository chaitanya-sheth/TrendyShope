"use client";
import React, { useEffect, useState } from "react";
import { Data } from "@/data/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../../styles/desktop.css";
import "../../../styles/globals.css";
import "../../../styles/mobile.css";
import { HiOutlineShoppingBag ,HiMinus,HiPlus } from "react-icons/hi";
import {addToCart} from "@/redux/action";
import { removeFromCart } from "@/redux/action";
import { useDispatch, useSelector } from "react-redux";
import productList from "@/redux/productAction";

const findOfferById = (id) => {
  return Data.find((item) => item.id === id);
};

const ProductId = ({ params }) => {
  // console.log(params);
  const { pId } = params; // Extract the 'pId' property from 'params' object
  // const offer = findOfferById(pId); // Retrieve the offer based on 'pId'
  console.log(pId);
  // console.log(offer);
  const formattedPId = pId.toString().padStart(3, '0'); // Convert 'pId' to a three-digit string format
  const offer = findOfferById(formattedPId);  
  // console.log(offer);

  if (!offer) {
    return <h1>Product not found</h1>;
  }

  const { img, name, description, price, discounted_price } = offer;
    const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  // console.warn("data in main component from saga ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  
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
    <div className="productdetailpage">
      <div className="detailImages">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
          <img src={img} className="productimagestyle"></img>
        </Carousel>
      </div>
      <div className="details">
        <h1 className="fontStyle">{name}</h1>
        {discounted_price ? (<span>MRP: <span style={{textDecoration:"line-through"}}>{price}</span></span>):
        (<span>MRP: <span>{price}</span></span>)}
        {discounted_price && <p><b>Offer Price: {discounted_price}</b></p>}
         {isProductAdded(offer) ? (
                          <div className="d_flex detailPageAddToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect minusButtonEffect"
                              onClick={() => handleRemoveFromBag(offer.id)}
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
                              className="d_flex justify_content_center align_items_center buttonEffect plusButtonEffect"
                              onClick={() => handleAddToBag(offer)}
                            >
                              <div>
                                <HiPlus />
                              </div>
                            </button>
                          </div>
                        ) : (
                          <div className="d_flex detailPageAddToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleAddToBag(offer)}
                            >
                              <div>
                                <HiOutlineShoppingBag />Add to bag
                              </div>
                            </button>
                          </div>
                        )}
      </div>
    </div>
  );
};

export default ProductId;
