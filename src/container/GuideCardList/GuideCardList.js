import React from "react";
import { Heading } from "../../components/Text/Heading";
import {
  demo_heading,
  demo_category,
  demo_category_2,
  demo_category_3,
} from "../../assets/util/constant";
import { BigBlogCard } from "../../components/Card/BigBlogCard";
import car1 from "../../assets/images/car-1.jpg";
import xemay1 from "../../assets/images/xemay1.jpg";
import xemay3 from "../../assets/images/xemay3.jpg";
import xedien1 from "../../assets/images/xedien1.jpg";

export const GuideCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="pb-8">
          <Heading
            title={"Bài viết"}
            subtitle={"Các bài viết được cập nhật mới nhất"}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 h-96">
          <div className="col-span-1">
            <BigBlogCard
              title={"Nhiều quốc lộ miền Trung sạt lở được thông tuyến"}
              category={demo_category_3}
              image={car1}
            />
          </div>
          <div className="col-span-1">
            <BigBlogCard
              title={"Doanh số xe máy tháng 11/2021"}
              category={demo_category_2}
              image={xemay1}
            />
          </div>
          <div className="col-span-1">
            <BigBlogCard
              title={"Một số luật giao thông đường bộ (Phần 2)"}
              category={demo_category}
              image={xemay3}
            />
          </div>
          <div className="col-span-1">
            <BigBlogCard
              title={"Cảnh báo một số mẫu xe điện kém chất lượng"}
              category={demo_category_2}
              image={xedien1}
            />
          </div>
        </div>
      </div>
    </>
  );
};
