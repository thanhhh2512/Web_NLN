import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import LoginContainer from "./pages/login/LoginContainer";
import LoginPage from "./pages/login/LoginPage"
import RegisterOage from "./pages/login/Resgi"
import ProductPage from "./pages/product/ProductPage";
import DetailProductPage from "./pages/product/DetailProductPage"

import AccountPage from "./pages/Account/AccountPage";
import ManageProductPage from "./pages/ManageProduct";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import AddProduct from "./component/manage/products/AddProduct";
import EditProduct from "./component/manage/products/EditProduct";
import OrderManage from "./component/manage/order/OrderManage";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/register" element={<RegisterOage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/manage/add" element={<AddProduct/>}/>
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/manage/edit" element={<EditProduct/>}/>
                    <Route path="/detail/:ProductNo" element={<DetailProductPage />} />
                    <Route path="/manage/ordermanage" element={<OrderManage/>}/>
                    <Route path="/account" element={<AccountPage />} />

                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/manage/products" element={<ManageProductPage />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;