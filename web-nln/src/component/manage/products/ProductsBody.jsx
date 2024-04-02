import { useEffect, useState, useRef, useCallback } from 'react';
import './Products.css'
import { TypeofProductData } from '../../../common/json/TypeofProductData';
import axios from 'axios';
import EditProduct from './EditProduct';
import { Link } from 'react-router-dom';

function ProductsBody() {
    const [fillter, setFillter] = useState('')
    const [products, setProducts] = useState([]);
    const serverApi = process.env.REACT_APP_SERVER_URL
    const serverUrl = process.env.REACT_APP_SERVER
    

    //var products = useRef(ProductData)
    // const fillterType = useCallback((type) =>{
    //     if(type ==='')
    //         return ProductData
    //     return ProductData.filter((item)=>{
    //             // console.log(item)
    //             return item.ProductType === type
    //         }
    //     )},[])
    

    // Xử lý click lọc sản phẩm
    // useEffect(()=>{
    //     products.current = fillterType(fillter)
    //     console.log([products.current, fillter])
    //     setLengthList(products.current.length)
    // },[fillter,fillterType])

    async function fetchData(){
        const data = await axios.get(serverApi+'/products').then((res)=>{
            setProducts(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    async function deleteProduct(id){
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            const data = await axios.delete(serverApi+'/products/'+id).then((res)=>{
                fetchData()
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    function editPage(id){
        
    }

    

    useEffect(()=>{
        fetchData()
    },[])


    return ( 
    <div className="wrapper">
        <div className="title-page">
           <h1>Quản lý sản phẩm</h1> 
        </div>
        {/* <div className="select-type">
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
        </div> */}
        <div className='length-list'>

            <p>{products.length} sản phẩm</p>

        </div>
        <section className='itemList manager-products'>
            {products.length > 0 && products.map((item)=>{
                return (
                    <div className="block-item " key={item.ProductNo}>
                        <div className="item-detail">
                            <img src={serverUrl+item.images[0].path} alt={item.name}/>
                            {item.name}
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
                            <Link to={{ pathname: `/admin/editProduct/${item._id}` }}><i className="fa-solid fa-edit"></i></Link>
                            <p><i className="fa-solid fa-trash" onClick={() => deleteProduct(item._id)}></i></p>
                        </div>
                    </div>
                )
            })}
        </section>
    </div> 
    );
}

export default ProductsBody;