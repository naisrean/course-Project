import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import About from "../Pages/About";
import Detail from "../Pages/Detail";
import Shirt from "../Pages/ListProduct/Shirt";
import Jean from "../Pages/ListProduct/Jean";
import Glasses from "../Pages/ListProduct/Glasses";
import Hat from "../Pages/ListProduct/Hat";
import Shoes from "../Pages/ListProduct/Shoes";
import Allproduct from "../Pages/ListProduct/Allproduct";
import MenuProduct from "../Components/MenuProduct";

function RouterApp() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/all" element={<Allproduct/>}/>  
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/jean" element={<Jean />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/hat" element={<Hat />} />
        <Route path="/Shoes" element={<Shoes />} />
      </Routes>
    </div>
  );
}

export default RouterApp;
