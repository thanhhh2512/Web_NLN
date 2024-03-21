import Header from '../../component/fix/Header'
import Footer from '../../component/fix/Footer'
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