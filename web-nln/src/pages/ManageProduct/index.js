import Header from '../../component/fix/Header'
import Footer from '../../component/fix/Footer'
import ProductsBody from '../../component/manage/products/ProductsBody'

export default function ManageProductPage(){
    return(
        <div className="ManageProductPage">
            <Header/>
            <ProductsBody/>
            <Footer/>
        </div>
    )
}