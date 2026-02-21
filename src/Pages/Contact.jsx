import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className=" bg-gray-100 py-16 px-6">
        <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products? Feel free to contact us
              anytime.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span className="text-gray-700">Phnom Penh, Cambodia</span>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-500 text-xl" />
                <span className="text-gray-700">+855 81 56 81 36</span>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span className="text-gray-700">s'nshopp@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6 hover:ring-blue-400">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400  hover:border-blue-600"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400  hover:border-blue-600"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-600"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300 "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
