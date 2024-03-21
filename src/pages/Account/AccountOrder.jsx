import React, { useState } from 'react'
import './AccountOrder.css'
import { OrderData } from '../../common/json/OrderData'
import { Link } from 'react-router-dom'
function AccountOrder() {
    //https://fakestoreapi.com/products/
    const [ordersData, setOrderData] = useState(OrderData)
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };
    console.log(ordersData)
    return (
        <>
            <div className="text-b-lg">ĐƠN HÀNG CỦA BẠN</div>
            {ordersData && ordersData.length < 1 ? <div className="body-container">
                <div className="text-b-sm text-center" style={{
                    marginBlock: 20
                }}>BẠN CHƯA CÓ ĐƠN HÀNG NÀO !</div>
                <div className="image-head-order">
                    <img src={process.env.PUBLIC_URL + '/images/account/flowerpot_7302490.png'} className='' />
                </div>
                <div className="text-sm text-center" style={{
                    marginBlock: 20
                }}>Tạo đơn hàng mới ngay nào !</div>
            </div>
                :
                <div className="list-order-body">
                    {ordersData && ordersData.map((item, id) => {
                        return (
                            <div class="flex-column order-list-item" key={id}>
                                <div className="d-flex sm-flex-column">
                                    <div class="flex-item">
                                        #{item.id}
                                    </div>
                                    <div class="flex-item flex-grow-2">{item.orderDate}</div>

                                </div>
                                <hr className='hr' />
                                {isOpen ? (
                                    <div className='list-product-container'>
                                        {item.products.map((data, idx) => (
                                            <div className={`foot-list-product`} key={idx}>
                                                <div className='flex-item'>
                                                    {data.ProductName}
                                                </div>
                                                <div className='flex-item'>SL{" : "}{data.Quantity}</div>
                                                <div className='flex-item'>
                                                    <u>{data.ProductPrice}</u>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className='d-flex sm-flex-column'>
                                        {item.products.map((data, idx) => {
                                            return <span className=''>{data.ProductName} {idx === item.products.length - 1 ? "..." : ","}</span>
                                        })}
                                    </div>
                                )}

                                <div className="d-flex sm-flex-column mv-15">
                                    <div class="flex-item">
                                        <b>Phí giao hàng</b>
                                    </div>
                                    <div class="flex-item flex-grow-2">
                                        <u>  {item.total + " " + "VND"}</u>
                                    </div>
                                </div>

                                <div className="d-flex sm-flex-column mb-15">
                                    <div class="flex-item">
                                        <b>Tổng đơn hàng</b>
                                    </div>
                                    <div class="flex-item flex-grow-2">
                                        <u> {item.total + " " + "VND"}</u>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <div className="d-flex sm-flex-column mb-15">
                                    <div class="flex-item">
                                        <b>Tình trạng đơn hàng</b>
                                    </div>
                                    <div class="flex-item">
                                        <b>{item.orderDate}</b>
                                    </div>
                                    <div class="flex-item">
                                        {item.status === 1 ? "Đã xác nhận" : item.status === 2 ? "Đang giao hàng" : item.status === 3 ? "Đã nhận hàng" : item.status === 4 ? "Đã huỷ đơn hàng" : "Chưa được xác nhận"}
                                    </div>
                                </div>

                                <Link onClick={toggleCollapsible} className="btn">{isOpen === true ? "Thu gọn" : "Xem chi tiết"}</Link>
                            </div>

                        )
                    })}
                </div>
            }

        </>
    )
}

export default AccountOrder