import React from "react";
import { demo_heading, demo_category } from "../../assets/constant";
import { BigBlogCard } from "../../components/BigBlogCard/BigBlogCard";
import car1 from "../../assets/car-1.jpg";

export const HelpCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="grid grid-cols-2 gap-8 h-auto">
          <div className="col-span-1 h-40">
            <BigBlogCard
              title={demo_heading}
              category={demo_category}
              image={car1}
            />
          </div>
          <div className="col-span-1 h-40">
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
