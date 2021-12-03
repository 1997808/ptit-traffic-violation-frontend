import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-gray-900">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-4 gap-8 py-12 text-white">
          <div className="col-span-2">
            <p className="text-xs text-gray-400">Địa chỉ</p>
            <p className="text-base pt-1">
              Cơ quan chủ quản: Văn phòng Chính phủ
            </p>
            <p className="text-base pt-1">www.dichvucong.gov.vn</p>
            <p className="text-xs text-gray-400 pt-4">Liên hệ</p>
            <p className="text-base pt-1">Email: dichvucong@chinhphu.vn</p>
            <p className="text-base pt-1">Tổng đài hỗ trợ: 18001096</p>
          </div>
          <div className="col-span-1">
            <p className="text-xs text-gray-400">Về chúng tôi</p>
            <p className="text-sm pt-1">Trang chủ</p>
            <p className="text-sm pt-1">Tra cứu</p>
            <p className="text-sm pt-1">Bài viết</p>
            <p className="text-sm pt-1">Hướng dẫn</p>
            <p className="text-sm pt-1">Liên hệ</p>
          </div>
          <div className="col-span-1">
            <p className="text-xs text-gray-400">Hướng dẫn</p>
            <p className="text-sm pt-1">Tra cứu thủ tục</p>
            <p className="text-sm pt-1">Chọn cơ quan thực hiện</p>
            <p className="text-sm pt-1">Đăng ký, đăng nhập tài khoản</p>
            <p className="text-sm pt-1">Nộp hồ sơ, tra cứu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
