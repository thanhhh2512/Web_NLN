import { useEffect, useState, useRef, useCallback } from 'react';
import './Products.css'
import { TypeofProductData } from '../../../common/json/TypeofProductData';
import { ProductData } from '../../../common/json/ProductData';
function ProductsBody() {
    const [lengthList, setLengthList] = useState(ProductData.length)
    const [fillter, setFillter] = useState('')
    var products = useRef(ProductData)
    const fillterType = useCallback((type) =>{
        if(type ==='')
            return ProductData
        return ProductData.filter((item)=>{
                // console.log(item)
                return item.ProductType === type
            }
        )},[])
    

    // Xử lý click lọc sản phẩm
    useEffect(()=>{
        products.current = fillterType(fillter)
        // console.log([products.current, fillter])
        setLengthList(products.current.length)
    },[fillter,fillterType])

    return ( 
    <div className="wrapper">
        <div className="title-page">
           <h1>Quản lý sản phẩm</h1> 
        </div>
        <div className="select-type">
            <h5>Loại sản phẩm</h5>
            <div className='fillter-type'>
                {TypeofProductData.map(type =>{
                    if(type.title)
                        return (
                            <button 
                                key={type.id} 
                                className ={
                                    fillter === type.title ? 'active btn-type': 'btn-type'
                                }
                                onClick={() => setFillter(type.title)}
                            >
                                {type.title}
                            </button>
                        )
                    else return null
                })}
            </div>
            <button className='btn-reset' onClick={()=>setFillter('')}>Đặt lại</button>
        </div>
        <div className='length-list'>
            <p>{lengthList } sản phẩm</p>
        </div>
        <section className='itemList manager-products'>
            {products.current.map((item)=>{
                return (
                    <div className="block-item " key={item.ProductNo}>
                        <div className="item-detail">
                            <img src={"/"+item.ProductImage} alt={item.ProductName}/>
                            {item.ProductName}
                        </div>
                        <div className='saled'>
                            <p>Đã bán:</p>
                            <p>5</p>
                        </div>
                        <div className='stored'>
                            <p>Còn lại:</p>
                            <p>5</p>
                        </div>
                        <div className='control-manage'>
                            <p><i className="fa-solid fa-pen-to-square"></i></p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>)
            })}
        </section>
    </div> );
}

export default ProductsBody;