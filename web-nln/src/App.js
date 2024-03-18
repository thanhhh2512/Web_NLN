import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginContainer from "./pages/LoginContainer";
import RegisterOage from './pages/Resgi';
import LoginPage from './pages/LoginPage';
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/loginpage" element={<LoginPage/>}/>  
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/register" element={<RegisterOage/>}/>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;