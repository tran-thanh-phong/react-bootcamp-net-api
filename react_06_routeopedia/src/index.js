import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CryptoDetail from "./Pages/CryptoDetail";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product/Product";
import CreateProduct from "./Pages/Product/CreateProduct";
import ProductList from "./Pages/Product/ProductList";
import ProductDetails from "./Pages/Product/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cryptodetail/:cryptoSymbol/:id"
          element={<CryptoDetail />}
        ></Route>
        <Route path="product">
          <Route path="" element={<Product/>}></Route>
          <Route path="create" element={<CreateProduct/>}></Route>
          <Route path="details/:productId" element={<ProductDetails/>}></Route>
          <Route path="list" element={<ProductList/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
