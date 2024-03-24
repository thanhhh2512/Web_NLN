import "./DetailProductSale.css";
import {ProductData} from '../../common/json/ProductData'
import { useParams } from "react-router-dom";

export default function DetailProductSale() {
  const { ProductNo } = useParams();

  // Tìm kiếm sản phẩm trong ProductData bằng id
  const product = ProductData.find(item => item.ProductNo === ProductNo);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="detail-productsale-container">
      <div className="image-layout">
          <img src= {"/"+product.ProductImage[0]} alt=""></img>
      </div>
      <div className="detail-layout">
        <div className="detail-container">
          <h2>{product.ProductType}</h2>
          <div className="h1">
            <h1>{product.ProductName}</h1>
          </div>
        <div className="info">
        <p>{product.ProductSummary}</p>
        </div>
        <div className="product-button">
            <button className="add-btn">Thêm vào giỏ hàng</button>
            <button className="purchase-btn">Mua hàng</button>
        </div>
        </div>
      </div>
    </div>
  );
}
