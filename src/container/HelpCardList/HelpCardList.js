import React from "react";
import { demo_category } from "../../assets/util/constant";
import { BigBlogCard } from "../../components/Card/BigBlogCard";
import help4 from "../../assets/images/help4.jpeg";
import help2 from "../../assets/images/help2.jpg";

export const HelpCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="grid grid-cols-2 gap-8 h-auto">
          <div className="col-span-1 h-40">
            <BigBlogCard
              title={"Hướng dẫn thi bằng lái A1"}
              category={demo_category}
              image={help4}
            />
          </div>
          <div className="col-span-1 h-40">
            <BigBlogCard
              title={"Cầm vô lăng đúng cách"}
              category={demo_category}
              image={help2}
            />
          </div>
        </div>
      </div>
    </>
  );
};
