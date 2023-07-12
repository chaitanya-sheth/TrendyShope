"use client";
import "../styles/globals.css";
import "../styles/desktop.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
const Banner = () => {
  const images = [
    { img: "/slide-1-desktop.webp", url:"collection/hand-bodywash" },
    { img: "/slide-2-desktop.webp", url:"collection/skincare" },
    { img: "/slide-3-desktop.webp", url:"collection/haircare" },
    { img: "/slide-4-desktop.webp", url:"collection/laundary-dishwash"},
    { img: "/slide-5-desktop.webp", url:"collection/food-and-beverages"},
  ];
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      {images.map((item) => {
        return (
          <React.Fragment key={item.id}>
           
            <Link href={item.url}>
              <div>
                <img
                  src={item.img}
                  className="carouselImageStyle"
                />
              </div>
              </Link>
            
          </React.Fragment>
        );
      })}
    </Carousel>
  );
};

export default Banner;
