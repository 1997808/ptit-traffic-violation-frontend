export const vndFormatter = new Intl.NumberFormat("vn-VN", {
  style: "currency",
  currency: "VND",
});

export const statusFormatter = (text) => {
  if (text === "paid") {
    return "Đã nộp";
  } else if (text === "unpaid") {
    return "Chưa nộp";
  } else {
    return text;
  }
};

export const statusDisableFormatter = (text) => {
  if (text === "paid") {
    return true;
  } else {
    return false;
  }
};

export const documentPayFormatter = (text) => {
  if (text === "paid") {
    return "Đã nộp";
  } else {
    return "Thanh toán";
  }
};
