import "./OrderSection.css";
import { useEffect, useState } from "react";
import { CartData } from "../../../common/json/CartData";
import "../../cart/Cart.css";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

function OrderSection() {
  const [order, setOrder] = useState(null);

  const [summary, setSummary] = useState();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/orderDetail?orderId=${orderId}`);

        const data = await response.data;
        setOrder(data);
      } catch (error) {
        console.error(error);
      }
    };


    fetchOrder();

  }, [orderId]);

  useEffect(() => {
    if (!order) return;

    // Calculate total summary
    const totalBill = order.items.reduce((total, item) => {
      return total + (Number.parseInt(item.product.price) * Number.parseFloat(item.quantity)) / 1000;
    }, 0);

    const total = order.total;
    setSummary(total.toFixed(3)); // Format to 3 decimal places
  }, [order]);
  const totalBill = () => {
    var tmp = 0;
    if (order && order.items)
      order.items.forEach((item) => {
        tmp =
          tmp +
          Number.parseInt(item.product.price) * Number.parseFloat(item.quantity);
      });
    return tmp / 1000 + ".000";
  };

  // Handle transport change


  // Render order items
  var listOrder = null;
  if (order && order.items) {
    listOrder = order.items.map((item) => (
      <div className="item in-order-section" key={item._id}>

        <div className="item-detail">
          <img src={`http://localhost:8080${item.product.images[0].path}`} alt={item.product.name} />
          {item.product.name}
        </div>
        <div className="quantity-item">
          <input className="q-order" value={item.quantity} type="number" readOnly />
        </div>
        <div className="price-item">
          {(Number.parseInt(item.product.price) / 1000).toFixed(3)} vnd
        </div>
        <div className="total">
          {((Number.parseInt(item.product.price) * Number.parseInt(item.quantity)) / 1000).toFixed(3)} vnd
        </div>
      </div>
    ));
  }
  console.log(listOrder)
  console.log(order)
  return (
    <main className="wrapper">
      <div className="title-page">
        <h1>Chi tiết đơn hàng #{orderId}</h1>
      </div>
      <section className="order-detail">
        <div className="header-table">
          <p>Tóm tắt đơn hàng</p>
          <p>Số lượng</p>
          <p>Giá</p>
          <p className="header-total">Tổng cộng</p>
        </div>
        <div className="item-List">{listOrder && listOrder}</div>
        <div className="total-price">
          <div className="form-custom"> Tổng giá sản phẩm</div>
          <div>{totalBill()} vnd</div>
        </div>
        <div className="delivery-fee">
          <div className="fee">Phí vận chuyển</div>
          <div>{order && order.deliveryMethod === "Giao hàng tiết kiệm" ? "15.000" : "30.000"} vnd</div>
        </div>
        <div className="total">
          <div className="bill"> Tổng đơn hàng</div>
          <div>{summary} vnd</div>
        </div>
      </section>
      <div className="inf-show">
        <div className="choose-receiver">
          <h2>Thông tin giao hàng</h2>
          <div className="address">
            <div className="address-title">
              <p>Tên người nhận:</p>
              <p>Số điện thoại:</p>
              <p>Địa chỉ:</p>
              <p>Email:</p>
            </div>
            <div className="address-detail">
              {order && (
                <>
                  <p>{order.user.fullname}</p>
                  <p>{order.user.phone}</p>
                  <p>{order.user.address || order.address}</p>
                  <p>{order.user.email}</p>
                </>
              )}
            </div>
            <div className="transportation">
              <div className="transport-title">
                <p>Loại vận chuyển:</p>
                <p>Hình thức thanh toán:</p>
              </div>
              <div className="transport-detail">
                <p>{order && order.deliveryMethod}</p>
                <p>{order && order.paymentMethod}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="check-out-btn">

        {/* {status === 1
          ? "Đã xác nhận"
          : status === 2
            ? "Đã giao hàng"
            : status === 3
              ? "Đã gửi hàng"
              : "Chưa được xác nhận"} */}

        <Link to={"/admin"}><button className={`btn-confirm ${order && order.status === 1 ? 'btn-confirm-hover' : ''}`}> Đã xác nhận</button></Link>
        <Link to={"/admin"}><button className={`btn-delivery ${order && order.status === 2 ? 'btn-delivery-hover' : ''}`}> Đã giao hàng</button></Link>
        <Link to={"/admin"}><button className={`btn-recieve ${order && order.status === 3 ? 'btn-recieve-hover' : ''}`}> Đã gửi hàng</button></Link>
        <Link to={"/admin"}><button className={`btn-default ${order && order.status === 4 ? 'btn-default-hover' : ''}`}> Chưa được xác nhận</button></Link>


      </div>
    </main>
  );
}

export default OrderSection;
