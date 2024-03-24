import "./OrderManage.css";
import { OrderData } from "../../../common/json/OrderData";
import { useEffect, useState, useRef, useCallback } from "react";

export default function OrderManage() {
  const [lengthList, setLengthList] = useState(OrderData.length);
  const [filter, setFilter] = useState({ status: "", searchText: "" });
  const [prevFilter, setPrevFilter] = useState({ status: "", searchText: "" });
  var order = useRef(OrderData);

  const filterOrders = useCallback(() => {
    let filteredData = OrderData;

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
      setLengthList(order.current.length);
      setPrevFilter(filter);
    }
  }, [filter, prevFilter, filterOrders]);

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.orderDate}</td>
                <td>{item.customer}</td>
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
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
