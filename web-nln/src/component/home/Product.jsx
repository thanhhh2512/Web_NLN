import './Product.css'
import { TypeofProductData } from '../../common/json/TypeofProductData';
import { Link } from 'react-router-dom';
export default function Product() {
  return (
    <div className="product">
      <div className="container-content">
        <h1>Sản phẩm</h1>
      </div>
      <div className="container-img">
      {TypeofProductData.map(product => (
        <a key={product.id} href={`/product/${product.id}`}>
          <img src={product.imagePath[0]} alt={`Product ${product.id}`} />
        </a>
      ))}
      </div>
    </div>
  );
}
