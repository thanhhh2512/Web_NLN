import DetailProductDescription from "./DetailProductDescription";
import DetailProductSale  from "./DetailProductSale";
import DetailProductPolicy from "./DetailProductPolicy";
import DetailProductRecommend from "./DetailProductRecommend"
export default function DetailProductBody(){
    return(
        <div className="detail-product-body">
            <DetailProductSale/>
            < DetailProductDescription/>
            < DetailProductPolicy/>
            <DetailProductRecommend/>
        </div>
    );
}