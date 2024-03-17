import { ProductData } from "../../common/json/ProductData";
import BestSellerItem from "./BestSellerItem";
import { useState } from "react";
import './DetailProductRecomment.css'

export default function DetailProductRecommend() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        
        setActive(!active);
      };
    return (
        <div className='DetailProductRecommend'>
            <div className='recommend-title'>
                <div className="title1">
                <button className={`will-like ${active ? "active" : ""}`} onClick={handleClick}>
                        Có thể bạn sẽ thích
                    </button>
                   
                </div>
                <div className="title2">
                     <button className={`will-like ${active ? "active" : ""}`} onClick={handleClick}>
                        Đã xem gần đây
                    </button>
                </div>
            </div>
            <div className='recommend-detail'>
                {ProductData.map((item) => (
                    <BestSellerItem product={item} />
                ))}
            </div>
        </div>
    );
};
