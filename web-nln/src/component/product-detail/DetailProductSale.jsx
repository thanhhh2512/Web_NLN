import "./DetailProductSale.css";

import Image from "../Image/Image";

export default function DetailProductSale({ product }) {
  return (
    <div className="detail-productsale-container">
      <div className="image-layout">
        <Image src={product.images[0].path} alt={product.name} />
      </div>
      <div className="detail-layout">
        <div className="detail-container">
          <h2>{product.type}</h2>
          <div className="h1">
            <h1>{product.name}</h1>
          </div>
          <div className="info">
            <p>{product?.fastdescription}</p>
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
