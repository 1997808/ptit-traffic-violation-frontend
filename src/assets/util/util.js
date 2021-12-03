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
