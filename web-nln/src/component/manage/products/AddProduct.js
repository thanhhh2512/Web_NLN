import "./AddProduct.css";
import ImageUpload  from "../../fixed/ImageUpload";

export default function AddProduct() {
  return (
    <div className="AddProduct">
      <form className="add-form">
        <div className="title">
          <p>THÊM MỚI SẢN PHẨM</p>
        </div>
        <div className="add-label">
          <h2>THÔNG TIN SẢN PHẨM</h2>
          <label className="label form-product" htmlFor="name">
            Tên sản phẩm
          </label>
          <input type="text" id="name-product" className=" input-form"></input>
          <label className="label form-product" htmlFor="typeofproduct">
            Loại sản phẩm
          </label>
          <input
            type="text"
            id="typeofproduct"
            className=" input-form"
          ></input>
          <label className="label form-product" htmlFor="characteristic">
            Đặc tính
          </label>
          <input type="text" id="characteristic" className=" input-form"></input>
          <label className="label form-product" htmlFor="summary">
            Mô tả nhanh
          </label>
          <input type="text" id="summary" className=" input-form"></input>
          <label className="label form-product" htmlFor="description">
            Mô tả sản phẩm
          </label>
          <input type="text" id="description" className=" input-form"></input>
          <label className="label form-product" htmlFor="detail-product">
            Chi tiết sản phẩm
          </label>
          <input
            type="text"
            name="detail-product"
            className=" input-form"
          ></input>
          <label className="label form-product" htmlFor="weight">
            Khối lượng
          </label>
          <input type="text" id="weight" className=" input-form"></input>
          <label className="label form-product" htmlFor="quantity">
            Số lượng đóng gói
          </label>
          <input
            type="text"
            id="quantity"
            className=" input-form"
          ></input>
          <label className="label form-product" htmlFor="expiry">
            Hạn sử dụng
          </label>
          <input type="text" id="expiry" className=" input-form"></input>
          <label className="label form-product" htmlFor="price">
            Giá bán
          </label>
          <input
            type="text"
            id="price"
            className=" input-form"
          ></input>
          <label className="label form-product" htmlFor="quantity-in-warehouse">
            Số lượng hàng trong kho
          </label>
          <input type="text" id="quantity-in-warehouse" className=" input-form"></input>
          
          <div className="img-input">
            <label className="label form-product" htmlFor="image">
            Hình ảnh
          </label>
          <input
            type="text"
            id="image"
            className=" input-form"
          ></input>
            <input
              type="file"
              accept="image/*"
              onChange={ImageUpload.handleImageChange}
              style={{ display: "none" }}
              id="upload-input"
            />
            <div className="upload-input">
              <button className="image-button">Thêm ảnh</button>
            </div>
            {ImageUpload.selectedImage && (
              <img 
                src={URL.createObjectURL(ImageUpload.selectedImage)}
                alt="Selected"
              />
            )}
          </div>
          <div className="control-btn">
            <button className="-btn">Huỷ bỏ</button>
            <button className="add-btn">Thêm sản phẩm</button>
          </div>
        </div>
      </form>
    </div>
  );
}
