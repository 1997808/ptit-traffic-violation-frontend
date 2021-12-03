import React from "react";
import { BigBlogCard } from "../../../components/Card/BigBlogCard";
import {
  demo_category,
  demo_category_2,
  demo_category_3,
} from "../../../assets/util/constant";
import car1 from "../../../assets/images/car-1.jpg";
import xemay1 from "../../../assets/images/xemay1.jpg";
import xemay3 from "../../../assets/images/xemay3.jpg";
import xedien1 from "../../../assets/images/xedien1.jpg";

import car3 from "../../../assets/images/car-3.jpg";
import xemay4 from "../../../assets/images/xemay4.jpg";
import xedien3 from "../../../assets/images/xedien3.jpg";
import car2 from "../../../assets/images/car-2.jpg";

export const Blog = () => {
  return (
    <div className="w-full h-auto mt-20 mb-20">
      <div className="container mx-auto mt-10">
        <p className="text-xl font-semibold text-center pb-8">Blog</p>
        <div className="grid grid-cols-3 gap-8 h-60 lg:h-96 mb-8">
          <BigBlogCard
            title={"Nhiều quốc lộ miền Trung sạt lở được thông tuyến"}
            category={demo_category_3}
            image={car1}
          />
          <BigBlogCard
            title={"Doanh số xe máy tháng 11/2021"}
            category={demo_category_2}
            image={xemay1}
          />
          <BigBlogCard
            title={"Một số luật giao thông đường bộ (Phần 2)"}
            category={demo_category}
            image={xemay3}
          />
        </div>

        <div className="grid grid-cols-3 gap-8 h-60 lg:h-96 mb-8">
          <BigBlogCard
            title={"Cảnh báo một số mẫu xe điện kém chất lượng"}
            category={demo_category_2}
            image={xedien1}
          />
          <BigBlogCard
            title={"Chủ xe phải trả phí dán thẻ không dừng sau 31/12"}
            category={demo_category}
            image={car3}
          />
          <BigBlogCard
            title={"Hàng nghìn người đi xe máy về các tỉnh phía Bắc"}
            category={demo_category_3}
            image={xemay4}
          />
        </div>

        <div className="grid grid-cols-3 gap-8 h-60 lg:h-96 mb-8">
          <BigBlogCard
            title={"Đề xuất miễn phí trước bạ với xe máy điện"}
            category={demo_category_2}
            image={xedien3}
          />
          <BigBlogCard
            title={"Dự án thu phí ôtô vào trung tâm TP HCM"}
            category={demo_category_3}
            image={car2}
          />
          <BigBlogCard
            title={"Nhiều quốc lộ miền Trung sạt lở được thông tuyến"}
            category={demo_category_3}
            image={car1}
          />
        </div>

        <div className="grid grid-cols-3 gap-8 h-60 lg:h-96 mb-8">
          <BigBlogCard
            title={"Nhiều quốc lộ miền Trung sạt lở được thông tuyến"}
            category={demo_category_3}
            image={car1}
          />
          <BigBlogCard
            title={"Doanh số xe máy tháng 11/2021"}
            category={demo_category_2}
            image={xemay1}
          />
          <BigBlogCard
            title={"Một số luật giao thông đường bộ (Phần 2)"}
            category={demo_category}
            image={xemay3}
          />
        </div>
      </div>
    </div>
  );
};
