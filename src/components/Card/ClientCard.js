import React from "react";

export const ClientCard = ({ name, rating, date, content, image }) => {
  return (
    <>
      <div className="w-full h-full transition duration-300 shadow-xl hover:shadow-none rounded-lg p-8">
        <div className="flex justify-between pb-4 lg:pb-8">
          <div className="flex">
            <img
              className="w-10 h-10 mr-4 object-cover"
              src={image}
              alt="banner"
            />
            <div className="">
              <p className="font-semibold pb-1">{name}</p>
              <p className="text-sm">{rating}</p>
            </div>
          </div>
          <p className="text-sm">{date}</p>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "140px" }}>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </>
  );
};
