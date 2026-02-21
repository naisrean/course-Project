import React from "react";
import { Link } from "react-router-dom";

function MenuPhone() {
  return (
    <>
      <div className="lg:hidden md:flex gap-2 h-full items-center">
        <Link
          className="px-4 py-2 rounded-2xl focus:bg-[#bbdefb] transition"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="px-4 py-2 rounded-2xl focus:bg-[#bbdefb] transition"
          to="/shop"
        >
          Product
        </Link>
  
        <Link
          className="px-4 py-2 rounded-2xl focus:bg-[#bbdefb] transition"
          to="/about"
        >
          About
        </Link>

        <Link
          className="px-4 py-2 rounded-2xl focus:bg-[#bbdefb] transition"
          to="/contact"
        >
          Contact
        </Link>

      </div>
    </>
  );
}

export default MenuPhone;
