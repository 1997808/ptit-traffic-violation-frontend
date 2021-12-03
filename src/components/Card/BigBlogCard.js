import React from "react";

export const BigBlogCard = ({ title, category, image }) => {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden group">
        <img
          className="w-full h-full object-cover transform transition duration-300 scale-100 group-hover:scale-110"
          src={image}
          alt="banner"
        />
        <div className="absolute w-full h-full top-0 left-0 opacity-20 bg-black"></div>
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
