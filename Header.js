import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactPlayer from "react-player";
import Brand from "../image/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import "../App.css";

/* LƯU Ý TẠO THANH HEADER :
+ Logo_brand_thương hiệu muốn truyền tải
+ Sự thu hút để tiếp tục xem tiếp trang web
+  Đề cập rõ ràng mục đích hướng tới
+ updating ........*/

function Header() {
  return (
    <div className="row bg-dark d-flex " id="header">
      <div id="right" className="col-lg-6 p-0">
        <img src={Brand} alt="" />
      </div>
      <div id="right" className="col-lg-6 p-0">
        <span className="text-light">
          Vãi L Luôn đầu cắt mohican chéo <AiFillFacebook />{" "}
        </span>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UQ5CbSPrAZY&t=384s"
          width="640px"
          height="360px"
          playing={true}
          controls={false}
        />
      </div>
    </div>
  );
}
export default Header;
