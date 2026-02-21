import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Herosection from "../Components/Herosection";
function Home() {
  const card = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/08/ac/eb/08aceb5628caa3c677427ee329b76a9f.jpg",
      name: "wayfarer glasses",
      price: "13.00$",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/b5/36/00/b5360045dde6862d13dce461648b6d0f.jpg",
      name: "AYR XL The Deep End",
      price: "35.00$",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/f0/c6/07/f0c607ba6bfacc57bf275a5c474f05bf.jpg",
      name: "Rugby Shirt | Kotn",
      price: "56.00$",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/5e/3e/58/5e3e58af1d2635b328d6394e2ffaa339.jpg",
      name: "Rugby Shirt | Kotn",
      price: "53.00$",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/79/58/9d/79589d73d9fcbae4266ca29998d16c7f.jpg",
      name: "Rugby Shirt | Kotn",
      price: "57.00$",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/1200x/a6/48/78/a648782ed02393231a016d11a7cd8b39.jpg",
      name: "Baggy Jeans",
      price: "23.00$",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/1200x/7f/56/a0/7f56a0dc6064442a2bfd32566c10bbef.jpg",
      name: "Pantalones vaqueros ",
      price: "51.00$",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/1200x/e0/bd/2f/e0bd2fb7e82af3a51ad06bc9831f925b.jpg",
      name: "Polo Ralph Lauren ",
      price: "8.99$",
    },
    {
      id: 9,
      img: "https://i.pinimg.com/736x/fb/6a/ed/fb6aedb599c7e82ccece851fa895e4b3.jpg",
      name: "wayfarer glasses",
      price: "15.00$ ",
    },
    {
      id: 10,
      img: "https://i.pinimg.com/1200x/6a/d2/6e/6ad26ea0c5df40a314096c8d7250ea67.jpg",
      name: "Fashion Men's Baggy Jeans",
      price: "23.00$ ",
    },
    {
      id: 11,
      img: "https://i.pinimg.com/736x/d2/45/85/d245853a250f0c981f9ddac74781e6a4.jpg",
      name: "Baggy Jeans",
      price: "15.00$ ",
    },
    {
      id: 12,
      img: "https://i.pinimg.com/736x/cf/2e/72/cf2e72a3f97e100558a89df0fd112416.jpg",
      name: "Bag",
      price: "13.00$ ",
    },
  ];

  return (
    <>
      {/* <div className="h-[450px] m-auto rounded-lg md:w-[95%] bg-[#edf6fa] md:grid md:grid-cols-3 md:justify-center md:items-center">
        <div className=" h-[100px] md:col-span-2 text-center">
          <h1 className="md:text-5xl font-bold text-2xl   text-[#3a86ff]">
            Welcome to my shopp
          </h1>
          <h1 className="md:text-3xl font-bold w-full text- text-[15px]  md:pt-5">
            {" "}
            Enjoy ur Shopping
          </h1>
          <Link to="/product">
            <button className="w-20 h-7 md:mt-4 md:w-25 md:h-9 mt-2 md:text-xl rounded-lg md:text-center hover:bg-[#c7e4fc] bg-[#90caf9] transition  ">
              show
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
                className=" w-full h-full"
                src="https://i.pinimg.com/736x/5f/70/59/5f705912e6817400ac4445f9b444e290.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full"
                src="https://i.pinimg.com/1200x/7b/cb/9b/7bcb9bd1e98b99de08c245581deda539.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full"
                src="https://i.pinimg.com/736x/48/14/e0/4814e0331273f934f86438893f966557.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full"
                src="https://i.pinimg.com/1200x/27/2f/93/272f9380b762cfc6b030ff12ffe58371.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" w-full h-full"
                src="https://i.pinimg.com/1200x/9d/f7/f6/9df7f64fb601dc15190b176c75fe0842.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
      <Herosection />
      <div className="md:w-[95%] m-auto mt-10">
        <div className="flex items-center gap-3 pl-3">
          <h1 className="text-2xl font-bold">Products</h1>
        </div>
      </div>
      <div className="w-[95%] m-auto">
        <div className="grid justify-center items-center md:grid-cols-2 xl:grid-cols-4 gap-3">
          {card.map((c) => (
            <Card id={c.id} img={c.img} name={c.name} price={c.price} />
          ))}
        </div>
      </div>
<Footer/>
    </>
  );
}

export default Home;
