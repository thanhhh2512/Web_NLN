import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartData } from "../../common/json/CartData";
import "./Cart.css";

const priceItemInCart = (item) => {
  var total =
    Number.parseInt(item.Quantity) * Number.parseInt(item.ProductPrice);
  return total;
};
function CartBody() {
  // fake Data
  var Cart = CartData;
  // var [sumCart, setSumCart] = useState(() => {
  //   var tmp = 0;
  //   Cart.forEach((item) => {
  //     tmp = tmp + priceItemInCart(item);
  //   });
  //   return tmp;
  // });

  // Hàm dùng xử lí thay đổi giá trị tổng
  function sumCartValue() {
    var tmp = 0;
    Cart.forEach((item) => {
      tmp = tmp + priceItemInCart(item);
    });
    setSumCart(tmp);
  }
  // Hàm xử lý thay đổi số lượng
  function reduceValue() {
    // Cái xử lý này có hiệu lực khi call API,
    // Vì giờ làm nó thay đổi trong file khác cách thay đổi trong dữ liệu gửi đi
    sumCartValue();
  }
  const [cart, setCart] = useState(CartData);
  const [sumCart, setSumCart] = useState(0);

  useEffect(() => {
    // Calculate sumCart when cart changes
    let tmp = 0;
    cart.forEach((item) => {
      tmp = tmp + priceItemInCart(item);
    });
    setSumCart(tmp);
  }, [cart]);

  const addToCart = async (product, quantity) => {
    try {
      const response = await fetch("/api/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: "userId", // Provide the user ID here
          product: product,
          quantity: quantity,
        }),
      });
      const data = await response.json();
      console.log(data); // Log the response for debugging
      // Update cart after adding to cart successfully
      setCart([...cart, { product: data.productDB, quantity: quantity }]);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  const handleAddToCart = (product) => {
    addToCart(product, 1); // Assuming quantity to add is 1
  };

  // render danh sách sản phẩm
  const listItem = Cart.map((item) => {
    return (
      <div className="item" key={item.ProductNo}>
        <div className="img-item">
          <img src={item.ProductImage} alt={item.ProductName}></img>
        </div>
        <div className="itemList-detail">
          <div className="des-item">{item.ProductName}</div>
          <div className="more-infor">
            <div>
              <p className="type-product">
                <span className="label">Loại sản phẩm</span>
                <span className="pref-item">{item.TypeOfProduct}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="quantity-item">
          <button className="btn-pre" onClick={(e) => console.log(e.target)}>
            -
          </button>
          <input
            min="1"
            max="99"
            type="number"
            width="30px"
            value={item.Quantity}
            readOnly
          />
          <button className="btn-add" onClick={(e) => console.log(e.target)}>
            +
          </button>
        </div>
        <div className="price-item">
          <p>
            <span className="label">Giá</span>
            <span>{priceItemInCart(item) + " vnđ"}</span>
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
            {listItem}
          </section>
        </div>
        <div className="container-review">
          <div className="review">
            <h2 className="title-review">TÓM TẮT ĐƠN HÀNG</h2>
            <div className="line"></div>
            <div className="sum-wrapper">
              <p className="lable-summary">TỔNG GIÁ</p>
              <p className="summary">{sumCart} vnđ</p>
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
