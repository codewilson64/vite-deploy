import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ps5_banner from "./Components/Assets/banner_ps5.jpg";
import ps4_banner from "./Components/Assets/banner-ps4.jpg";
import xbox_banner from "./Components/Assets/banner-xone.jpg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/ps5" element={<ShopCategory banner={ps5_banner} category="ps5" />} />
          <Route path="/ps4" element={<ShopCategory banner={ps4_banner} category="ps4" />} />
          <Route path="/xboxone" element={<ShopCategory banner={xbox_banner} category="xbox" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
