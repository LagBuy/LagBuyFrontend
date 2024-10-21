import React from "react";
import img1 from "../../assets/LandingPageImg/whatToDo1.png";
import img2 from "../../assets/LandingPageImg/whatToDo2.png";
import img3 from "../../assets/LandingPageImg/whatToDo3.png";

const WhatToDoWithLadbuySection = () => {
  const todos = [
    {
      image: img1,
      title: "Buy An Item",
      text: "shop like an expert! Browse, compare, browse and buy confidently. Get top products delivered straight to your doorstep",
      button: "Buy Now",
    },
    {
      image: img2,
      title: "Sell An Item",
      text: "Elevate your business! sell on lagbuy,Reach a large audienc, list product, set prices and grow sales!.",
      button: "Sell Now",
    },
    {
      image: img3,
      title: "Deliver An Item",
      text: "Join the ride! Become a LagBuy delivery partner, and start earning today. Flexible schedules, competitive pay.",
      button: "Join Us",
    },
  ];

  return (
    <section className="container mx-auto px-5 py-14">
      <div className="text-center">
        <h1 className="text-lg lg:text-2xl font-semibold mb-3">
          What can you do with LagBuy?
        </h1>
        <div className="text-base lg:text-xl mb-4">
          <p>Unlock a world of convenience!</p>
          <p>LagBuy connects buyers, sellers, and riders for</p>
          <p>a seamless shopping experience. Discover the difference!</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex-1 group relative overflow-hidden bg-[#FFF9B7] text-left px-7 py-16 rounded-xl shadow-lg w-full lg:w-[30rem] h-auto lg:h-[30rem] transition-all duration-300 hover:bg-[#1A362B] hover:text-white"
          >
            <div className="relative z-10 flex justify-center lg:justify-end">
              <img src={todo.image} alt={todo.title} className="h-40 mb-6" />
            </div>
            <div className="relative z-10">
              <p className="text-3xl font-semibold mb-2">{todo.title}</p>
              <p className="mb-6 text-xl font-light">{todo.text}</p>
              <div className="text-center">
                <button className="py-2 px-10 text-sm w-auto font-medium shadow rounded-full bg-[#1A362B] text-[#FCE600] relative overflow-hidden transition-all duration-600">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FCE600] to-[#1A362B] transition-all duration-500 transform translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-white">
                    {todo.button}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatToDoWithLadbuySection;
