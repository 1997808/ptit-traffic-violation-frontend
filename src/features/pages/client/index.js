import React from "react";
import logo from "../../../assets/logo.png";
import { Slider } from "../../../components/Slider/Slider";
import { QuickSearch } from "../../../components/QuickSearch/QuickSearch";
import { PopularCard } from "../../../components/PopularCard/PopularCard";

export const Home = () => {
  return (
    <div className="">
      {/* <p>404</p> */}
      <Slider />
      <QuickSearch />
      <PopularCard />
    </div>
  );
};
