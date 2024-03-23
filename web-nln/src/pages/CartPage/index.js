import Header from '../../component/fixed/Header'
import Footer from '../../component/fixed/Footer'
import CartBody from '../../component/cart/CartBody'

export default function CartPage(){
    return(
        <div className="CartPage">
            <Header/>
            <CartBody/>
            <Footer/>
        </div>
    )
}