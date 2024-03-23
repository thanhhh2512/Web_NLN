import Header from "../../component/fixed/Header";
import DetailProductBody from "../../component/product-detail/DetailProductBody";
import Footer from "../../component/fixed/Footer";

export default function DetailProductPage(){
    return(
        <div className="ProductPage">
            <Header/>
            <DetailProductBody/>
            <Footer/>
        </div>
    );
}