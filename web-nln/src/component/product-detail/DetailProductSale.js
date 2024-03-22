import "./DetailProductSale.css";
import {ProductData} from '../../common/json/ProductData'
import { useParams } from "react-router-dom";

export default function DetailProductSale() {
  const { id } = useParams();

  // Tìm kiếm sản phẩm trong ProductData bằng id
  const product = ProductData.find(item => item.ProductNo === id);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="detail-productsale-container">
      <div className="image-layout">
          <img src= {product.ProductImage} alt=""></img>
      </div>
      <div className="detail-layout">
        <div className="detail-container">
          <h2>HẠT GIỐNG CÂY TRỒNG</h2>
          <div className="h1">
            <h1>Hạt giống thủy sinh cải xanh</h1>
          </div>
        <div className="info">
        <p>
            Hạt giống thủy canh rau xanh là những giống cây được ưa chuộng trong
            phương pháp canh tác thủy canh, một phương pháp trồng cây mà không
            cần đất phục vụ cho việc sinh trưởng. Nhờ vào việc sử dụng nước và
            dung dịch dinh dưỡng phân hủy, hạt giống thủy canh rau xanh phát
            triển mạnh mẽ và nhanh chóng, đồng thời mang lại năng suất cao và
            chất lượng tốt.
          </p>
          <p>
            Tỷ lệ nảy &gt; 90%
            <br />
            Khí hậu trồng: cả xứ nóng &amp; xứ lạnh
            <br />
            Thu hoạch sau 32 – 35 ngày
          </p>
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
