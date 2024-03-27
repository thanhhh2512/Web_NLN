import "./AddProduct.css";
import ImageUpload from "../../fixed/ImageUpload";
import axios from "axios";
import { useState } from "react";

const typeProductArray = ["Hạt giống", "Rau củ", "Cây cảnh"];

export default function AddProduct() {
  const [nameValue, setnameValue] = useState("");
  const [descriptionValue, setdescriptionValue] = useState("");
  const [quantityValue, setquantityValue] = useState("");
  const [quantitypValue, setquantitypValue] = useState("");
  const [weightValue, setweightValue] = useState("");
  const [priceValue, setpriceValue] = useState("");
  const [expValue, setexpValue] = useState("");
  const [typeValue, settypeValue] = useState("");
  const [fastdescriptionValue, setfastdescriptionValue] = useState("");
  const [featureValue, setfeatureValue] = useState("");
  const handlecreateproduct = () => {
    console.log("type: ", typeValue);
    axios
      .post("http://localhost:8080/api/", {
        name: nameValue,
        description: descriptionValue,
        quantity: quantityValue,
        quantityp: quantitypValue,
        weight: weightValue,
        price: priceValue,
        exp: expValue,
        type: typeValue,
        fastdescription: fastdescriptionValue,
        feature: featureValue,
      })
      .then((res) => {
        alert('thanh cong');
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="AddProduct">
      <form className="add-form">
        <div className="title-add">
          <p>THÊM MỚI SẢN PHẨM</p>
        </div>
        <div className="add-label">
          <h2>THÔNG TIN SẢN PHẨM</h2>
          <label className="label form-product" htmlFor="name">
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="name-product"
            className=" input-form"
            value={nameValue}
            onChange={(e) => setnameValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="typeofproduct">
            Loại sản phẩm
          </label>
          {/* <input
            type="text"
            id="typeofproduct"
            className=" input-form"
            value={typeValue}
            onChange={(e) => settypeValue(e.target.value)}
          /> */}

          <select
            id="typeofproduct"
            name="typeofproduct"
            onChange={(e) => {
              settypeValue(e.target.value)}}
          >
            {typeProductArray.map((item, index) => {
              return (
                <option value={item} key={index} defaultChecked={index === 0}>
                  {item}
                </option>
              );
            })}
          </select>
          <label className="label form-product" htmlFor="characteristic">
            Đặc tính
          </label>
          <input
            type="text"
            id="characteristic"
            className=" input-form"
            value={featureValue}
            onChange={(e) => setfeatureValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="summary">
            Mô tả nhanh
          </label>
          <input
            type="text"
            id="summary"
            className=" input-form"
            value={fastdescriptionValue}
            onChange={(e) => setfastdescriptionValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="description">
            Mô tả sản phẩm
          </label>
          <input
            type="text"
            id="description"
            className=" input-form"
            value={descriptionValue}
            onChange={(e) => setdescriptionValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="weight">
            Khối lượng
          </label>
          <input
            type="text"
            id="weight"
            className=" input-form"
            value={weightValue}
            onChange={(e) => setweightValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="quantity">
            Số lượng đóng gói
          </label>
          <input
            type="text"
            id="quantityp"
            className=" input-form"
            value={quantitypValue}
            onChange={(e) => setquantitypValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="expiry">
            Hạn sử dụng
          </label>
          <input
            type="date"
            id="expiry"
            className=" input-form"
            value={expValue}
            onChange={(e) => setexpValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="price">
            Giá bán
          </label>
          <input
            type="text"
            id="price"
            className=" input-form"
            value={priceValue}
            onChange={(e) => setpriceValue(e.target.value)}
          ></input>
          <label className="label form-product" htmlFor="quantity-in-warehouse">
            Số lượng hàng trong kho
          </label>
          <input
            type="text"
            id="quantity-in-warehouse"
            className=" input-form"
            value={quantityValue}
            onChange={(e) => setquantityValue(e.target.value)}
          ></input>

          <div className="img-input">
            <label className="label form-product" htmlFor="image">
              Hình ảnh
            </label>
            <input type="text" id="image" className=" input-form"></input>
            <input
              type="file"
              accept="image/*"
              onChange={ImageUpload.handleImageChange}
              style={{ display: "none" }}
              id="upload-input"
              // value={iamges}
              // onChange={(e) => setfastdescriptionValue(e.target.value)}
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
            <button className="cancel-btn" type="button">
              Huỷ bỏ
            </button>
            <button
              className="add-btn"
              type="button"
              onClick={handlecreateproduct}
            >
              Thêm sản phẩm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
