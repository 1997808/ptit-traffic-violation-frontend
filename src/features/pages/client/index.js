import React from "react";
// import logo from "../../../assets/logo.png";
import { Slider } from "../../../components/Slider/Slider";
import { QuickSearch } from "../../../components/QuickSearch/QuickSearch";
import { PopularCardList } from "../../../container/PopularCardList/PopularCardList";
import { CourseCardList } from "../../../container/CourseCardList/CourseCardList";
export const Home = () => {
  return (
    <div className="">
      <Slider />
      <QuickSearch />
      <PopularCardList />
      <CourseCardList />
    </div>
  );
};
