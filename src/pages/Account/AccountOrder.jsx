import React, { useState } from 'react'
import './AccountOrder.css'
import { OrderData } from '../../common/json/OrderData'
import { Link } from 'react-router-dom'
function AccountOrder() {
    //https://fakestoreapi.com/products/
    const [ordersData, setOrderData] = useState(OrderData)
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
                                <div className="row align-items-center">
                                    <div class="flex-item">
                                        #{item.id}
                                    </div>
                                    <div class="flex-item flex-grow-2">{item.orderDate}</div>
                                </div>

                                <br />

                                <div class="flex-full-width">{item.products.map((__, idx) => {
                                    return <li>{__.ProductName}</li>
                                })}</div>

                                <hr className='hr' />

                                <div className="d-flex align-items-center mv-15">
                                    <div class="flex-item">
                                        Tổng đơn hàng
                                    </div>
                                    <div class="flex-item flex-grow-2">
                                        {item.total + " " + "VND"}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mv-15">
                                    <div class="flex-item">
                                        Tình trạng đơn hàng
                                    </div>
                                    <div class="flex-item flex-grow-2">
                                        {item.status === 1 ? "Đã xác nhận" : item.status === 2 ? "Đang giao hàng" : item.status === 3 ? "Đã nhận hàng" : item.status === 4 ? "Đã huỷ đơn hàng" : "Chưa được xác nhận"}
                                    </div>
                                </div>

                                <Link to={`/order/${item.id}`} className="btn">Xem chi tiết</Link>
                            </div>

                        )
                    })}
                </div>
            }

        </>
    )
}

export default AccountOrder