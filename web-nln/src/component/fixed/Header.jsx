// Header.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TypeofProductData } from "../../common/json/TypeofProductData";
import axios from 'axios';

export default function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false); // State để theo dõi có dữ liệu tìm kiếm hay không
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy tất cả sản phẩm từ server và lưu vào state
    async function fetchProducts() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products`);
        const result = response.data;
        setProducts(result.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    // Thực hiện tìm kiếm trong sản phẩm
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

    // Kiểm tra nếu không có kết quả tìm kiếm
    if (results.length === 0) {
      setNoDataFound(true);
    } else {
      setNoDataFound(false);
    }
  }, [searchTerm, products]);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
    setSearchFocused(true); // Hiển thị menu dropdown khi nhập liệu
  };

  const handleFocus = () => {
    setSearchFocused(true);
  };

  const handleBlur = () => {
    // Nếu không có giá trị trong ô tìm kiếm, ẩn menu dropdown khi mất focus
    if (!searchTerm) {
      setSearchFocused(false);
    }
  };

  const handleClick = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      return navigate("/loginpage");
    }

    return navigate("/account");
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
                <Link key={product.id} to={`/product/search?type=${product.title}`}>
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
            <div className={`search-container ${searchTerm ? 'focused' : ''}`}>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <div className="dropdown-menu-search">
                {noDataFound ? (
                  <ul>
                    <li>Không có dữ liệu</li>
                  </ul>
                ) : (
                  (searchFocused && searchTerm) ? (
                    <ul className="search-results">
                      {searchResults.map(product => (
                        <li key={product._id}>
                          <Link to={`/detail/${product._id}`}>
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                    </>
                  )
                )}


                {/* {(searchFocused && searchTerm) ?
                  <ul className="search-results">
                    {searchResults.map(product => (
                      <li key={product._id}>
                        <Link to={`/detail/${product._id}`}>
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  :
                  (<>
                    <li>
                      Không có dữ liệu
                    </li>
                  </>)
                } */}
              </div>
            </div>
          )}
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping tools-icon"></i>
          </Link>
          <button onClick={handleClick}>
            <i className="fa-solid fa-user tools-icon"></i>
          </button>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
