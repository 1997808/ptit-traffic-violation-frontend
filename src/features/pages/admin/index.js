import React from "react";
import { Chart1 } from "../../../components/Chart/BarChart";
import { OverviewCard } from "../../../components/Card/OverviewCard";

export const AdminHome = () => {
  return (
    <div className="">
      <Chart1 />
      {/* lỗi hay vi phạm chart */}
      <div className="grid grid-cols-3 gap-8">
        <OverviewCard title="Lượng ô tô vi phạm" data="270" />
        <OverviewCard title="Lượng xe máy vi phạm" data="3201" />
        <OverviewCard title="Lượng xe điện vi phạm" data="65" />
        <OverviewCard title="Số vi phạm trong ngày" data="4034" />
        <OverviewCard title="Số người nộp phạt trong ngày" data="1707" />
        <OverviewCard title="Số vi phạm chưa nộp phạt" data="2300" />
      </div>
    </div>
  );
};
