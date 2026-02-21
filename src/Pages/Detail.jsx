import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState();

  const products = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/08/ac/eb/08aceb5628caa3c677427ee329b76a9f.jpg",
      name: "wayfarer glasses",
      price: "13.00$",
      description: "High quality sunglasses with modern design.",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/b5/36/00/b5360045dde6862d13dce461648b6d0f.jpg",
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
  ];

  const product = products.find((p) => p.id === parseInt(id));
  const increase = () => setQty(qty + 1);
  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <>
      <div className="h-full bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white shadow-2xl rounded-3xl grid md:grid-cols-2 gap-10 p-10  w-[60%]">
          <div>
            <img
              src={product.img}
              alt={product.name}
              className="w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-between mt-2">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <h2 className="text-3xl font-bold text-green-600 mb-6">
                {product.price}
              </h2>
              <div className="mb-6">
                <p className="font-semibold mb-5">Select Size:</p>
                <div className="flex gap-3">
                  {["S", "M", "L", "XL"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 rounded-xl border transition ${
                        size === s
                          ? "bg-[#3a86ff] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">Quantity:</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrease}
                    className="px-4 py-2 bg-gray-200 rounded-xl"
                  >
                    -
                  </button>

                  <span className="text-lg font-semibold">{qty}</span>

                  <button
                    onClick={increase}
                    className="px-4 py-2 bg-gray-200 rounded-xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="Submit"
                className="bg-[#3a86ff] text-white py-4 rounded-2xl text-lg hover:bg-[#6da5ff] transition w-full"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
