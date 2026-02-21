import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const {id, img, name, price } = props;
  return (
    <>
    <Link to={`/detail/${id}`}> 
      <div className="w-[100%] h-[530px] rounded-lg  mt-2 shadow-2xl transition-transform duration-500 hover:scale-98">
        <img
          className="h-[77%] w-[100%] shadow-2xl object-cover"
          src={img}
          alt=""
        />
        <h1 className="text-2xl font-bold pl-5 pt-2">{name} </h1>
        <p className="text-xl pl-5  text-green-600 mb-2 font-bold ">{price}</p>
        <div className="flex justify-end mr-4">
          <button className=" w-19 bg-[#3a86ff] h-8 rounded-[5px] text-lg hover:bg-[#7faffd]">
            View
          </button>
        </div>
      </div>
      </Link>
    </>
  );
}

export default Card;
