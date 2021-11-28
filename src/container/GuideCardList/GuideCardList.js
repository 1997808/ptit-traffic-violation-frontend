import React from "react";
import { Heading } from "../../components/Heading/Heading";
import {
  demo_heading,
  demo_subtitle,
  demo_category,
} from "../../assets/constant";
import { BigBlogCard } from "../../components/BigBlogCard/BigBlogCard";
import car1 from "../../assets/car-1.jpg";

export const GuideCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="pb-8">
          <Heading title={demo_heading} subtitle={demo_subtitle} />
        </div>
        <div className="grid grid-cols-4 gap-4 h-96">
          <div className="col-span-1">
            <BigBlogCard
              title={demo_heading}
              category={demo_category}
              image={car1}
            />
          </div>
          <div className="col-span-1">
            <BigBlogCard
              title={demo_heading}
              category={demo_category}
              image={car1}
            />
          </div>
          <div className="col-span-1">
            <BigBlogCard
              title={demo_heading}
              category={demo_category}
              image={car1}
            />
          </div>
          <div className="col-span-1">
            <BigBlogCard
              title={demo_heading}
              category={demo_category}
              image={car1}
            />
          </div>
        </div>
      </div>
    </>
  );
};