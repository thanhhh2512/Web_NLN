import { useEffect, useState } from "react";
import { CartData } from "../../common/json/CartData";
import "../cart/Cart.css";
import "./Order.css";
function OrderBody() {
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

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", // Assuming JSON data
    //   },
    //   body: JSON.stringify({
    //     // Your data object goes here
    //     key1: "value1",
    //     key2: "value2",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, []);
  // Xử lí sự kiện thay đổi đơn vị vận chuyển

  // render danh sách đơn hàng
  var listOrder = CartData.map((item) => {
    return (
      <div className="item in-order" key={item.ProductNo}>
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
        <h1>Đơn hàng của bạn</h1>
      </div>
      <section className="order-detail">
        <div className="head-table">
          <p>Tóm tắt đơn hàng</p>
          <p>Số lượng</p>
          <p>Giá</p>
          <p className="head-total">Tổng cộng</p>
        </div>

        <section className="order-detail">
            <div className="head-table">
                <p>Tóm tắt đơn hàng</p>
                <p>Số lượng</p>
                <p>Giá</p>
                <p className="head-total">Tổng cộng</p>
            </div>
            <div className='itemList'>
                {listOrder}
            </div>
            <div className="total-bill">
                <div className="form-custom"> Tổng giá sản phẩm</div>
                <div>{ totalBill()} vnd
                </div>
            </div>
        </section>
        <div className="inf-custom">
            <form className="address-form">
                <h2>Chi tiết địa chỉ</h2>
                <label className="label form-custom" htmlFor="name-custom">Tên người nhận</label>
                <input type="text" name="name-custom" className=" input-form"></input>
                <label className="label form-custom" htmlFor="phone-number">Số điện thoại</label>
                <input type="text" name="phone-number" className=" input-form"></input>
                <label className="label form-custom" htmlFor="city">Tỉnh/thành phố</label>
                <input type="text" name="city" className=" input-form"></input>
                <label className="label form-custom" htmlFor="distric">Quận/ huyện</label>
                <input type="text" name="distric" className=" input-form"></input>
                <label className="label form-custom" htmlFor="ward">Phường/ xã</label>
                <input type="text" name="ward" className=" input-form"></input>
                <label className="label form-custom" htmlFor="detail-custom">Chi tiết</label>
                <input type="text" name="detail-custom" className=" input-form"></input>
            </form>
            <div className="choose-receiver">
                <h2>Địa chỉ nhận hàng</h2>
                <p>Vui lòng chọn địa chỉ mặc định hoặc thêm mới địa chỉ nhận hàng</p>
                <div className="form-group">
                <input type="radio" id="default" name="address" value="Default" checked={true}/>
                <label htmlFor="default">Mặc định</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="add" name="address" value="Add new address"></input>
                    <label htmlFor="add">Thêm địa chỉ mới</label>
                </div>
            </div>
        </div>    
        <div className="transport">
            <h2>Loại vận chuyển</h2>
            <div className="select-radio">
                    <div className="option-gh">
                        <div><input type="radio" id="ghtk" name="transport" value="15.000" checked={transport === "15.000"} onChange={(e) => setStransport(e.target.value)}></input><label htmlFor="ghtk">Giao hàng tiết kiệm</label></div>
                        <p>Giao hàng sau 3-5 ngày</p>
                        <p>15.000 vnd</p>
                    </div>
                    <div className="option-gh">
                        <div><input type="radio" id="ghn" name="transport" value="30.000" checked={transport === "30.000"} onChange={(e) => setStransport(e.target.value)}></input><label htmlFor="ghn">Giao hàng nhanh</label></div>
                        <p>Giao hàng sau 1-2 ngày</p>
                        <p>35.000 vnd</p>
                    </div>
            </div>

        </div>
      </div>
      <div className="transport">
        <h2>Loại vận chuyển</h2>
        <div className="select-radio">
          <div className="option-gh">
            <div>

                <h2>Hình thức thanh toán</h2>
                <input type="radio" name="payment" id="payment" value="cash" checked></input>
                <label htmlFor="payment">Thanh toán khi nhận hàng</label>

            </div>
            <p>Giao hàng sau 3-5 ngày</p>
            <p>15.000 vnd</p>
          </div>
          <div className="option-gh">
            <div>
              <input
                type="radio"
                id="ghn"
                name="transport"
                value="30.000"
                checked={transport === "30.000"}
                onChange={(e) => setStransport(e.target.value)}
              ></input>
              <label htmlFor="ghn">Giao hàng nhanh</label>
            </div>
            <p>Giao hàng sau 1-2 ngày</p>
            <p>35.000 vnd</p>
          </div>
        </div>
      </div>
      <div className="footbill">
        <div>
          <h2>Hình thức thanh toán</h2>
          <input type="radio" name="payment" value="cash" checked></input>
          <label htmlFor="payment">Thanh toán khi nhận hàng</label>
        </div>
        <div>
          <h2>Tóm tắt thanh toán</h2>
          <div className="summary">
            <p>
              <span>Tổng giá sản phẩm</span>
              <span>{totalBill()} vnd</span>
            </p>
            <p>
              <span>Phí vận chuyển</span>
              <span>{transport} vnd</span>
            </p>
            <p>
              <span>Tổng đơn hàng</span>
              <span>{summary} vnd</span>
            </p>
          </div>
        </div>
      </div>
      <div className="check-out">
        <a href="/order">
          <button className="btn-submit"> Đặt hàng</button>
        </a>
      </div>
    </main>
  );
}

export default OrderBody;
