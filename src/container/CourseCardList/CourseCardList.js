import React from "react";
import { Heading } from "../../components/Text/Heading";
import {
  // demo_heading,
  // demo_subtitle,
  demo_price,
} from "../../assets/util/constant";
import { CourseCard } from "../../components/Card/CourseCard";
import car4 from "../../assets/images/car-4.jfif";
import xemay5 from "../../assets/images/xemay5.jpg";
import xedien4 from "../../assets/images/xedien4.jpg";

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
            <CourseCard
              name={"Không bật xi nhan"}
              amount={demo_price}
              image={car4}
            />
          </div>
          <div className="col-span-1">
            <CourseCard
              name={"Không đội mũ bảo hiểm"}
              amount={demo_price}
              image={xemay5}
            />
          </div>
          <div className="col-span-1">
            <CourseCard
              name={"Đỗ xe sai chỗ"}
              amount={demo_price}
              image={xedien4}
            />
          </div>
        </div>
      </div>
    </>
  );
};
