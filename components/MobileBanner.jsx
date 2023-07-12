"use client";
import "../styles/mobile.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
// import { BiArrowBack } from "react-icons/bi";

const MobileBanner = () => {
  const images = [
    { img: "/slide-1.webp", url:"collection/hand-bodywash" },
    { img: "/slide-2.jpg", url:"collection/skincare"  },
    { img: "/slide-3.jpg", url:"collection/haircare" },
    { img: "/slide-4.jpg", url:"collection/laundary-dishwash" },
    { img: "/slide-5.jpg", url:"collection/food-and-beverages" },
  ];
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      onSwipeStart={true}
      onSwipeMove={true}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
    >
      {images.map((item) => {
        return (
          <React.Fragment key={item.id}>
              <Link href={item.url}>
              <div>
                <img src={item.img} className="mobileCarouselStyle" />
              </div>
              </Link>
          </React.Fragment>
        );
      })}
    </Carousel>
  );
};

export default MobileBanner;
