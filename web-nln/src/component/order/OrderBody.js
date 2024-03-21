import { CartData } from "../../common/json/CartData";
import '../cart/Cart.css'
import './Order.css'
function OrderBody() {
    var listOrder = CartData.map(item =>{
                   return (
                    <div className='itemList' key={item.ProductNo}>
                        <div className='item-detail'>
                            <img src={item.ProductImage[0]} alt={item.ProductName} />
                            {item.ProductName}
                        </div>
                        <div className='quantity-item' >
                            <input value={item.Quantity} type="number" readOnly ></input>
                        </div>
                        <div className='price-item' >
                            {item.ProductPrice + " vnd"}
                        </div>
                        <div className='total'>
                            { Number.parseInt(item.ProductPrice) * Number.parseFloat(item.Quantity)} vnd
                        </div>
                    </div>)
                })
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
                <p>Tổng cộng</p>
            </div>
            <div>
                {listOrder}
            </div>
            <div>
                <div> Tổng giá sản phẩm</div>
                <div>{ ()=>{var tmp = 0;
                        CartData.forEach((item) => {
                            tmp = tmp + Number.parseInt(item.ProductPrice) * Number.parseFloat(item.Quantity);
                        });
                        return tmp;} }
                </div>
            </div>
        </section>
        <div className="inf-custom">
            <form className="address-form">
                <h2>Chi tiết địa chỉ</h2>
                <label className="label-form-custom" htmlFor="name-custom">Tên người nhận</label>
                <input type="text" name="name-custom" className=" input-form"></input>
                <label className="label-form-custom" htmlFor="phone-number">Số điện thoại</label>
                <input type="text" name="phone-number" className=" input-form"></input>
                <label className="label-form-custom" htmlFor="city">Tỉnh/thành phố</label>
                <input type="text" name="city" className=" input-form"></input>
                <label className="label-form-custom" htmlFor="distric">Quận/ huyện</label>
                <input type="text" name="distric" className=" input-form"></input>
                <label className="label-form-custom" htmlFor="ward">Phường/ xã</label>
                <input type="text" name="ward" className=" input-form"></input>
                <label className="label-form-custom" htmlFor="detail-custom">Chi tiết</label>
                <input type="text" name="detail-custom" className=" input-form"></input>
            </form>
            <div>
                <h2>Địa chỉ nhận hàng</h2>
                <p>Vui lòng chọn địa chỉ mặc định hoặc thêm mới địa chỉ nhận hàng</p>
                <input type="radio" id="default" name="address" value="Default"></input>
                <label htmlFor="default">Mặc định</label>
                <input type="radio" id="add" name="address" value="Add new address"></input>
                <label htmlFor="add">Thêm địa chỉ mới</label>
            </div>
        </div>    
        <div className="transport">
            <h2>Loại vận chuyển</h2>
            <table>
                <tbody>
                    <tr>
                        <td><input type="radio" id="gttk" name="transport" value="gttk"></input><label htmlFor="gttk">Giao hàng tiết kiệm</label></td>
                        <td></td>
                        <td>Giao hàng sau 3-5 ngày</td>
                        <td>15000vnd</td>
                    </tr>
                    <tr>
                        <td><input type="radio" id="ghn" name="transport" value="ghn"></input><label htmlFor="ghn">Giao hàng nhanh</label></td>
                        <td></td>
                        <td>Giao hàng sau 1-2 ngày</td>
                        <td>35000vnd</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="footbill">
            <div>
                <h2>Hình thức thanh toán</h2>
                <input type="radio" name="payment" value="cash" ></input>
                <label htmlFor="payment">Thanh toán khi nhận hàng</label>
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