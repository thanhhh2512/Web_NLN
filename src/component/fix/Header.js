import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  return (
    <>
      <div className="Header">
        <div className="name">
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "/images/fixed/image 29.png"}
          />
        </div>
        <nav>
        <Link to={"/"}id="about-me"> Trang chủ</Link>
          <a id="join-with-us">Giới thiệu</a>
          <Link to={"/product"}id="news"> Sản phẩm </Link>
          <a id="poligy">Tư vấn</a>
        </nav>
        <div className="main-tools-container">
          <Link to={"/search"}>
            <i className="fa-solid fa-magnifying-glass tools-icon"></i>
          </Link>
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
