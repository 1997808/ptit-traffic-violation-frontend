import React from "react";
import { Heading } from "../../components/Text/Heading";
import {
  demo_heading,
  demo_subtitle,
  demo_category,
} from "../../assets/util/constant";
import { BigBlogCard } from "../../components/Card/BigBlogCard";
import car1 from "../../assets/images/car-1.jpg";

export const PopularCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="pb-8">
          <Heading title={demo_heading} subtitle={demo_subtitle} />
        </div>
        <div
          className="grid grid-cols-2 grid-rows-2 gap-4"
          style={{ maxHeight: "500px" }}
        >
          <div className="col-span-1 row-span-2">
            <BigBlogCard
              title={demo_heading}
              category={demo_category}
              image={car1}
            />
          </div>
          <div className="col-span-1 row-span-2 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-1">
              <BigBlogCard
                title={demo_heading}
                category={demo_category}
                image={car1}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <BigBlogCard
                title={demo_heading}
                category={demo_category}
                image={car1}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <BigBlogCard
                title={demo_heading}
                category={demo_category}
                image={car1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
