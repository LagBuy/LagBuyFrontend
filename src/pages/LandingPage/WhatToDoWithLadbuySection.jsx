import React from "react";
import { FiShoppingBag, FiShoppingCart, FiTruck, FiUsers } from "react-icons/fi";

const todos = [
  {
    icon: <FiShoppingBag size={48} className="text-green-700 mb-6" />,
    title: "Buy An Item",
    text: "Shop like an expert! Browse, compare, and buy confidently.",
    bgColor: "bg-[rgba(49,159,67,0.08)]",
    textColor: "text-black",
    btn: "Buy Now",
    link: "https://shop.lagbuy.com/login",
  },
  {
    icon: <FiShoppingCart size={48} className="text-white mb-6" />,
    title: "Sell An Item",
    text: "Elevate your business! Sell on LagBuy, reach a large audience, list products, set prices, and grow sales!",
    bgColor: "bg-[#1A362B]", // Deep green
    textColor: "text-white",
    btn: "Sell Now",
    link: "https://vendors.lagbuy.com/login",
  },
  {
    icon: <FiTruck size={48} className="text-green-700 mb-6" />,
    title: "Deliver An Item",
    text: "Join the ride! Become a LagBuy delivery partner, and start earning today.",
    bgColor: "bg-[rgba(49,159,67,0.08)]",
    textColor: "text-black",
    btn: "Join Now",
    link: "https://riders.lagbuy.com",
  },

  // 🚫 Temporarily hide Service Providers card
  // {
  //   icon: <FiUsers size={48} className="text-white mb-6" />,
  //   title: "Service Providers",
  //   text: "Offer your services on LagBuy and connect with customers looking for reliable help.",
  //   bgColor: "bg-[#1A362B]",
  //   textColor: "text-white",
  //   btn: "Get Started",
  // },
];

const WhatToDoWithLagbuySection = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12" style={{ marginTop: "-60px" }}>
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-3">What You Can Do On Lagbuy</h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          LagBuy connects buyers, sellers, and riders for a seamless shopping experience. Discover the difference!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {todos.map(({ icon, title, text, bgColor, textColor, btn, link }, index) => (
          <div
            key={index}
            className={`${bgColor} ${textColor} rounded-xl p-8 flex flex-col items-center text-center min-h-[320px]`}
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-base mb-6">{text}</p>

            <button
              onClick={() => {
                if (link) {
                  window.location.href = link;
                }
              }}
              className={`mt-auto px-6 py-2 rounded-full font-semibold transition 
                ${textColor === "text-white"
                  ? "bg-white text-green-900 hover:bg-green-800 hover:text-white"
                  : "bg-green-900 text-white hover:bg-green-800"
                }`}
            >
              {btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatToDoWithLagbuySection;
