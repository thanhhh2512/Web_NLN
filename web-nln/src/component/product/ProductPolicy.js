import './ProductPolicy.css'

export default function ProductPolicy(){
    return(
        <div className="product-policy-container">
            <div className="title">
                <h1>CHÍNH SÁCH ĐẶC BIỆT CỦA HUONG SEN FARM</h1>
            </div>
            <div className="container-img">
            <img
              src={process.env.PUBLIC_URL + "images/product/Group 2163.png"} className="policy-img"
              alt=""
            />
            </div>
        </div>
    )
}