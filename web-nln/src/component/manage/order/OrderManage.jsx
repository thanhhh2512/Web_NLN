import "./OrderManage.css";

import { useEffect, useState, useRef, useCallback } from "react"
import { Link, useParams } from "react-router-dom";
import { CartData } from "../../../common/json/CartData";
import axios from "axios";
export default function OrderManage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách các đơn hàng
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        setOrders(response.data);

      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();


  }, []);




  const [filter, setFilter] = useState({ status: "", searchText: "" });
  const [prevFilter, setPrevFilter] = useState({ status: "", searchText: "" });
  var order = useRef(orders);
  const filterOrders = useCallback(() => {
    let filteredData = orders;

    if (filter.status !== "") {
      filteredData = filteredData.filter(
        (item) => item.status === filter.status
      );
    }

    return filteredData;
  }, [filter]);

  useEffect(() => {
    if (prevFilter !== filter) {
      order.current = filterOrders();

      setPrevFilter(filter);
    }
  }, [filter, prevFilter, filterOrders]);

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };
  const getUserInfo = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user?userId=${userId}`);
      return response.data; // Trả về dữ liệu người dùng từ server
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  };
  console.log(orders)
  return (
    <div className="OrderManage">
      <div className="order-manage-title">
        <p>Quản lý đơn hàng</p>
      </div>
      <div className="select-status">
        <h5>Loại sản phẩm</h5>
        <div className="filter-status">
          {[1, 2, 3, 4].map((status) => (
            <button
              key={status}
              className={
                filter.status === status ? "active btn-status" : "btn-status"
              }
              onClick={() => handleFilterChange({ status })}
            >
              {status === 1
                ? "Đã xác nhận"
                : status === 2
                  ? "Đã giao hàng"
                  : status === 3
                    ? "Đã gửi hàng"
                    : "Chưa được xác nhận"}
            </button>
          ))}
        </div>
        <button
          className="btn-reset"
          onClick={() => handleFilterChange({ status: "", searchText: "" })}
        >
          Đặt lại
        </button>
      </div>
      <div className="orderlist">
        <table className="table-order">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Ngày tạo</th>
              <th>Khách hàng</th>
              <th>Trạng thái</th>
              <th>Giá đơn hàng</th>
            </tr>
          </thead>
          <tbody>
            {order.current.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.createdAt}</td>
                <td>{item.user.fullname}</td>
                <td
                  className={
                    item.status === 1
                      ? "confirmed"
                      : item.status === 2
                        ? "delivery"
                        : item.status === 3
                          ? "received"
                          : "default"
                  }
                >
                  {item.status === 1
                    ? "Đã xác nhận"
                    : item.status === 2
                      ? "Đã giao hàng"
                      : item.status === 3
                        ? "Đã gửi hàng"
                        : "Chưa được xác nhận"}
                </td>
                <td>{Number.parseFloat(item.total).toFixed(3) + " vnd"}</td>
                <td><Link to={`/orderdetail?orderId=${item._id}`}><i className="fa-solid fa-pen-to-square"></i></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
