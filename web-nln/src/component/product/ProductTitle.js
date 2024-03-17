import { useParams } from "react-router-dom";
import { TypeofProductData } from "../../common/json/TypeofProductData";
import './ProductTitle.css'

function ProductTitle() {
  const { id } = useParams();

  const product = TypeofProductData.find((item) => item.id === id);

//   if (!product) {
//     return <div style={{ textAlign: "center" }}>Sản phẩm không tồn tại</div>;
//   }
    console.log(product.imagePath[0]);
  return (
    <div className="ProductTitle">
      <div className="img-left">
        <img src={product.imagePath[0]} alt={`Product ${product.id}`} />
      </div>
      <div className="title">
        <h2>{product.title}</h2>
      </div>
    </div>
    
  );
  

}

export default ProductTitle;
