import "./OrderSection.css"
import { useEffect, useState } from "react";
import { CartData } from "../../../common/json/CartData";
import '../../cart/Cart.css'
function OrderSection() {
    const [transport, setStransport] = useState("15.000")
    const [summary, setSummary] = useState()
    // Tính tổng giá trị hàng
    const totalBill = ()=>{
        var tmp = 0;
        CartData.forEach((item) => {
            tmp = tmp + Number.parseInt(item.ProductPrice) * Number.parseFloat(item.Quantity);
        });
        return (tmp/1000) + ".000";
    } 
    useEffect(() =>{
        var total = (Number.parseInt(totalBill()) + Number.parseInt(transport)) + ".000";
        setSummary(total)
    },[transport])
    // Xử lí sự kiện thay đổi đơn vị vận chuyển

    // render danh sách đơn hàng
    var listOrder = CartData.map(item =>{
                   return (
                    <div className="item in-order-section" key={item.ProductNo}>
                        <div className='item-detail'>
                            <img src={item.ProductImage[0]} alt={item.ProductName} />
                            {item.ProductName}
                        </div>
                        <div className='quantity-item' >
                            <input className="q-order"value={item.Quantity} type="number" readOnly ></input>
                        </div>
                        <div className='price-item' >
                            {Number.parseInt(item.ProductPrice)/1000 + ".000 vnd"}
                        </div>
                        <div className='total'>
                            { (Number.parseInt(item.ProductPrice) * Number.parseInt(item.Quantity))/1000 +".000"} vnd
                        </div>
                    </div>)
                })
    return (
    <main className="wrapper">
        <div className="title-page">
            <h1>Đơn hàng </h1>
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
        <div className="footbill">
            <div>
                <h2>Hình thức thanh toán</h2>
                <input type="radio" name="payment" id="payment" value="cash" checked></input>
                <label htmlFor="payment">Thanh toán khi nhận hàng</label>
            </div>
            <div>
                <h2>Tóm tắt thanh toán</h2>
                <div className="summary">
                    <p><span>Tổng giá sản phẩm</span><span>{ totalBill()} vnd</span></p>
                    <p><span>Phí vận chuyển</span><span>{transport} vnd</span></p>
                    <p><span>Tổng đơn hàng</span><span>{summary} vnd</span></p>
                </div>
            </div> 
        </div>
        <div className="check-out">
            <a href="/order" ><button className="btn-submit"> Đặt hàng</button></a>
        </div>
    </main>
    );
}

export default OrderSection;