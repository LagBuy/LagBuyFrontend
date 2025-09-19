import React from "react";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

import Vendor1 from "../assets/LandingPageImg/Supa.jpg";
import Vendor2 from "../assets/LandingPageImg/ShopJoses.jpg";
import Vendor3 from "../assets/LandingPageImg/everyday_essentials.jpg";
import Vendor4 from "../assets/LandingPageImg/electronics.png";
import Vendor5 from "../assets/LandingPageImg/minimart.jpg";
import Vendor6 from "../assets/LandingPageImg/LusiLiXetica.jpg";
import Vendor7 from "../assets/LandingPageImg/orrisandoak.jpg";
import Vendor8 from "../assets/LandingPageImg/clothestore.jpg";

const vendors = [
  { img: Vendor1, name: "SuperMarket", location: "Yaba, Lagos", category: "Groceries", rating: 5 },
  { img: Vendor2, name: "ShopJoses", location: "Unilag, Lagos", category: "Fashion", rating: 5 },
  { img: Vendor3, name: "Kemist Pharmacy", location: "Chemist, Lagos", category: "Pharmacy", rating: 5 },
  { img: Vendor4, name: "Haier Thermocool", location: "Bariga, Lagos", category: "Electronics", rating: 5 },
  { img: Vendor5, name: "Yem Yem", location: "Unilag, Lagos", category: "Groceries", rating: 5 },
  { img: Vendor6, name: "Lusi Lixetical Collection", location: "Unilag, Lagos", category: "Fashion", rating: 5 },
  { img: Vendor7, name: "ORRIS & OAK", location: "Unilag, Lagos", category: "Fashion", rating: 5 },
  { img: Vendor8, name: "Standard Fashion", location: "Yaba, Lagos", category: "Clothing", rating: 5 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturedVendors = () => {
  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-8 lg:py-16"
      style={{ marginTop: "-40px" }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-0">
        <h2 className="text-3xl font-bold leading-tight max-w-md">
          Featured <span className="text-green-600">Vendors</span>
        </h2>
        <a
          href="https://shop.lagbuy.com/login"
          className="text-gray-700 text-sm flex items-center space-x-1 hover:text-green-600 transition"
        >
          <span>See others</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Vendors Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center"
      >
        {vendors.map(({ img, name, location, category, rating }, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="relative flex flex-col w-full max-w-xs rounded-2xl shadow-md bg-white overflow-hidden group"
          >
            {/* Image with overlay + badge */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              {/* Category badge */}
              <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {category}
              </span>
              {/* Hover button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                <a
                  href="https://shop.lagbuy.com/login"
                  className="bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow hover:bg-green-700 transition"
                >
                  Shop Now
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col items-center text-center p-4 space-y-1">
              <h3 className="font-semibold text-lg">{name}</h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? "fill-yellow-500" : "fill-gray-200"
                    }`}
                  />
                ))}
                <span className="text-gray-600 text-xs ml-1">({rating}.0)</span>
              </div>

              {/* Location */}
              <p className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <MapPin className="w-4 h-4 text-green-600" />
                {location}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedVendors;
