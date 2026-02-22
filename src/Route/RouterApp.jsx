import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import About from "../Pages/About";
import Detail from "../Pages/Detail";
function RouterApp() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default RouterApp;
