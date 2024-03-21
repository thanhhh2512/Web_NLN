import React from 'react'
import './AccountOverview.css'
function AccountOverview() {
    return (
        <div className='row'>
            <div className="column">

                <div className="text-b-md text-center">TỔNG QUAN</div>
                <ul className='infor-list'>
                    {Array.from({ length: 4 }).map((item, id) => {
                        return <li key={id} className="list-item">{id}</li>;
                    })}
                </ul>
            </div>
            <div className="column">

                <div className="text-b-md text-center">ĐƠN HÀNG</div>
                <div>
                    <ul>
                        {Array.from({ length: 5 }).map((item, id) => {
                            return <li key={id} className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam fugit quisquam. Quia quibusdam sunt assumenda ipsam quae, hic esse, corporis reiciendis nisi laborum porro, doloribus consequuntur quam sed numquam.</li>
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default AccountOverview