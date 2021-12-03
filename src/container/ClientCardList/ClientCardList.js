import React from "react";
import { Heading } from "../../components/Text/Heading";
import {
  // demo_heading,
  // demo_subtitle,
  // demo_name,
  demo_rating,
  demo_date,
  demo_content,
  demo_content_2,
  demo_content_3,
} from "../../assets/util/constant";
import { ClientCard } from "../../components/Card/ClientCard";
// import bitcoin from "../../assets/images/bitcoin.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.jfif";

export const ClientCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="pb-8">
          <Heading
            title={"Hòm thư góp ý"}
            subtitle={"Những đánh giá, đóng góp của người dùng với trang web"}
          />
        </div>
        <div className="grid grid-cols-3 gap-4" style={{ maxHeight: "300px" }}>
          <div className="col-span-1">
            <ClientCard
              name={"Dung Dung"}
              rating={demo_rating}
              date={demo_date}
              content={demo_content}
              image={profile1}
            />
          </div>
          <div className="col-span-1">
            <ClientCard
              name={"Vu Trong Duc"}
              rating={demo_rating}
              date={demo_date}
              content={demo_content_2}
              image={profile2}
            />
          </div>
          <div className="col-span-1">
            <ClientCard
              name={"Chu"}
              rating={demo_rating}
              date={demo_date}
              content={demo_content_3}
              image={profile3}
            />
          </div>
        </div>
      </div>
    </>
  );
};
