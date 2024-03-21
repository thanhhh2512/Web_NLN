import React, { useState } from 'react';
import './ProductFilter.css';
import { ProductData } from '../../common/json/ProductData';
import ProductItems from './ProductItems';

export default function ProductFilter() {
  const [isOpenCharacteristic, setIsOpenCharacteristic] = useState(false);
  const [selectedCharacteristic, setSelectedCharacteristic] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(8); // Số lượng sản phẩm hiển thị ban đầu

  const [filteredProducts, setFilteredProducts] = useState(ProductData);


  const toggleDescription = () => {
      setExpanded(!expanded);
  };

  const resetDescription = () => {
      setExpanded(false);
      setVisibleProducts(8); // Trở lại số lượng sản phẩm hiển thị ban đầu
  };

  const handleShowMore = () => {
      setVisibleProducts(ProductData.length); // Hiển thị tất cả sản phẩm
      setExpanded(true)
  };

  // Số sản phẩm muốn hiển thị trên mỗi hàng
  const productsPerRow = 4;

  const toggleDropdownCharacteristic = () => {
    setIsOpenCharacteristic(!isOpenCharacteristic);
    setIsOpenPrice(false);
  };

  const toggleDropdownPrice = () => {
    setIsOpenPrice(!isOpenPrice);
    setIsOpenCharacteristic(false);
  };
  const filterbyProductCharacteristic = (characteristic) =>{
    const filtered = ProductData.filter(product => product.ProductCharacteristic === characteristic);
    setFilteredProducts(filtered) 
  };
  const filterByCharacteristicAndPrice = (characteristic, priceRange) => {
    const filtered = ProductData.filter(product => {
      const meetsCharacteristicCondition = !characteristic || product.ProductCharacteristic === characteristic;
      const meetsPriceCondition = !priceRange || meetsPriceRange(product.ProductPrice, priceRange);
      return meetsCharacteristicCondition && meetsPriceCondition;
    });
    setFilteredProducts(filtered);
  };
  
  const meetsPriceRange = (productPrice, priceRange) => {
    const price = parseInt(productPrice.replace('vnd', '').trim());
    if (priceRange === "0 - 50.000") {
      return price <= 50000;
    } else if (priceRange === "50.000 - 100.000") {
      return price > 50000 && price <= 100000;
    } else if (priceRange === "> 100000") {
      return price > 100000;
    }
    return false; // Trả về true nếu không có khoảng giá nào được chọn
  };
  
  const selectCharacteristic = (characteristic) => {
    setSelectedCharacteristic(characteristic);
    setIsOpenCharacteristic(false);
    filterByCharacteristicAndPrice(characteristic, selectedPrice);
  };

  const selectPrice = (priceRange) => {
    setSelectedPrice(priceRange);
    setIsOpenPrice(false);
    filterByCharacteristicAndPrice(selectedCharacteristic, priceRange);
  };

  const handleTransitionEnd = () => {
    // Thực hiện các hành động mong muốn khi dropdown menu đã hoàn thành hiệu ứng transition và mở ra.
  };

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
  };

  const clearSelectedProduct = () => {
    setSelectedProduct(null);
    if (!selectedPrice) {
      setFilteredProducts(ProductData);
    } else {
      filterByCharacteristicAndPrice(null, selectedPrice);
    }
  };
  
  const clearSelectedPrice = () => {
    setSelectedPrice(null);
    if (!selectedCharacteristic) {
      setFilteredProducts(ProductData);
    } else {
      filterByCharacteristicAndPrice(selectedCharacteristic, null);
    }
  };
  
  
  return (
    <div className="ProductFilter">
      <div className='filter-container'>
        <div className="filter-by">
          <p>LỌC THEO</p>
        </div>
        <div className={`dropdown${isOpenCharacteristic ? ' open' : ''}`} onTransitionEnd={handleTransitionEnd}>
          <button className="dropdown-toggle" onClick={toggleDropdownCharacteristic}>
            ĐẶC TÍNH <span className="arrow">&#9662;</span>
          </button>
          {isOpenCharacteristic && (
            <ul className="dropdown-menu">
              {ProductData.map((product, index) => (
                <li key={index} onClick={() => { selectCharacteristic(product.ProductCharacteristic); handleProductSelection(product); }}>
                  {product.ProductCharacteristic}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={`dropdown${isOpenPrice ? ' open' : ''}`} onTransitionEnd={handleTransitionEnd}>
          <button className="dropdown-toggle" onClick={toggleDropdownPrice}>
            GIÁ <span className="arrow">&#9662;</span>
          </button>
          {isOpenPrice && (
            <ul className="dropdown-menu1">
              <li onClick={() => selectPrice("0 - 50.000")}>0 - 50.000đ</li>
              <li onClick={() => selectPrice("50.000 - 100.000")}>50.000đ - 100.000đ</li>
              <li onClick={() => selectPrice("> 100000")}>{"> 100000đ"}</li>
            </ul>
          )}
        </div>
      </div>
      <div className='result-container'>
        <div className='show-by'>
          <p>HIỂN THỊ THEO:</p>
        </div>
        {selectedProduct && (
          <div className="selected-product-container">
            <p>{selectedProduct.ProductCharacteristic}</p>
            <button className="clear-button" onClick={clearSelectedProduct}>X</button>

          </div>
        )}
        {selectedPrice && (
          <div className='selected-price-container'>
            <p>{selectedPrice}</p>
            <button className="clear-button" onClick={clearSelectedPrice}>X</button>
          </div>
        )}
      </div>
      <div className={`ProductReview ${expanded ? 'expanded' : ''}`}>
            <div className='title-review'>
                <h2>{filteredProducts.length} SẢN PHẨM</h2>
            </div>
            <div className='product-container'>
                {/* Chia danh sách sản phẩm thành các phần, mỗi phần chứa productsPerRow sản phẩm */}
                {chunkArray(filteredProducts.slice(0, visibleProducts), productsPerRow).map((chunk, index) => (
                    <div key={index} className='product-row'>
                        {/* Render mỗi phần như một hàng */}
                        {chunk.map((product, idx) => (
                            <ProductItems
                                key={idx}
                                product={product}
                                expanded={expanded}
                                toggleDescription={toggleDescription}
                            />
                        ))}
                    </div>
                ))}
            </div>
            {!expanded && (
                <button className="expand-btn" onClick={handleShowMore}>
                    Xem thêm
                </button>
            )}
            {expanded && (
                <button className="collapse-btn" onClick={resetDescription}>
                    Thu gọn
                </button>
            )}
        </div>
    </div>
  
  );
  // Hàm để chia mảng thành các phần có độ dài cho trước
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
}