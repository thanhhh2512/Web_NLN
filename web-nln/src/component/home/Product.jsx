import "./Product.css";
import { TypeofProductData } from "../../common/json/TypeofProductData";

export default function Product() {
  const handleImageClick = (e, productId) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    window.location.href = `/product/${productId}`; // Chuyển hướng đến trang sản phẩm
  };

  return (
    <div className="product">
      <div className="container-content">
        <h1>Sản phẩm</h1>
      </div>
      <div className="container-img">
  {TypeofProductData.map((product) => (
    <div
      key={product.id}
      onClick={(e) => handleImageClick(e, product.id)}
      className="image-container"
    >
      <img src={product.imagePath[0]} alt={`Product ${product.id}`} />
      <div className="product-name-overlay">
        <div className="product-name">{product.title}</div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
