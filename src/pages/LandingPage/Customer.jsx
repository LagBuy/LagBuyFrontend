import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import customer_img1 from "../../assets/LandingPageImg/customer1.jpg";
import customer_img2 from "../../assets/LandingPageImg/customer2.jpg";
import customer_img3 from "../../assets/LandingPageImg/customer3.jpg";
import customer_img4 from "../../assets/LandingPageImg/customer4.jpg";
import customer_img5 from "../../assets/LandingPageImg/customer5.jpg";
import customer_img6 from "../../assets/LandingPageImg/customer6.jpg";

const Customers = [
  {
    img: customer_img1,
    text:
      "The customer service here is top-notch, they were so helpful with my order. Highly recommend this site.",
    name: "Zaheer",
    rating: 5,
  },
  {
    img: customer_img2,
    text:
      "The discounts and promotions on this site are unbeatable. I saved a lot on my recent purchase. Thank you, LagBuy!",
    name: "Lekky Wise",
    rating: 4,
  },
  {
    img: customer_img3,
    text:
      "Wow, the delivery was super fast. I got my order in no time. Really impressed with the service.",
    name: "Seun",
    rating: 5,
  },
  {
    img: customer_img4,
    text:
      "I love how LagBuy connects me with vendors in my area. It feels personal and convenient, no stress at all.",
    name: "Balusi",
    rating: 5,
  },
  {
    img: customer_img5,
    text:
      "As a student in Unilag, this app is a lifesaver. I can easily shop for essentials and get them delivered without leaving campus.",
    name: "Orims",
    rating: 5,
  },
  {
    img: customer_img6,
    text:
      "Safe, reliable, and affordable. LagBuy is my go to for shopping now. I trust them completely with my orders.",
    name: "Williams",
    rating: 5,
  },
];

const Customer = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto rotate every 5s (pauses when `paused` is true)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Customers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const leftIndex = (current + Customers.length - 1) % Customers.length;
  const rightIndex = (current + 1) % Customers.length;

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < count
            ? "bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent"
            : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));

  // Handle swipe
  const handleSwipe = (offsetX) => {
    if (offsetX > 80) {
      setCurrent((prev) => (prev - 1 + Customers.length) % Customers.length);
    } else if (offsetX < -80) {
      setCurrent((prev) => (prev + 1) % Customers.length);
    }
  };

  return (
    <section className="mx-auto px-5 py-10 text-center max-w-3xl" style={{ marginTop: "0px" }}>
      <p className="text-green-600 font-semibold mb-2">Testimonials</p>
      <h1 className="text-3xl font-bold mb-8">What Our Customers Say About Us</h1>

      {/* Carousel Images */}
      <div className="flex justify-center items-center gap-8 mb-6">
        <img
          src={Customers[leftIndex].img}
          alt={Customers[leftIndex].name}
          className="w-16 h-16 rounded-full opacity-50 cursor-pointer hover:opacity-100 transition"
          onClick={() => setCurrent(leftIndex)}
        />

        <motion.img
          key={current}
          src={Customers[current].img}
          alt={Customers[current].name}
          className="w-28 h-28 rounded-full border-4 border-yellow-300 shadow-lg cursor-pointer"
          onClick={() => setCurrent(current)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <img
          src={Customers[rightIndex].img}
          alt={Customers[rightIndex].name}
          className="w-16 h-16 rounded-full opacity-50 cursor-pointer hover:opacity-100 transition"
          onClick={() => setCurrent(rightIndex)}
        />
      </div>

      {/* Animate Name + Text with Swipe */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => handleSwipe(info.offset.x)}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <p className="font-semibold text-lg mb-2">{Customers[current].name}</p>
          <div className="flex justify-center mb-4">{renderStars(Customers[current].rating)}</div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-600 text-base">{Customers[current].text}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Customers.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-green-600" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Customer;
