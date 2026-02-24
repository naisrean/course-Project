import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Herosection from "../Components/Herosection";
import { Link } from "react-router-dom";
function Home() {
  const card = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/08/ac/eb/08aceb5628caa3c677427ee329b76a9f.jpg",
      name: "wayfarer glasses",
      price: "13.00$",
      description: "High quality sunglasses with modern design.",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/cd/48/de/cd48dee03d61c03f0ac336167e94daf3.jpg",
      name: "AYR XL The Deep End",
      price: "35.00$",
      description: "Premium cotton shirt for everyday style.",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/b5/36/00/b5360045dde6862d13dce461648b6d0f.jpg",
      name: "AYR XL The Deep End",
      price: "35.00$",
      description:
        "Comfortable oversized t-shirt made from high-quality fabric. Designed for a clean and minimal look.",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/f0/c6/07/f0c607ba6bfacc57bf275a5c474f05bf.jpg",
      name: "Rugby Shirt | Kotn",
      price: "56.00$",
      description:
        "Stylish rugby shirt with a structured collar and premium stitching. Durable and comfortable for daily wear.",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/5e/3e/58/5e3e58af1d2635b328d6394e2ffaa339.jpg",
      name: "Rugby Shirt | Kotn",
      price: "53.00$",
      description:
        "Modern rugby-style shirt featuring soft cotton fabric and a timeless design.",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/79/58/9d/79589d73d9fcbae4266ca29998d16c7f.jpg",
      name: "Rugby Shirt | Kotn",
      price: "57.00$",
      description:
        "Premium rugby shirt with a relaxed fit and breathable material. Great for casual fashion lovers.",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/1200x/a6/48/78/a648782ed02393231a016d11a7cd8b39.jpg",
      name: "Baggy Jeans",
      price: "23.00$",
      description:
        "Trendy baggy jeans with a loose fit and durable denim fabric. Comfortable and perfect for streetwear style.",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/1200x/7f/56/a0/7f56a0dc6064442a2bfd32566c10bbef.jpg",
      name: "Pantalones vaqueros",
      price: "51.00$",
      description:
        "Classic denim jeans with a modern cut. Stylish, versatile, and easy to match with any outfit.",
    },
    {
      id: 9,
      img: "https://i.pinimg.com/1200x/e0/bd/2f/e0bd2fb7e82af3a51ad06bc9831f925b.jpg",
      name: "Polo Ralph Lauren",
      price: "8.99$",
      description:
        "Elegant polo shirt with soft fabric and iconic design. Lightweight and comfortable for daily wear.",
    },
    {
      id: 10,
      img: "https://i.pinimg.com/736x/fb/6a/ed/fb6aedb599c7e82ccece851fa895e4b3.jpg",
      name: "wayfarer glasses",
      price: "15.00$",
      description:
        "Stylish sunglasses with strong frame and UV protection. Perfect accessory for sunny days.",
    },
    {
      id: 11,
      img: "https://i.pinimg.com/1200x/6a/d2/6e/6ad26ea0c5df40a314096c8d7250ea67.jpg",
      name: "Fashion Men's Baggy Jeans",
      price: "23.00$",
      description:
        "Loose-fit men's jeans with modern street style. Comfortable, breathable, and durable.",
    },
    {
      id: 12,
      img: "https://i.pinimg.com/736x/d2/45/85/d245853a250f0c981f9ddac74781e6a4.jpg",
      name: "Baggy Jeans",
      price: "15.00$",
      description:
        "Casual baggy jeans made from quality denim. Relaxed fit for maximum comfort.",
    },
    {
      id: 13,
      img: "https://i.pinimg.com/736x/cf/2e/72/cf2e72a3f97e100558a89df0fd112416.jpg",
      name: "Bag",
      price: "13.00$",
      description:
        "Stylish everyday bag with spacious interior. Lightweight, durable, and perfect for daily use.",
    },
    {
      id: 14,
      img: "https://i.pinimg.com/1200x/91/b2/d6/91b2d6cd53d27dfa6a1ffe8829467b85.jpg",
      name: "wayfarer glasses",
      price: "15.00$ ",
    },
    {
      id: 15,
      img: "https://i.pinimg.com/1200x/81/b6/4b/81b64bdb41c75c4aa34024b81448b4d6.jpg",
      name: "Fashion Men's Baggy Jeans",
      price: "23.00$ ",
    },
    {
      id: 16,
      img: "https://i.pinimg.com/1200x/81/b6/4b/81b64bdb41c75c4aa34024b81448b4d6.jpg",
      name: "Baggy Jeans",
      price: "15.00$ ",
    },
    {
      id: 17,
      img: "https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg",
      name: "Bag",
      price: "13.00$ ",
    },
    {
      id: 18,
      img: "https://i.pinimg.com/736x/08/ac/eb/08aceb5628caa3c677427ee329b76a9f.jpg",
      name: "Glasses man",
      price: "30.00$ ",
    },
    {
      id: 19,
      img: "https://i.pinimg.com/736x/5e/54/47/5e544798fafeb92874da050f1398ab95.jpg",
      name: "hat",
      price: "8.45$ ",
    },
    {
      id: 20,
      img: "https://i.pinimg.com/736x/66/8c/a0/668ca05ed2e291b6f1dc7fd45422ac5a.jpg",
      name: "Shirt",
      price: "24.45$ ",
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
        <div className="flex items-center justify-center gap-3 pl-3">
          <h1 className="text-2xl font-bold">Products</h1>
        </div>
      </div>
      <div className="w-[95%] m-auto grid justify-center">
        <div className="grid justify-center items-center md:grid-cols-2 md:gap-10 xl:grid-cols-4 gap-3">
          {card.slice(0, 8).map((c) => (
            <Card id={c.id} img={c.img} name={c.name} price={c.price} />
          ))}
        </div>
      </div>
      <Link
        to={"/product"}
        className="w-[95%] flex justify-center mt-10 m-auto"
      >
        <button className="w-[100px] h-[40px] rounded-lg text-lg bg-[#5292fb]">
          View all
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default Home;
