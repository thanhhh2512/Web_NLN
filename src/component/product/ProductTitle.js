import { useParams } from "react-router-dom";
import { TypeofProductData } from "../../common/json/TypeofProductData";
import './ProductTitle.css'

function ProductTitle() {
  let { id } = useParams();

  const title = TypeofProductData.find((item) => item.id === id);

//   if (!product) {
//     return <div style={{ textAlign: "center" }}>Sản phẩm không tồn tại</div>;
//   }
    console.log(title.imagePath[0]);
  return (
    <div className="ProductTitle">
      <div className="img-left">
        <img src={"/"+title.imagePath[0]} alt={`Product ${title.id}`} />
      </div>
      <div className="title-right">
        <div className="title">
            <h2>{title.title}</h2>
        </div>
        <div className="content">
            <p>Cửa hàng của chúng tôi cung cấp đầy đủ các loại hạt giống rau quả đa dạng, dễ dàng để bạn lựa chọn.</p>
        </div>
      </div>
    </div>
    
  );
  

}

export default ProductTitle;
