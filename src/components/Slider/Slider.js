import React from "react";
import banner from "../../assets/banner_traffic.jpg";

export const Slider = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img className="w-full h-full object-cover" src={banner} alt="banner" />
      <div className="absolute w-full h-full top-0 left-0 bg-opacity-30 bg-black"></div>
    </div>
  );
};
