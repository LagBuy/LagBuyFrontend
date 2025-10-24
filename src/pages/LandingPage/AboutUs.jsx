import React from 'react'
import aboutUs from "../../assets/LandingPageImg/shoe.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { Zap, Shield, Star, Users, Truck, ShoppingBag } from "lucide-react";

const AboutUs = () => {
  const features = [
    { icon: Zap, text: "Lightning Fast Delivery", color: "text-yellow-400" },
    { icon: Shield, text: "100% Verified Vendors", color: "text-green-400" },
    { icon: Star, text: "Premium Quality Products", color: "text-yellow-300" },
    { icon: Users, text: "Getting to 500,000+ customers", color: "text-green-300" },
    { icon: Truck, text: "Free Delivery Available", color: "text-yellow-400" },
    { icon: ShoppingBag, text: "2M+ Products Available (soon)", color: "text-green-400" }
  ];

  return (
    <section
      className="relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 lg:py-24 overflow-hidden"
      id="AboutUs"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="relative flex flex-col lg:flex-row w-full h-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-green-500/30 backdrop-blur-sm">
        {/* Text Side - Enhanced */}
        <motion.div 
          className="w-full lg:w-1/2 bg-gradient-to-br from-black via-green-900 to-black flex flex-col items-start justify-center p-8 md:p-12 lg:p-16 space-y-6 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Floating Elements */}
          <motion.div
            className="absolute top-6 right-6 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-3 h-3 bg-green-400 rounded-full"
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-md border border-green-500/30 rounded-full px-4 py-2 mb-4"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-semibold">Trusted by 800+ for now </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            Unlock a World of{" "}
            <motion.span
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 bg-[length:200%_auto]"
            >
              Premium Convenience!
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            LagBuy connects{" "}
            <span className="text-green-400 font-semibold">buyers</span>,{" "}
            <span className="text-yellow-400 font-semibold">sellers</span>, and{" "}
            <span className="text-green-300 font-semibold">riders</span> for a seamless shopping experience that feels like magic. Discover the difference!
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-green-500/10 to-yellow-500/10 backdrop-blur-sm border border-green-500/20"
              >
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
                <span className="text-white text-xs font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #10B981, #F59E0B)",
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-yellow-500 text-black font-bold py-4 px-8 rounded-2xl mt-6 shadow-2xl shadow-green-500/25 border-2 border-white/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Get Started Now - It's Free!
            </span>
          </motion.button>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mt-6"
          >
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full border-2 border-black"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-green-400 font-semibold text-sm">4.9/5 Stars</p>
              <p className="text-gray-400 text-xs">from 150+ reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Side - Enhanced */}
        <motion.div 
          className="w-full lg:w-1/2 h-full relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-400 rounded-3xl blur-3xl opacity-20 animate-pulse" />
          
          {/* Main Image */}
          <LazyLoadImage
            src={aboutUs}
            alt="About LagBuy - Premium Shopping Experience"
            className="w-full h-full object-cover relative z-10"
            effect="blur"
            wrapperClassName="w-full h-full"
          />

          {/* Floating Badges */}
          <motion.div
            className="absolute top-6 left-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-2xl shadow-2xl z-20"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [-5, 5, -5]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <span className="font-bold text-sm">⚡ Fast & Reliable</span>
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-2xl shadow-2xl z-20"
            animate={{ 
              y: [10, -10, 10],
              rotate: [5, -5, 5]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <span className="font-bold text-sm">🎯 Premium Quality</span>
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-0" />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;