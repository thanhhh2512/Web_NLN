import React, { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TypeofProductData } from "../../common/json/TypeofProductData";

export default function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      <div className="Header">
        <div className="name">
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "/images/fixed/image 29.png"}
            alt=""
          />
        </div>
        <nav>
          <Link to={"/"} id="about-me">
            Trang chủ
          </Link>
          <Link to="/introduction" id="join-with-us">
            Giới thiệu
          </Link>
          <div className="dropdown">
            <a id="news">Sản phẩm </a>
            <div className="dropdown-content">
              {TypeofProductData.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  {product.title}
                </Link>
              ))}
            </div>
          </div>
          <a id="poligy">Tư vấn</a>
        </nav>
        <div className="main-tools-container">
          <a onClick={toggleSearch}>
            <i className="fa-solid fa-magnifying-glass tools-icon"></i>
          </a>
          {searchVisible && (
            <div className="search-container">
              {/* Thêm đoạn mã JSX cho ô tìm kiếm ở đây */}
              <input type="text" placeholder="Tìm kiếm..." />
            </div>
          )}
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping tools-icon"></i>
          </Link>
          <Link to={"/loginpage"}>
            <i className="fa-solid fa-user tools-icon"></i>
          </Link>
        </div>
      </div>

      <Outlet></Outlet>
    </>
  );
}
