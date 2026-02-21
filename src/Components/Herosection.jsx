import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

function Herosection() {
  return (
    <>
      <div className="h-[450px] m-auto rounded-lg md:w-[95%] bg-[#edf6fa] md:grid md:grid-cols-2 md:justify-center md:items-center">
        <div className=" h-[100px] md:col-span-1 text-center">
          <h1 className="md:text-5xl font-bold text-2xl text-[#3a86ff]">
            Welcome to my shopp
          </h1>
          <h1 className="md:text-3xl font-bold w-full text- text-[15px]  md:pt-5">
            {" "}
            Enjoy ur Shopping
          </h1>
          <Link to="/product">
            <button className="w-50 h-7 md:mt-4 md:w-50 md:h-11 mt-2 md:text-xl rounded-lg md:text-center hover:bg-[#c7e4fc] bg-[#90caf9] transition  ">
              View all Products
            </button>
          </Link>
        </div>
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className=" md:w-[330px] md:h-[390px] w-[250px] h-[320px] "
          >
            <SwiperSlide>
              <img
                className=" w-full h-full object-cover"
                src="https://i.pinimg.com/736x/5f/70/59/5f705912e6817400ac4445f9b444e290.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/7b/cb/9b/7bcb9bd1e98b99de08c245581deda539.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full object-cover"
                src="https://i.pinimg.com/736x/48/14/e0/4814e0331273f934f86438893f966557.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/27/2f/93/272f9380b762cfc6b030ff12ffe58371.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/9d/f7/f6/9df7f64fb601dc15190b176c75fe0842.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Herosection;
