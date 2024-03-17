import Header from '../../src/component/fix/Header'
import Footer from '../component/fix/Footer'
import ProductBody from '../component/product/ProductBody'

export default function ProductPage(){
    return(
        <div className="ProductPage">
            <Header/>
            <ProductBody/>
            <Footer/>
        </div>
    )
}