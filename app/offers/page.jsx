"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/desktop.css";
import "../../styles/globals.css";
import "../../styles/mobile.css";
import { Data } from "@/data/Data";
import { HiOutlineShoppingBag,HiMinus,HiPlus } from "react-icons/hi";
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
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  3: {
    breakpoint: { max: 1200, min: 867 },
    items: 3,
  },
  4: {
    breakpoint: { max: 867, min: 490 },
    items: 2,
  },
  5: {
    breakpoint: { max: 490, min: 324 },
    items: 1,
  },
};

const Page = () => {


  const getDiscountedPricePercentage = (originalPrice, discountedPrice) => {
    return ((originalPrice - discountedPrice) / originalPrice) * 100;
  };

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
    dispatch(removeFromCart(item)); // Dispatching the removeFromCart action
    setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((productId) => productId !== item.id)
    );
  };

  const isProductAdded = (item) => addedProducts.includes(item.id);

  const filteredData = Data.filter((item) => item.discounted_price);
  return (
    <section className="offerCardPage">
    <div  className="offerPage d_flex flex_col">
      <div className="desktopOfferCard2">Best Offers</div>

      <Carousel responsive={responsive}>
    {filteredData.map((offer) => {
      return (
        <div key={offer.id}>
          <div className="categoryOfferCard3 d_flex cursor_pointer">
            <div className="categoryOfferCard4">
            <Link href={offer.url}>
              <div className="categoryOfferCard5">
                <img src={offer.img} alt="Image" />
              </div>
              </Link>
              <div>
                <div className="categoryproductDetail">
                  <p className="categoryproductName">{offer.name}</p>
                  <div style={{marginBottom:"10px"}}>
                    <span className="categorydiscountedPriceText">
                      &#8377;{offer.discounted_price}
                    </span>
                    <span className="categoryoriginalPriceText line-through">
                      &#8377;{offer.price}
                    </span>

                    <span className="categorydiscountedPercent">
                      {getDiscountedPricePercentage(
                        offer.price,
                        offer.discounted_price
                      )}
                      % off
                    </span>
                  </div>
                   <div className="d_flex addToCartButton">
                            <button
                              className="d_flex justify_content_center align_items_center buttonEffect"
                              onClick={() => handleAddToBag(offer)}
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

export default Page;
