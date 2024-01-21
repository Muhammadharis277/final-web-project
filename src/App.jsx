import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
