import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Zap, Users } from "lucide-react";

import customer_img1 from "../../assets/LandingPageImg/me.jpg";
import customer_img2 from "../../assets/LandingPageImg/customer2.jpg";
import customer_img3 from "../../assets/LandingPageImg/customer3.jpg";
import customer_img4 from "../../assets/LandingPageImg/customer4.jpg";
import customer_img5 from "../../assets/LandingPageImg/customer5.jpg";
import customer_img6 from "../../assets/LandingPageImg/customer6.jpg";

const Customers = [
  {
    img: customer_img1,
    text: "Ever since the launch of LAGBUY, I no longer use other shopping platforms. This is now my go-to shop. What you see here is exactly what you will get.",
    name: "TOBE",
    rating: 5,
  },
  {
    img: customer_img2,
    text: "The discounts and promotions on this site are unbeatable. I saved a lot on my recent purchase. Thank you, LagBuy!",
    name: "Lekky Wise",
    rating: 4,
  },
  {
    img: customer_img3,
    text: "Wow, the delivery was super fast. I got my order in no time. Really impressed with the service.",
    name: "Seun",
    rating: 5,
  },
  {
    img: customer_img4,
    text: "I love how LagBuy connects me with vendors in my area. It feels personal and convenient, no stress at all.",
    name: "Balusi",
    rating: 5,
  },
  {
    img: customer_img5,
    text: "As a student in Unilag, this app is a lifesaver. I can easily shop for essentials and get them delivered without leaving campus.",
    name: "Orims",
    rating: 5,
  },
  {
    img: customer_img6,
    text: "Safe, reliable, and affordable. LagBuy is my go to for shopping now. I trust them completely with my orders.",
    name: "Williams",
    rating: 5,
  },
];

const Customer = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

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
      <motion.span
        key={i}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: i * 0.1 }}
        className={`text-xl ${
          i < count
            ? "text-yellow-400 drop-shadow-sm"
            : "text-gray-300"
        }`}
      >
        ★
      </motion.span>
    ));

  const handleSwipe = (offsetX) => {
    if (offsetX > 80) {
      setCurrent((prev) => (prev - 1 + Customers.length) % Customers.length);
    } else if (offsetX < -80) {
      setCurrent((prev) => (prev + 1) % Customers.length);
    }
  };

  return (
    <section 
      className="relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 lg:py-20 overflow-hidden"
      id="Testimonials"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-5 animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-yellow-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-600 text-sm font-semibold">Customer Love</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          What Our{" "}
          <motion.span
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 bg-[length:200%_auto]"
          >
            Customers Say
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Don't just take our word for it. Hear from thousands of satisfied customers who trust LagBuy for their shopping needs.
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Customer Images Carousel */}
        <motion.div 
          className="flex justify-center items-center gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <motion.img
            src={Customers[leftIndex].img}
            alt={Customers[leftIndex].name}
            className="w-20 h-20 rounded-full opacity-60 cursor-pointer border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:opacity-100 hover:scale-110"
            onClick={() => setCurrent(leftIndex)}
            whileHover={{ scale: 1.1 }}
          />

          {/* Center Image */}
          <motion.div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <motion.img
              key={current}
              src={Customers[current].img}
              alt={Customers[current].name}
              className="w-32 h-32 rounded-full border-4 border-green-400 shadow-2xl cursor-pointer relative z-10"
              initial={{ scale: 0.8, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Floating Element */}
            <motion.div
              className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-full p-2 shadow-lg z-20"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <Quote className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.img
            src={Customers[rightIndex].img}
            alt={Customers[rightIndex].name}
            className="w-20 h-20 rounded-full opacity-60 cursor-pointer border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:opacity-100 hover:scale-110"
            onClick={() => setCurrent(rightIndex)}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Testimonial Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => handleSwipe(info.offset.x)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="cursor-grab active:cursor-grabbing bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-yellow-500" />
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-green-100">
                <Quote className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {renderStars(Customers[current].rating)}
                </div>

                <motion.blockquote 
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{Customers[current].text}"
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mx-auto mb-4" />
                  <p className="font-bold text-gray-900 text-lg">{Customers[current].name}</p>
                  <p className="text-green-600 text-sm font-medium">Verified Customer</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center mt-8 gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {Customers.map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current 
                  ? "bg-gradient-to-r from-green-500 to-yellow-500 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrent(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full border-2 border-white shadow-lg"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-green-600 font-semibold text-sm">4.9/5 Stars</p>
              <p className="text-gray-600 text-xs">from 10K+ reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">50,000+ Happy Customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customer;