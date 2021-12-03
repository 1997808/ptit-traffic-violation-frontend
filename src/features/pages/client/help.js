import React from "react";
import { HelpStep } from "../../../components/Text/HelpStep";
import guide1 from "../../../assets/images/guide1.png";
import guide2 from "../../../assets/images/guide2.png";
import guide3 from "../../../assets/images/guide3.png";
import guide4 from "../../../assets/images/guide4.png";

export const Help = () => {
  return (
    <div className="w-full h-auto mt-20 mb-20">
      <div className="container mx-auto mt-10">
        <p className="text-xl font-semibold text-center pb-8">
          Hướng dẫn sử dụng
        </p>
        <div className="grid grid-cols-3 gap-8 gap-y-20">
          <img
            className="col-span-2 w-full h-full mr-4 object-contain"
            src={guide1}
            alt="banner"
          />
          <HelpStep
            title={"1. Tra cứu thủ tục hành chính, dịch vụ công"}
            content={
              "Người dân, doanh nghiệp có 3 cách để tiếp cận thủ tục hành chính, dịch vụ công, đó là: -Tìm kiếm theo từ khóa ở trang chủ, trang công dân, trang doanh nghiệp -Chọn thủ tục hành chính từ sự kiện của công dân, doanh nghiệp -Chọn từ danh sách dịch vụ công trực tuyến"
            }
          />
          <HelpStep
            title={"2. Chọn cơ quan thực hiện"}
            content={
              "Căn cứ vào “Cơ quan thực hiện” trong thông tin thủ tục hành chính, người dân, doanh nghiệp chọn cơ quan thực hiện tương ứng của thủ tục cần thực hiện"
            }
          />
          <img
            className="col-span-2 w-full h-full mr-4 object-contain"
            src={guide2}
            alt="banner"
          />
          <img
            className="col-span-2 w-full h-full mr-4 object-contain"
            src={guide3}
            alt="banner"
          />
          <HelpStep
            title={"3. Đăng ký, đăng nhập tài khoản công dân, doanh nghiệp"}
            content={
              "Người dân, doanh nghiệp có thể đăng ký tài khoản bằng: Sim ký số; USB ký số; Thuê bao di động (Dành cho Công dân); Mã số BHXH (Dành cho Công dân) Sau khi đăng ký tài khoản, Người dân, doanh nghiệp đăng nhập bằng 1 trong các cách sau: Sim ký số; USB ký số; CMT/CCCD"
            }
          />
          <HelpStep
            title={"4. Nộp hồ sơ, tra cứu, theo dõi tình trạng hồ sơ"}
            content={
              "Sau khi Người dân, doanh nghiệp đăng nhập thành công, Cổng Dịch vụ công Quốc gia sẽ điều hướng về Cổng của Bộ/Ngành/Địa phương nơi mà người dân, doanh nghiệp đăng ký thực hiện thủ tục để nộp hồ sơ. Người dân, doanh nghiệp tra cứu tình trạng hồ sơ theo mã số hồ sơ được cấp trên Cổng Dịch vụ công Quốc gia, để theo dõi chi tiết tiến trình xử lý, quản lý dữ liệu đầu vào, đầu ra của hồ sơ thì người dân thực hiện đăng nhập để xem chi tiết."
            }
          />
          <img
            className="col-span-2 w-full h-full mr-4 object-contain"
            src={guide4}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};
