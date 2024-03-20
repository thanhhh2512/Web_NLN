import Header from '../../component/fix/Header'
import Footer from '../../component/fix/Footer'
import OrderBody from '../../component/order/OrderBody'
export default function OrderPage(){
    return(
        <div className="OrderPage">
            <Header/>
            <OrderBody />
            <Footer/>
        </div>
    )
}