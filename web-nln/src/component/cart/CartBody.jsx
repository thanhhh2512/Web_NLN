import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { CartData } from "../../common/json/CartData";
import "./Cart.css";
import axios from "axios";

import { formatPrice } from "../../utils/formatPrice";

function CartBody() {
  const [cart, setCart] = useState([]);

  const user = JSON.parse(localStorage.getItem("user")) || { _id: 'null'};
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/carts?user=" + user._id)
      .then((res) => {
        if(res.data.data.items )
          setCart(res.data.data.items);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteFromCart = (productId) => {
    axios
      .delete("http://localhost:8080/api/carts/" + productId)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (product, quantity) => {
    axios
      .post("http://localhost:8080/api/carts", {
        userId: user._id, // Provide the user ID here
        product: {
          _id: product.product._id,
          quantity: quantity,
        },
        quantity: quantity,
      })
      .then((res) => {
        console.log(res.data);
        setCart(res.data.cart.items);
      })
      .catch((err) => console.log(err));

    // setCart([...cart, { product: data.productDB, quantity: quantity }]);
  };

  const listItem = cart.map((item) => {
    return (
      <div className="item" key={item._id}>
        <div className="img-item">
          <img
            src={"http://localhost:8080" + item.product.images[0].path}
            alt={item.product.name}
          />
        </div>
        <div className="itemList-detail">
          <div className="des-item">{item.product.name}</div>
          <div className="more-infor">
            <div>
              <p className="type-product">
                <span className="label">Loại sản phẩm</span>
                <span className="pref-item">{item.product.type}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="quantity-item">
          <button
            className="btn-pre"
            onClick={(e) => addToCart(item, item.quantity - 1)}
          >
            -
          </button>
          <input
            min="1"
            max="99"
            type="number"
            width="30px"
            value={item.quantity}
            readOnly
          />
          <button
            className="btn-add"
            onClick={(e) => addToCart(item, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="price-item">
          <p>
            <span className="label">Giá</span>
            <span>{formatPrice(item.product.price)}</span>
          </p>
          <div className="remove-item">Xoá </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cart-form-warraper">
      <div className="warraper-title">
        <p>GIỎ HÀNG CỦA BẠN</p>
      </div>
      <div className="detail-cart">
        <div className="salelist">
          <section className="list-items">
            {/* Khúc này có thể chia ra component */}
            {listItem.length >0 ? listItem : "Giỏ hàng trống"}
          </section>
        </div>
        <div className="container-review">
          <div className="review">
            <h2 className="title-review">TÓM TẮT ĐƠN HÀNG</h2>
            <div className="line"></div>
            <div className="sum-wrapper">
              <p className="lable-summary">TỔNG GIÁ</p>
              <p className="summary">
                {formatPrice(
                  cart.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )
                )}
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="check-out">
            <Link to={"/order"}>
              <button className="btn-submit">THANH TOÁN</button>
            </Link>
            <button className="btn-continue">TIẾP TỤC MUA HÀNG</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartBody;
