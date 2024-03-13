import Header from "../component/fix/Header"
import Slide from "../component/home/Slide"
import Introduction from "../component/home/Introduction"
import Product from "../component/home/Product"
import Article from "../component/home/Article"

export default function HomePage(){
    return(
        <div className="HomePage">
            <Header/>
            <Slide/>
            <Introduction/>
            <Product/>
            <Article/>
        </div>
    )
}