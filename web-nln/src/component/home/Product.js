import './Product.css'
export default function Product() {
  return (
    <div className="product">
      <div className="container-content">
        <h1>Sản phẩm</h1>
      </div>
      <div className="container-img">
        <img
          src={process.env.PUBLIC_URL + "/images/home/product-img.png"}
          className="product-img"
        ></img>
      </div>
    </div>
  );
}
