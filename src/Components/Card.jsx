import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { id, img, name, price } = props;
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="w-[350px] h-[400px] rounded-lg  mt-2 shadow-2xl transition-transform duration-500 hover:scale-98">
          <img
            className="h-[73%] w-[68%] shadow-2xl object-cover m-auto pt-3"
            src={img}
            alt=""
          />
          <h1 className="text-2xl font-bold pl-5 pt-2">{name} </h1>
          <p className="text-xl pl-5  text-green-600 font-bold ">{price}</p>
          <div className="flex justify-end mr-4">
            <button className=" w-19 bg-[#5292fb] h-8 rounded-[5px] text-lg hover:bg-[#7faffd]">
              View
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
