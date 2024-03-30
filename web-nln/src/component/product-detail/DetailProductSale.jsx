import "./DetailProductSale.css";

import axios from "axios";

import Image from "../Image/Image";

export default function DetailProductSale({ product }) {
  // const addToCart = async (product, quantity) => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/carts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         user: "userId",
  //         product: product,
  //         quantity: quantity,
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data); // Log the response for debugging
  //     // Update cart after adding to cart successfully
  //     setCart([...cart, { product: data.productDB, quantity: quantity }]);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error
  //   }
  // };
  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .post("http://localhost:8080/api/carts", {
        userId: user._id,
        product: product,
        quantity: 1,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
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
            <button className="add-btn" onClick={() => handleAddToCart()}>
              Thêm vào giỏ hàng
            </button>
            <button className="purchase-btn">Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
