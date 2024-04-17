export const PrintBill = React.forwardRef(function PrintBill(
  { bill, products },
  ref
) {
  return (
    <main className="wrapper" ref={ref}>
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
          <div>
            {order && order.deliveryMethod === "Giao hàng tiết kiệm"
              ? "15.000"
              : "30.000"}{" "}
            vnd
          </div>
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
        <Link to={"/admin"}>
          <button className="btn-confirm"> Đã xác nhận</button>
        </Link>
        <Link to={"/admin"}>
          <button className="btn-delivery"> Đã giao hàng</button>
        </Link>
        <Link to={"/admin"}>
          <button className="btn-recieve"> Đã gửi hàng</button>
        </Link>
        <Link to={"/admin"}>
          <button className="btn-default"> Chưa được xác nhận</button>
        </Link>
      </div>
      <button onClick={handlePrint}>Xuất PDF</button>
    </main>
  );
});
