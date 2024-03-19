import { ProductData } from "../../common/json/ProductData";
import './Cart.css'
function CartBody() {

  const product = ProductData.find((item) => item.ProductNo === '001');
    return ( 
        <form className="cart-form warraper">
            <div className="warraper-title">
                <h1 className="cart-title">GIỎ HÀNG CỦA BẠN</h1>
            </div>
            <div className="detail-cart">
                <table className="list-items">
                    <tr className='item'>
                        <td className='img-item' rowspan="2"><img src={product.ProductImage} alt={product.ProductName}></img></td>
                        <td className='des-item' >{product.ProductName}</td>
                        <td className='quantity-item' rowspan="2">
                            <input min="1" type="number"></input>
                        </td>
                        <td className='price-item'>
                            <span className="label">Giá</span>
                            <span>{product.ProductPrice}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="type-product"><span className="label">Loại sản phẩm</span>   <span className="pref-item">Hạt giống</span></p>
                            <p className="characteristic"><span className="label">Đặc tính</span> <span className="pref-item">Hạt</span></p>
                        </td>
                        <td>Xoá</td>
                    </tr>
                    <tr className='item'>
                        <td className='img-item' rowspan="2"><img src={product.ProductImage} alt={product.ProductName}></img></td>
                        <td className='des-item' >{product.ProductName}</td>
                        <td className='quantity-item' rowspan="2">
                            <input min="1" type="number"></input>
                        </td>
                        <td className='price-item'>
                        <span className="label">Giá</span>
                            <span>{product.ProductPrice}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="type-product"><span className="label">Loại sản phẩm</span>   <span className="pref-item">Hạt giống</span></p>
                            <p className="characteristic"><span className="label">Đặc tính</span> <span className="pref-item">Hạt</span></p>
                        </td>
                        <td>Xoá</td>
                    </tr>
                </table>
                <div className="container-review">
                    <div className='review'>
                        <h2 className="title-review">TÓM TẮT ĐƠN HÀNG</h2>
                        <div className="line"></div>
                        <div className="sum-wrapper">
                            <p className='lable-summary'>TỔNG GIÁ</p>
                            <p className='summary'>300.000vnd</p>
                        </div>
                        <div className="line"></div>
                        <div className="check-out">
                            <button className="btn-submit">THANH TOÁN</button>
                            <button className="btn-continue">TIẾP TỤC MUA HÀNG</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>);
}


export default CartBody;