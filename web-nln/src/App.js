import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product" element={<ProductPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;
