import './AddProduct.css'


export default function AddProduct(){
    
    return(
        <div className='AddProduct'>
            <form className='add-form'>
                <div className='title'>
                <h1>THÊM MỚI SẢN PHẨM</h1>
            </div>
            <div className='add-label'>
                <h2>THÔNG TIN SẢN PHẨM</h2>
            <label className="label form-custom" htmlFor="name-custom">Tên sản phẩm</label>
                <input type="text" name="name-custom" className=" input-form"></input>
                <label className="label form-custom" htmlFor="phone-number">Loại sản phẩm</label>
                <input type="text" name="phone-number" className=" input-form"></input>
                <label className="label form-custom" htmlFor="city">Đặc tính</label>
                <input type="text" name="city" className=" input-form"></input>
                <label className="label form-custom" htmlFor="distric">Mô tả nhanh</label>
                <input type="text" name="distric" className=" input-form"></input>
                <label className="label form-custom" htmlFor="ward">Mô tả sản phẩm</label>
                <input type="text" name="ward" className=" input-form"></input>
                <label className="label form-custom" htmlFor="detail-custom">Chi tiết sản phẩm</label>
                <input type="text" name="detail-custom" className=" input-form"></input>
                <label className="label form-custom" htmlFor="ward">Khối lượng</label>
                <input type="text" name="ward" className=" input-form"></input>
                <label className="label form-custom" htmlFor="detail-custom">Số lượng đóng gói</label>
                <input type="text" name="detail-custom" className=" input-form"></input>
                <label className="label form-custom" htmlFor="ward">Hạn sử dụng</label>
                <input type="text" name="ward" className=" input-form"></input>
                <label className="label form-custom" htmlFor="detail-custom">Giá bán</label>
                <input type="text" name="detail-custom" className=" input-form"></input>
                <label className="label form-custom" htmlFor="ward">Số lượng hàng trong kho</label>
                <input type="text" name="ward" className=" input-form"></input>
                <label className="label form-custom" htmlFor="detail-custom">Hình ảnh</label>
                <input type="text" name="detail-custom" className=" input-form"></input>
                {/* <div>
      <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload-input" />
      <label htmlFor="upload-input">
        <button>Thêm ảnh</button>
      </label>
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />}
    </div> */}
            </div>
            </form>
            
        </div>
    );

}