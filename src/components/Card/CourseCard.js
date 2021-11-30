import React from "react";
import { Button } from "../Button/Button";
import { demo_button } from "../../assets/constant";

export const CourseCard = ({ title, price, image }) => {
  return (
    <>
      <div className="w-full transform transition duration-300 hover:-translate-y-3 hover:shadow-lg">
        <img className="w-full object-cover" src={image} alt="banner" />
        <div className="w-full h-full top-0 left-0 p-4 flex flex-col items-center">
          <p className="text-base lg:text-lg font-semibold">{title}</p>
          <p className="text-base py-3 font-semibold text-indigo-600">
            {price}
          </p>
          <Button text={demo_button} type={"button"} />
        </div>
      </div>
    </>
  );
};
