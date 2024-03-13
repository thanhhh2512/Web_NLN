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
          <a id="about-me">Về chúng tớ</a>
          <a id="join-with-us">Tham gia bán hàng</a>
          <a id="news">Tin tức</a>
          <a id="poligy">Chính sách</a>
        </nav>
        <div className="main-tools-container">
          <Link to={"/search"}>
            <i className="fa-solid fa-magnifying-glass tools-icon"></i>
          </Link>
          <i className="fa-solid fa-cart-shopping tools-icon"></i>
          <Link to={"/login"}>
            <i className="fa-solid fa-user tools-icon"></i>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
