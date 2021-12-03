import React from "react";
import { Button } from "../Button/Button";
// import { demo_button } from "../../assets/util/constant";

export const CourseCard = ({ name, amount, image }) => {
  return (
    <>
      <div className="w-full h-full transform transition duration-300 flex flex-col justify-between hover:-translate-y-3 hover:shadow-lg">
        <img
          className="w-full object-cover h-48 lg:h-64 xl:h-80"
          src={image}
          alt="banner"
        />
        <div className="w-full top-0 left-0 p-4 flex flex-col items-center">
          <p className="text-base lg:text-lg font-semibold">{name}</p>
          <p className="text-base py-3 font-semibold text-indigo-600">
            {amount}
          </p>
          <Button text={"Xem thêm"} type={"button"} />
        </div>
      </div>
    </>
  );
};
