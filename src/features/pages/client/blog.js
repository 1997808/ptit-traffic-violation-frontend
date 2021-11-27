import React from "react";
// import logo from "../../../assets/logo.png";
import { Slider } from "../../../components/Slider/Slider";
import { QuickSearch } from "../../../components/QuickSearch/QuickSearch";
import { PopularCardList } from "../../../container/PopularCardList/PopularCardList";
import { CourseCardList } from "../../../container/CourseCardList/CourseCardList";
import { ClientCardList } from "../../../container/ClientCardList/ClientCardList";
import { GuideCardList } from "../../../container/GuideCardList/GuideCardList";

export const Blog = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full pb-16 lg:pb-20 mb-20">
        <Slider />
        <div className="absolute w-full bottom-0 left-0">
          <QuickSearch />
        </div>
      </div>
      <div className="mb-20">
        <PopularCardList />
      </div>
      <div className="mb-20">
        <CourseCardList />
      </div>
      <div className="mb-20">
        <ClientCardList />
      </div>
      <div className="mb-20">
        <GuideCardList />
      </div>
    </div>
  );
};
