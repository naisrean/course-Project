import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-6 tracking-tight">
          Welcome to s'nShop
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We’re a curated marketplace dedicated to bringing you the finest
          selection of modern essentials with a focus on simplicity, quality,
          and style.
        </p>
      </section>
      {/* Stats/Features Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4 font-bold">10k+</div>
            <h3 className="text-xl font-bold mb-2">Happy Customers</h3>
            <p className="text-gray-500 text-sm">
              Growing our community one delivery at a time across the globe.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4 font-bold">24/7</div>
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <p className="text-gray-500 text-sm">
              Our team is always here to ensure your shopping experience is
              flawless.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4 font-bold">100%</div>
            <h3 className="text-xl font-bold mb-2">Original</h3>
            <p className="text-gray-500 text-sm">
              We partner directly with brands to guarantee authentic products.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2024, s'nShop started with a simple idea: shopping
              should be effortless. We noticed that the market was cluttered
              with noise, so we built a space that prioritizes the user
              experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every item in our shop is hand-picked. We don't just sell
              products; we sell the confidence that comes with knowing you've
              bought the best.
            </p>
          </div>
          <div className="flex-1 w-full h-64 bg-blue-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-blue-200">
            {/* Placeholder for an actual image */}
            <span className="text-blue-400 font-medium italic text-lg">
              Quality over Quantity
            </span>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Ready to find something new?
        </h2>
        <Link
          to={"/product"}
          className="w-[95%] flex justify-center mt-10 m-auto"
        >
          <button className="w-[200px] h-[40px] rounded-lg text-lg bg-[#6ba0f6] hover:bg-[#84b2fc]">
            Shoping
          </button>
        </Link>
      </section>
    </div>
  );
};
export default About;
