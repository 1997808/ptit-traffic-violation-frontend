import React from "react";
import { Heading } from "../../components/Text/Heading";
import {
  demo_heading,
  // demo_subtitle,
  demo_category,
  demo_category_2,
  demo_category_3,
} from "../../assets/util/constant";
import { BigBlogCard } from "../../components/Card/BigBlogCard";
import car3 from "../../assets/images/car-3.jpg";
import xemay4 from "../../assets/images/xemay4.jpg";
import xedien3 from "../../assets/images/xedien3.jpg";
import car2 from "../../assets/images/car-2.jpg";

export const PopularCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="pb-8">
          <Heading
            title={"Bài viết nổi bật"}
            subtitle={"Các bài viết có nhiều lượt xem trong ngày"}
          />
        </div>
        <div
          className="grid grid-cols-2 grid-rows-2 gap-4"
          style={{ maxHeight: "500px" }}
        >
          <div className="col-span-1 row-span-2">
            <BigBlogCard
              title={"Chủ xe phải trả phí dán thẻ không dừng sau 31/12"}
              category={demo_category}
              image={car3}
            />
          </div>
          <div className="col-span-1 row-span-2 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-1">
              <BigBlogCard
                title={"Hàng nghìn người đi xe máy về các tỉnh phía Bắc"}
                category={demo_category_3}
                image={xemay4}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <BigBlogCard
                title={"Đề xuất miễn phí trước bạ với xe máy điện"}
                category={demo_category_2}
                image={xedien3}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <BigBlogCard
                title={"Dự án thu phí ôtô vào trung tâm TP HCM"}
                category={demo_category_3}
                image={car2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
