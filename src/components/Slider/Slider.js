import React from "react";
import banner from "../../assets/banner_traffic.jpg";
import { ButtonGradient } from "../Button/ButtonGradient";

export const Slider = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img className="w-full h-full object-cover" src={banner} alt="banner" />
      <div className="absolute w-full h-full top-0 left-0 bg-opacity-40 bg-black"></div>
      <div className="absolute w-full h-full top-0 left-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full w-2/3 lg:w-1/2 text-white">
            <div>
              <p className="text-6xl leading-tight pb-4 font-medium">
                Cổng dịch vụ công giao thông vận tải
              </p>
              <p className="text-lg text-gray-300 pb-12">
                Kết nối, cung thông tin và dịch vụ công mọi lúc, mọi nơi. Tra
                cứu, nộp phạt quyết định xử phạt vi phạm hành chính trong lĩnh
                vực giao thông đường bộ
              </p>
              <ButtonGradient text={"Hướng dẫn"} type="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
