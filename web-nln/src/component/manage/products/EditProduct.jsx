import './EditProduct.css'
import ImageUpload from '../../fixed/ImageUpload';
import React, { useState } from "react";
import axios from "axios";

export default function EditProduct(){
  const typeProductArray = ["Hạt giống", "Rau củ", "Cây cảnh"];

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
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handlecreateproduct = (e) => {
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
        image: imageUrl, // Gửi URL của ảnh lên máy chủ
      })
      .then((res) => {
        alert("thanh cong");
      })
      .catch((error) => console.error(error));
  };
    return(
        <div className='EditProduct'>
            <form className="edit-form">
        <div className="title">
          <p>  CHỈNH SỬA SẢN PHẨM</p>
        </div>
        <div className="edit-label">
          <h2>THÔNG TIN SẢN PHẨM</h2>
          <label className="label form-product" htmlFor="name">
            Tên sản phẩm
          </label>
          <input type="text" id="name-product" className=" input-form"></input>
          <label className="label form-product" htmlFor="typeofproduct">
            Loại sản phẩm
          </label>
          <select
            id="typeofproduct"
            name="typeofproduct"
            onChange={(e) => {
              settypeValue(e.target.value);
            }}
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
          <input type="text" id="characteristic" className=" input-form"></input>
          <label className="label form-product" htmlFor="summary">
            Mô tả nhanh
          </label>
          <input type="text" id="summary" className=" input-form"></input>
          <label className="label form-product" htmlFor="description">
            Mô tả sản phẩm
          </label>
          <input type="text" id="description" className=" input-form"></input>
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
          <input type="date" id="expiry" className=" input-form"></input>
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
            <label className="image-button" htmlFor="upload-input">
              Thêm ảnh
            </label>
            <input
            type="text"
            id="input-text"
            className="input-form"
            ></input>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="upload-input"
            />

            {imageUrl && (
              <div className="uploaded-image">
                <img src={imageUrl} alt="Uploaded" />
              </div>
            )}
          </div>
         
        </div> 
        <div className="control-btn">
            <button className="cancel-btn">Huỷ bỏ</button>
            <button className="delete-btn">Xoá sản phẩm</button>
            <button className='save-btn'>Lưu thay đổi</button>
          </div>
      </form>
        </div>
    );
}