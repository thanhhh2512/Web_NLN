import React, { useState } from "react";
import "./DetailProductDescription.css";

export default function DetailProductDescription() {
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
            <p>
              Hạt giống cải xanh thuộc công ty ABC có chất lượng tốt, dễ dàng ủ
              giống và trồng, tỉ lệ lên mầm cao. Giống cải thành phẩm xanh, to,
              có chất lượng cao Hạt giống thủy canh rau xanh là những giống cây
              được ưa chuộng trong phương pháp canh tác thủy canh, một phương
              pháp trồng cây mà không cần đất phục vụ cho việc sinh trưởng. Nhờ
              vào việc sử dụng nước và dung dịch dinh dưỡng phân hủy, hạt giống
              thủy canh rau xanh phát triển mạnh mẽ và nhanh chóng, đồng thời
              mang lại năng suất cao và chất lượng tốt..
            </p>
            {expanded && (
              <>
                <p>
                  Hạt giống thủy canh rau xanh là những giống cây được ưa chuộng
                  trong phương pháp canh tác thủy canh, một phương pháp trồng
                  cây mà không cần đất phục vụ cho việc sinh trưởng. Nhờ vào
                  việc sử dụng nước và dung dịch dinh dưỡng phân hủy, hạt giống
                  thủy canh rau xanh phát triển mạnh mẽ và nhanh chóng, đồng thờ
                </p>
              </>
            )}
          </div>
        </div>
        <div className={`description-right ${expanded ? "expanded" : ""}`}>
          <h1>Chi tiết sản phẩm</h1>
          <div className="attribute-product">
            <div className="attribute">
              <p>Giống cây:</p>
              <p>Đặc tính:</p>
              <p>Số lượng:</p>
              {expanded && (
                <>
                  <p>Tỉ lệ thành công</p>
                  <p>Khối lượng</p>
                </>
              )}
            </div>

            <div className="info-attribute">
              <p>FD012</p>
              <p>Hạt</p>
              <p>50 hạt/gói</p>
              {expanded && (
                <>
                  <p>90%</p>
                  <p>100g</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <button className="collapse-btn" onClick={resetDescription}>
          Thu gọn
        </button>
      )}
      {!expanded && <a className="expand-btn"onClick={toggleDescription}>Xem thêm</a>}
    </div>
  );
}
