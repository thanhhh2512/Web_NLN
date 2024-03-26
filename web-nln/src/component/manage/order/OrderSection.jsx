import "./OrderSection.css";
import { useEffect, useState } from "react";
import { CartData } from "../../../common/json/CartData";
import "../../cart/Cart.css";
function OrderSection() {
  const [transport, setStransport] = useState("15.000");
  const [summary, setSummary] = useState();
  // Tính tổng giá trị hàng
  const totalBill = () => {
    var tmp = 0;
    CartData.forEach((item) => {
      tmp =
        tmp +
        Number.parseInt(item.ProductPrice) * Number.parseFloat(item.Quantity);
    });
    return tmp / 1000 + ".000";
  };
  useEffect(() => {
    var total =
      Number.parseInt(totalBill()) + Number.parseInt(transport) + ".000";
    setSummary(total);
  }, [transport]);
  // Xử lí sự kiện thay đổi đơn vị vận chuyển

  // render danh sách đơn hàng
  var listOrder = CartData.map((item) => {
    return (
      <div className="item in-order-section" key={item.ProductNo}>
        <div className="item-detail">
          <img src={item.ProductImage[0]} alt={item.ProductName} />
          {item.ProductName}
        </div>
        <div className="quantity-item">
          <input
            className="q-order"
            value={item.Quantity}
            type="number"
            readOnly
          ></input>
        </div>
        <div className="price-item">
          {Number.parseInt(item.ProductPrice) / 1000 + ".000 vnd"}
        </div>
        <div className="total">
          {(Number.parseInt(item.ProductPrice) *
            Number.parseInt(item.Quantity)) /
            1000 +
            ".000"}{" "}
          vnd
        </div>
      </div>
    );
  });
  return (
    <main className="wrapper">
      <div className="title-page">
        <h1>Đơn hàng </h1>
      </div>
      <section className="order-detail">
        <div className="header-table">
          <p>Tóm tắt đơn hàng</p>
          <p>Số lượng</p>
          <p>Giá</p>
          <p className="header-total">Tổng cộng</p>
        </div>
        <div className="item-List">{listOrder}</div>
        <div className="total-price">
          <div className="form-custom"> Tổng giá sản phẩm</div>
          <div>{totalBill()} vnd</div>
        </div>
        <div className="delivery-fee">
          <div className="fee">Phí vận chuyển</div>
          <div>{transport} vnd</div>
        </div>
        <div className="total">
          <div className="bill"> Tổng đơn hàng</div>
          <div>{summary} vnd</div>
        </div>
      </section>
      <div className="inf-show">
        <div className="choose-receiver">
          <h2>Địa chỉ nhận hàng</h2>
          <div className="address">
            <div className="address-title">
              <p>Tên người nhận:</p>
              <p>Số điện thoại:</p>
              <p>Tỉnh/Thành phố:</p>
              <p>Quận/huyện:</p>
              <p>Phường/Xã:</p>
            </div>
            <div className="address-detail">
              <p>Nguyen van A</p>
              <p>0959595022</p>
              <p>Cần Thơ</p>
              <p>Ninh Kiều</p>
              <p>An Khánh</p>
            </div>
            <div className="transportation">
                <div className="transport-title">
                    <p>Loại vận chuyển:</p>
                    <p>Hình thức thanh toán:</p>
                </div>
            <div className="transport-detail">
                <p>Giao hàng nhanh</p>
                <p>Thanh toán khi nhận hàng</p>
            </div>
            
          </div>
          </div>
          
        </div>
      </div>
      <div className="check-out-btn">
      <button className="btn-confirm"> Đã xác nhận</button>
          <button className="btn-delivery"> Đã giao hàng</button>
          <button className="btn-recieve"> Đã gửi hàng</button>
          <button className="btn-default"> Chưa được xác nhận</button>
      </div>
    </main>
  );
}

export default OrderSection;
