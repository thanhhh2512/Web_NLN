import {useState} from 'react';
import {Link} from 'react-router-dom'
import { CartData } from "../../common/json/CartData";
import './Cart.css'

const priceItemInCart = (item) => {
        var total =(Number.parseInt(item.Quantity) * Number.parseInt(item.ProductPrice))
        return total
    }
function CartBody() {
    // fake Data
    var Cart = CartData
    var [sumCart, setSumCart] = useState(()=>{
       var tmp =0;
        Cart.forEach((item) =>{
            tmp = tmp + priceItemInCart(item);
        })
        return tmp;
    })
    
    
    // Hàm dùng xử lí thay đổi giá trị tổng
    function sumCartValue(){
        var tmp =0;
        Cart.forEach((item) =>{
            tmp = tmp + priceItemInCart(item);
        })
        setSumCart(tmp);
    }
    // render danh sách sản phẩm
    const listItem = Cart.map((item) => {
        return(
            <>
                <tr className='item' key={item.ProductNo}>
                    <td className='img-item' rowSpan="2">
                        <img src={item.ProductImage} alt={item.ProductName}></img>
                    </td>
                    <td className='des-item' >{item.ProductName}</td>
                    <td className='quantity-item' rowSpan="2">
                        <input min="1" type="number" value={item.Quantity} onChange={e =>{item.Quantity = e.target.value }}></input>
                    </td>
                    <td className='price-item'>
                        <span className="label">Giá</span>
                        <span>{priceItemInCart(item) +" vnđ"}</span>
                    </td>
                </tr>
                <tr className="more-infor">
                    <td >
                        <p className="type-product">
                            <span className="label">Loại sản phẩm</span>
                            <span className="pref-item">{item.TypeOfProduct}</span>
                        </p>
                        <p className="characteristic">
                            <span className="label">Đặc tính</span>
                            <span className="pref-item">{item.Characteristic}</span>
                        </p>
                    </td>
                    <td className="remove-item">Xoá </td>
                </tr>
            </>)
        
        })
    return ( 
        <form className="cart-form warraper">
            <div className="warraper-title">
                <h1 className="cart-title">GIỎ HÀNG CỦA BẠN</h1>
            </div>
            <div className="detail-cart">
                <table className="list-items">
                    <tbody>
                        {/* Khúc này có thể chia ra component */}
                        {listItem}
                    </tbody>
                </table>
                <div className="container-review">
                    <div className='review'>
                        <h2 className="title-review">TÓM TẮT ĐƠN HÀNG</h2>
                        <div className="line"></div>
                        <div className="sum-wrapper">
                            <p className='lable-summary'>TỔNG GIÁ</p>
                            <p className='summary'>{sumCart} vnđ</p>
                        </div>
                        <div className="line"></div>
                        <div className="check-out">
                            <button className="btn-submit"> <Link to={"/order"}>THANH TOÁN</Link></button>
                            <button className="btn-continue">TIẾP TỤC MUA HÀNG</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>);
}


export default CartBody;