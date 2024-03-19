import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import LoginContainer from "./pages/login/LoginContainer";
import LoginPage from "./pages/login/LoginPage"
import RegisterOage from "./pages/login/Resgi"
import ProductPage from "./pages/product/ProductPage";
import DetailProductPage from "./pages/product/DetailProductPage"

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
                    <Route path="/detail" element= {<DetailProductPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;