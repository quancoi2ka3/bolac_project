import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Brand from "../image/logo.png"
/* LƯU Ý TẠO THANH HEADER :
+ Logo_brand_thương hiệu muốn truyền tải
+ Sự thu hút để tiếp tục xem tiếp trang web
+  Đề cập rõ ràng mục đích hướng tới
+ updating ........*/

function Header() {
  return (
    <div className="col-12 bg-dark" id="header">
     <img src={Brand} alt="" /> <span className="text-light">Vãi L Luôn đầu cắt mohican chéo</span>
    </div>
  );
}
export default Header;
