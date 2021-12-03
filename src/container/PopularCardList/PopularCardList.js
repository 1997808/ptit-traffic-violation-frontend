import React from "react";
import { Heading } from "../../components/Text/Heading";
import {
  demo_heading,
  // demo_subtitle,
  demo_category,
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
              title={demo_heading}
              category={demo_category}
              image={car3}
            />
          </div>
          <div className="col-span-1 row-span-2 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-1">
              <BigBlogCard
                title={demo_heading}
                category={demo_category}
                image={xemay4}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <BigBlogCard
                title={demo_heading}
                category={demo_category}
                image={xedien3}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <BigBlogCard
                title={demo_heading}
                category={demo_category}
                image={car2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
