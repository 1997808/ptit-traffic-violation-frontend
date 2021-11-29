import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="fixed z-30 top-0 left-0 w-full h-auto">
      <div className="h-20 bg-opacity-80 bg-black"></div>
      <div className="absolute w-full h-full top-0 left-0">
        <div className="container mx-auto h-full flex items-center justify-between text-white">
          <Link to="/">
            <p className="text-xl">Vipham</p>
          </Link>
          <div className="flex justify-between">
            <Link to="/search">
              <p className="text-base px-6 py-2">Tìm kiếm</p>
            </Link>
            <Link to="/blog">
              <p className="text-base px-6 py-2">Bài viết</p>
            </Link>
            <Link to="/help">
              <p className="text-base px-6 py-2">Hướng dẫn</p>
            </Link>
            <Link to="/contact">
              <p className="text-base px-6 py-2">Liên hệ</p>
            </Link>
          </div>
          <Link to="/login">
            <p className="text-sm">Đăng nhập</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
