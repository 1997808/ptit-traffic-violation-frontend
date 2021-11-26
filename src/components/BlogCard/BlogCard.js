import React from "react";

export const BlogCard = ({ title, category, image }) => {
  return (
    <>
      <div className="relative w-full h-full">
        <img className="w-full h-full object-cover" src={image} alt="banner" />
        <div className="absolute w-full h-full top-0 left-0 p-8 flex items-end">
          <div className="text-white">
            <p className="text-sm">{category}</p>
            <p className="text-xl lg:text-2xl font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};
