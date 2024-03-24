import React, { useState } from "react";
import "./DetailProductDescription.css";
import { ProductData } from "../../common/json/ProductData";
import { useParams } from "react-router-dom";

export default function DetailProductDescription() {
  const { ProductNo } = useParams();

  // Tìm kiếm sản phẩm trong ProductData bằng id
  const product = ProductData.find((item) => item.ProductNo === ProductNo);
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const resetDescription = () => {
    setExpanded(false);
  };

  return (
    <div className="detail-product-description">
      <div className="description">
        <div className={`description-left ${expanded ? "expanded" : ""}`}>
          <h1>Mô tả sản phẩm</h1>
          <div className="p">
            <p>{product.ProductDetail}</p>
            {expanded && (
              <>
                <p>{product.ProductSummary}</p>
              </>
            )}
          </div>
        </div>
        <div className={`description-right ${expanded ? "expanded" : ""}`}>
          <h1>Chi tiết sản phẩm</h1>
          <div className="attribute-product">
            <div className="attribute">
              <p>Đặc tính:</p>
              <p>Số lượng:</p>
              <p>Khối lượng</p>
              {expanded && (
              <>
                
              </>
            )}
            </div>

            <div className="info-attribute">
              <p>{product.ProductCharacteristic}</p>
              <p>{product.ProductQuantity}</p>
              <p>{product.ProductWeight}</p>
            </div>
          </div>
        </div>
        {expanded && (
          <button className="collapse-btn" onClick={resetDescription}>
            Thu gọn
          </button>
        )}
        {!expanded && (
          <a className="expand-btn" onClick={toggleDescription}>
            Xem thêm
          </a>
        )}
        
      </div>
    </div>
  );
}
