import Header from "../component/fix/Header";
import ProductBody from "../component/product/ProductBody";
import Footer from "../component/fix/Footer";

export default function ProductPage(){
    return(
        <div className="ProductPage">
            <Header/>
            <ProductBody/>
            <Footer/>

        </div>
    );
}