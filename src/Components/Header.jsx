import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import MenuPhone from "./MenuPhone";

function Header() {
  return (
    <>
      <div>
        <div className=" mx-auto rounded-xl h-14 flex items-center justify-between px-3 md:px-8 w-full mb-3">
          <Link to="/home">
            <h1 className="text-3xl md:text-3xl font-bold text-[#3a86ff] cursor-pointer">
              s'nShop
            </h1>
          </Link>
          <div className="hidden md:flex gap-2 h-full items-center">
            <Link
              className="px-4 py-2 rounded-2xl hover:bg-[#bbdefb] focus:bg-[#bbdefb] transition"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="px-4 py-2 rounded-2xl hover:bg-[#bbdefb] focus:bg-[#bbdefb] transition"
              to="/product"
            >
              Product
            </Link>
            <Link
              className="px-4 py-2 rounded-2xl hover:bg-[#bbdefb] focus:bg-[#bbdefb] transition"
              to="/about"
            >
              About
            </Link>
            <Link
              className="px-4 py-2 rounded-2xl hover:bg-[#bbdefb] focus:bg-[#bbdefb] transition"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <FiShoppingCart className="font-bold text-3xl" />
        </div>
        <div className="md:hidden flex justify-center mt-3 h-8 items-center ">
          <MenuPhone />
        </div>
      </div>
    </>
  );
}

export default Header;
