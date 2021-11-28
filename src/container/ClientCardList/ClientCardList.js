import React from "react";
import { Heading } from "../../components/Heading/Heading";
import {
  demo_heading,
  demo_subtitle,
  demo_name,
  demo_rating,
  demo_date,
  demo_content,
} from "../../assets/constant";
import { ClientCard } from "../../components/ClientCard/ClientCard";
import bitcoin from "../../assets/bitcoin.png";

export const ClientCardList = () => {
  return (
    <>
      <div className="container mx-auto h-auto">
        <div className="pb-8">
          <Heading title={demo_heading} subtitle={demo_subtitle} />
        </div>
        <div className="grid grid-cols-3 gap-4" style={{ maxHeight: "300px" }}>
          <div className="col-span-1">
            <ClientCard
              name={demo_name}
              rating={demo_rating}
              date={demo_date}
              content={demo_content}
              image={bitcoin}
            />
          </div>
          <div className="col-span-1">
            <ClientCard
              name={demo_name}
              rating={demo_rating}
              date={demo_date}
              content={demo_content}
              image={bitcoin}
            />
          </div>
          <div className="col-span-1">
            <ClientCard
              name={demo_name}
              rating={demo_rating}
              date={demo_date}
              content={demo_content}
              image={bitcoin}
            />
          </div>
        </div>
      </div>
    </>
  );
};