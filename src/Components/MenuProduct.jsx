import React from "react";
import { Link } from "react-router-dom";

function MenuProduct() {
  return (
    <>
      <div className="flex gap-6 w-[95%] m-auto justify-center h-10 items-center rounded-2xl text-lg">
        <Link to={"/all"} className="rounded-2xl md:w-[100px] text-center hover:bg-[#90caf9] transition-all focus:bg-[#90caf9] ">All </Link>
        <Link to={"/shirt"} className="rounded-2xl md:w-[100px] text-center hover:bg-[#90caf9] transition-all focus:bg-[#90caf9]">Shirt </Link>
        <Link to={"/jean"} className="rounded-2xl md:w-[100px] text-center hover:bg-[#90caf9] transition-all focus:bg-[#90caf9]">Jean </Link>
        <Link to={"/glasses"} className="rounded-2xl md:w-[100px] text-center hover:bg-[#90caf9] transition-all focus:bg-[#90caf9]">Glasses </Link>
        <Link to={"/hat"} className="rounded-2xl md:w-[100px] text-center hover:bg-[#90caf9] transition-all focus:bg-[#90caf9]">Hat </Link>
        <Link to={"/shoes"} className="rounded-2xl md:w-[100px] text-center hover:bg-[#90caf9] transition-all focus:bg-[#90caf9]">Shoes </Link>
      </div>
    </>
  );
}

export default MenuProduct;
