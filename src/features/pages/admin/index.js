import React, { useState, useEffect } from "react";
import { Chart1 } from "../../../components/Chart/BarChart";
import { OverviewCard } from "../../../components/Card/OverviewCard";
import { MyAxios } from "../../../assets/util/api";

export const AdminHome = () => {
  const [documentViolation, setDocumentViolation] = useState([]);
  const [documentVehicle, setDocumentVehicle] = useState({});
  const [documentStatus, setDocumentStatus] = useState({});

  useEffect(() => {
    const countDocumentByViolation = async () => {
      await MyAxios.post("document/countDocumentByViolation.php")
        .then((res) => setDocumentViolation(res.data.data))
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    countDocumentByViolation();
  }, []);

  useEffect(() => {
    const countDocumentByVehicle = async () => {
      await MyAxios.post("document/countDocumentByVehicle.php")
        .then((res) => {
          setDocumentVehicle(res.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    countDocumentByVehicle();
  }, []);

  useEffect(() => {
    const countDocumentByStatus = async () => {
      await MyAxios.post("document/countDocumentByStatus.php")
        .then((res) => {
          setDocumentStatus(res.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    countDocumentByStatus();
  }, []);

  return (
    <div className="">
      <div className="mt-20 mb-20 flex justify-center">
        <Chart1 data={documentViolation} />
      </div>
      {/* lỗi hay vi phạm chart */}
      <div className="grid grid-cols-3 gap-8">
        <OverviewCard
          title="Lượng ô tô vi phạm"
          data={documentVehicle.oto}
          color="#D99F9A"
        />
        <OverviewCard
          title="Lượng xe máy vi phạm"
          data={documentVehicle.xemay}
          color="#D9C76F"
        />
        <OverviewCard
          title="Lượng xe điện vi phạm"
          data={documentVehicle.xedien}
          color="#79D9A2"
        />
        <OverviewCard
          title="Số vi phạm trong ngày"
          data={documentStatus.quantity}
        />
        <OverviewCard
          title="Số người nộp phạt trong ngày"
          data={documentStatus.paid}
        />
        <OverviewCard
          title="Số vi phạm chưa nộp phạt"
          data={documentStatus.unpaid}
        />
      </div>
    </div>
  );
};
