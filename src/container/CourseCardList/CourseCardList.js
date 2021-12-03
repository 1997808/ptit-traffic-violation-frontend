import React from "react";
import { Heading } from "../../components/Text/Heading";
import {
  demo_heading,
  // demo_subtitle,
  demo_price,
} from "../../assets/util/constant";
import { CourseCard } from "../../components/Card/CourseCard";
import car1 from "../../assets/images/car-1.jpg";

export const CourseCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="pb-8">
          <Heading
            title={"Các vi phạm trong ngày"}
            subtitle={"Danh sách các lỗi vi phạm nhiều trong ngày"}
          />
        </div>
        <div className="grid grid-cols-3 gap-4" style={{ maxHeight: "500px" }}>
          <div className="col-span-1">
            <CourseCard title={demo_heading} price={demo_price} image={car1} />
          </div>
          <div className="col-span-1">
            <CourseCard title={demo_heading} price={demo_price} image={car1} />
          </div>
          <div className="col-span-1">
            <CourseCard title={demo_heading} price={demo_price} image={car1} />
          </div>
        </div>
      </div>
    </>
  );
};
