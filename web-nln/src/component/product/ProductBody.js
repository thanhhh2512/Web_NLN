import ProductSale from "./ProductSale";
import ProductDescription from "./ProductDescription";
import ProductPolicy from "./ProductPolicy";
import ProductRecommend from "./ProductRecommend";

export default function ProductBody(){
    return(
        <div className="product-body">
            <ProductSale/>
            <ProductDescription/>
            <ProductPolicy/>
            <ProductRecommend/>
        </div>
    );
}