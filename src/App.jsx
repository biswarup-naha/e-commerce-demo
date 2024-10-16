import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { getItemsSelector } from "./redux/slices/cartSlice";

function App() {
  return (
    <BrowserRouter>
      <div className="App w-screen h-screen">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;