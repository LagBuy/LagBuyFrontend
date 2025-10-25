import React from "react";
import { MapPin, Star, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Vendor1 from "../assets/LandingPageImg/Supa.jpg";
import Vendor2 from "../assets/LandingPageImg/ShopJoses.jpg";
import Vendor3 from "../assets/LandingPageImg/everyday_essentials.jpg";
import Vendor4 from "../assets/LandingPageImg/electronics.png";
import Vendor5 from "../assets/LandingPageImg/minimart.jpg";
import Vendor6 from "../assets/LandingPageImg/LusiLiXetica.jpg";
// import Vendor7 from "../assets/LandingPageImg/orrisandoak.jpg";
// import Vendor8 from "../assets/LandingPageImg/clothestore.jpg";

const vendors = [
  { img: Vendor1, name: "SuperMarket", location: "Yaba, Lagos", category: "Groceries", rating: 5, delivery: "15 min" },
  { img: Vendor2, name: "ShopJoses", location: "Unilag, Lagos", category: "Fashion", rating: 5, delivery: "20 min" },
  { img: Vendor3, name: "Kemist Pharmacy", location: "Chemist, Lagos", category: "Pharmacy", rating: 5, delivery: "10 min" },
  { img: Vendor4, name: "Haier Thermocool", location: "Bariga, Lagos", category: "Electronics", rating: 5, delivery: "25 min" },
  { img: Vendor5, name: "Yem Yem", location: "Unilag, Lagos", category: "Groceries", rating: 5, delivery: "12 min" },
  { img: Vendor6, name: "Lusi Lixetica Collection", location: "Unilag, Lagos", category: "Fashion", rating: 5, delivery: "18 min" },
  // { img: Vendor7, name: "ORRIS & OAK", location: "Unilag, Lagos", category: "Fashion", rating: 5, delivery: "22 min" },
  // { img: Vendor8, name: "Standard Fashion", location: "Yaba, Lagos", category: "Clothing", rating: 5, delivery: "16 min" },
];

const FeaturedVendors = () => {
  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
      style={{ marginTop: "-20px" }}
    >
      {/* Simplified Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-0">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2">
            <span className="text-sm font-medium">Premium Verified Vendors</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured{" "}
            <span className="text-green-600">Vendors</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover trusted stores with fast delivery and quality products
          </p>
        </div>
        
        <a
          href="https://shop.lagbuy.com/login"
          className="bg-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 group"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Explore All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Simplified Vendors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vendors.map(({ img, name, location, category, rating, delivery }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Category badge */}
              <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                {category}
              </div>
              
              {/* Delivery time */}
              <div className="absolute top-3 left-3 bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                ⚡ {delivery}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <a
                  href="https://shop.lagbuy.com/login"
                  className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-700"
                >
                  Shop Now
                </a>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">
                {name}
              </h3>

              {/* Rating and Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rating 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300 fill-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 text-sm ml-1">
                    ({rating}.0)
                  </span>
                </div>
                
                <div className="text-green-600 text-sm font-medium">
                  {delivery}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-green-600" />
                {location}
              </div>

              {/* Verified Tag */}
              <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span>Verified Vendor</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simplified Bottom CTA */}
      <div className="flex justify-center mt-12">
        <a
          href="https://shop.lagbuy.com/login"
          className="bg-green-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 group"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Discover 500+ Premium Vendors</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default FeaturedVendors;