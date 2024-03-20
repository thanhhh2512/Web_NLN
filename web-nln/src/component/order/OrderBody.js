import './Order.css'
function OrderBody() {
    return (
    <main className="wrapper">
        <div className="title-page">
            <h1>Đơn hàng của bạn</h1>
        </div>
        <table className="order-detail">
            <thead>
                <th>Tóm tắt đơn hàng</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Tổng cộng</th>
            </thead>
            <tfoot>
                <td colSpan="3"> Tổng giá sản phẩm</td>
                <td>{/**Tổng bill */} 500000vnd</td>
            </tfoot>
            <tbody>
                <tr className='item'>
                    <td className='item'><img src="" alt=""></img> product.ProductName</td>
                    <td className='quantity-item' >
                        <input value={"1"} type="number" readonly ></input>
                    </td>
                    <td className='price-item' >
                        product.ProductPrice
                    </td>
                    <td className='total'>
                        {/* {Tính tổng giá} */}
                        Giá tổng
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="inf-custom">
            <form className="address-form">
                <h2>Chi tiết địa chỉ</h2>
                <label className="label-form-custom" for="name-custom">Tên người nhận</label>
                <input type="text" name="name-custom" className=" input-form"></input>
                <label className="label-form-custom" for="phone-number">Số điện thoại</label>
                <input type="text" name="phone-number" className=" input-form"></input>
                <label className="label-form-custom" for="city">Tỉnh/thành phố</label>
                <input type="text" name="city" className=" input-form"></input>
                <label className="label-form-custom" for="distric">Quận/ huyện</label>
                <input type="text" name="distric" className=" input-form"></input>
                <label className="label-form-custom" for="ward">Phường/ xã</label>
                <input type="text" name="ward" className=" input-form"></input>
                <label className="label-form-custom" for="detail-custom">Chi tiết</label>
                <input type="text" name="detail-custom" className=" input-form"></input>
            </form>
            <div>
                <h2>Địa chỉ nhận hàng</h2>
                <p>Vui lòng chọn địa chỉ mặc định hoặc thêm mới địa chỉ nhận hàng</p>
                <input type="radio" id="default" name="address" value="Default" checked></input>
                <label for="default">Mặc định</label>
                <input type="radio" id="add" name="address" value="Add new address"></input>
                <label for="add">Thêm địa chỉ mới</label>
            </div>
        </div>    
        <div className="transport">
            <h2>Loại vận chuyển</h2>
            <table>
                <tr>
                    <td><input type="radio" id="gttk" name="transport" value="gttk"></input><label for="gttk">Giao hàng tiết kiệm</label></td>
                    <td></td>
                    <td>Giao hàng sau 3-5 ngày</td>
                    <td>15000vnd</td>
                </tr>
                <tr>
                    <td><input type="radio" id="ghn" name="transport" value="ghn"></input><label for="ghn">Giao hàng nhanh</label></td>
                    <td></td>
                    <td>Giao hàng sau 1-2 ngày</td>
                    <td>35000vnd</td>
                </tr>
            </table>
        </div>
        <div className="footbill">
            <div>
                <h2>Hình thức thanh toán</h2>
                <input type="radio" name="payment" value="cash" checked></input>
                <label for="payment">Thanh toán khi nhận hàng</label>
            </div>
            <div>
                <h2>Tóm tắt thanh toán</h2>
                <div>
                    <p><span>Tổng giá sản phẩm</span><span>300.000 vnd</span></p>
                    <p><span>Phí vận chuyển</span><span>15.000vnd</span></p>
                    <p><span>Tổng đơn hàng</span><span>315.000vnd</span></p>
                </div>
            </div> 
        </div>
        <button className="submit-btn">Đặt hàng</button>
    </main>
    );
}

export default OrderBody;