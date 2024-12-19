import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails";
import Department from "./pages/Department";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/department" element={<Department />} />
      </Routes>
    </>
  );
}

export default App;
