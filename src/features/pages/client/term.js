import React from "react";
import { TermStep } from "../../../components/Text/TermStep";

export const Term = () => {
  return (
    <div className="w-full h-auto mt-20 mb-20">
      <div className="container mx-auto mt-10">
        <p className="text-xl font-semibold text-center pb-8">
          Điều khoản và điều kiện sử dụng
        </p>

        <div className="grid grid-cols-1 gap-8">
          <TermStep
            title={
              "1. Tổ chức, cá nhân sử dụng Dịch vụ trên cổng Dịch vụ công quốc gia có trách nhiệm:"
            }
            content={
              "Chịu trách nhiệm trước pháp luật về những thông tin kê khai, đăng ký tài khoản trên Cổng Dịch vụ công Quốc gia, chỉ sử dụng Cổng Dịch vụ công Quốc gia cho các mục đích hợp pháp và phải chịu trách nhiệm về mọi hoạt động được thực hiện bằng tài khoản của mình. Chịu trách nhiệm giữ bí mật thông tin tài khoản, mật khẩu của mình, trường hợp mật khẩu bị mất hoặc bị đánh cắp hoặc phát hiện có người sử dụng trái phép tài khoản của mình, phải thông báo kịp thời cho Cơ quan quản lý và vận hành hệ thống."
            }
          />
          <TermStep
            title={
              "2. Tổ chức, cá nhân sử dụng Dịch vụ trên cổng Dịch vụ công quốc gia không được thực hiện một trong các hành vi sau:"
            }
            content={
              "Quấy rối, gây phiền toái, gây bất tiện, hạn chế, ngăn chặn hoặc các hành vi vi phạm pháp luật khác vi phạm các quyền, lợi ích hợp pháp của tổ chức, cá nhân khác trong việc sử dụng Cổng Dịch vụ công Quốc gia; Đăng hoặc truyền qua Cổng Dịch vụ công Quốc gia bất kỳ tài liệu có nội dung xuyên tạc, phỉ báng, khiêu dâm, xúc phạm hoặc gây dư luận xấu, làm giảm uy tín của tổ chức cá nhân khác hoặc tài liệu, thông tin khác trái với các quy định của pháp luật;"
            }
          />
          <TermStep
            title={
              "3. Cổng Dịch vụ công quốc gia có quyền Tạm dừng, Khoá, Huỷ các tài khoản trên cổng có các hành vi vi phạm pháp luật, gian lận hoặc không tuân thủ các điều khoản sử dụng đã nêu ở trên mà không cần thông báo cũng như bồi thường"
            }
          />
          <TermStep
            title={
              "4. Cổng Dịch vụ công Quốc gia không chia sẻ thông tin về người sử dụng với các cơ quan khác mà không có sự cho phép của người sử dụng, trừ các trường hợp:"
            }
            content={
              "Việc cung cấp là cần thiết để giải quyết một thủ tục hành chính, dịch vụ công theo yêu cầu của người sử dụng; Việc cung cấp thông tin trong trường hợp cần thiết vì lợi ích công cộng, sức khỏe của cộng đồng theo quy định của luật có liên quan."
            }
          />
          <TermStep
            title={
              "5. Trong trường hợp sửa đổi nội dung các điều khoản và điều kiện sử dụng Cổng Dịch vụ công Quốc gia, các nội dung sửa đổi sẽ được thông báo trên Cổng. Người sử dụng tiếp tục sử dụng và tiếp tục thực hiện các yêu cầu dịch vụ trên Cổng có nghĩa là đã chấp nhận các sửa đổi đó."
            }
          />
        </div>
      </div>
    </div>
  );
};
