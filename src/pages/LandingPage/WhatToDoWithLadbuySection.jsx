import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiShoppingCart, FiTruck, FiUsers } from "react-icons/fi";
import { Zap, ArrowRight } from "lucide-react";

const todos = [
  {
    icon: <FiShoppingBag size={48} className="text-green-400" />,
    title: "Buy An Item",
    text: "Shop like an expert! Browse, compare, and buy confidently from premium vendors.",
    bgColor: "bg-gradient-to-br from-black via-green-900 to-black",
    textColor: "text-white",
    btn: "Start Shopping",
    link: "https://shop.lagbuy.com/login",
    accent: "from-green-500 to-yellow-500",
    stats: "2M+ Products"
  },
  {
    icon: <FiShoppingCart size={48} className="text-yellow-400" />,
    title: "Sell An Item",
    text: "Elevate your business! Sell on LagBuy, reach a large audience, list products, and grow sales!",
    bgColor: "bg-gradient-to-br from-black via-green-900 to-black",
    textColor: "text-white",
    btn: "Start Selling",
    link: "https://vendors.lagbuy.com/login",
    accent: "from-yellow-500 to-green-500",
    stats: "500+ Vendors"
  },
  {
    icon: <FiTruck size={48} className="text-green-300" />,
    title: "Deliver An Item",
    text: "Join the ride! Become a LagBuy delivery partner, and start earning today with flexible hours.",
    bgColor: "bg-gradient-to-br from-black via-green-900 to-black",
    textColor: "text-white",
    btn: "Become a rider",
    link: "https://forms.gle/Y5CfpyMEgz5qti7V9",
    accent: "from-green-400 to-yellow-400",
    stats: "15min Avg Delivery"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 }
};

const WhatToDoWithLagbuySection = () => {
  return (
    <section className="relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 lg:py-24 overflow-hidden" style={{ marginTop: "-40px" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-md border border-green-500/30 rounded-full px-4 py-2 mb-6"
        >
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-green-400 text-sm font-semibold">Multiple Ways to Engage</span>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          What You Can Do On{" "}
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
            Lagbuy
          </motion.span>
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-500 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          LagBuy connects{" "}
          <span className="text-green-400 font-semibold">buyers</span>,{" "}
          <span className="text-yellow-400 font-semibold">sellers</span>, and{" "}
          <span className="text-green-300 font-semibold">riders</span> for a seamless ecosystem. Discover your role!
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {todos.map(({ icon, title, text, bgColor, textColor, btn, link, accent, stats }, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
            className={`${bgColor} ${textColor} rounded-3xl p-8 flex flex-col relative overflow-hidden border-2 border-green-500/30 shadow-2xl backdrop-blur-sm min-h-[400px] group`}
          >
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${accent} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />

            {/* Floating Elements */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            />

            {/* Icon */}
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
              {text}
            </p>

            {/* Stats */}
            <div className="mb-6">
              <div className="text-green-400 font-semibold text-sm">
                {stats}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => {
                if (link) {
                  window.location.href = link;
                }
              }}
              className={`mt-auto bg-gradient-to-r ${accent} text-black font-bold py-3 px-6 rounded-2xl shadow-lg border-2 border-white/20 flex items-center gap-2 justify-center group/btn hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                {btn}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://shop.lagbuy.com/login"
          className="bg-gradient-to-r from-green-500 to-yellow-500 text-black font-bold py-4 px-8 rounded-2xl shadow-2xl shadow-green-500/25 border-2 border-white/20 flex items-center gap-3 hover:from-green-400 hover:to-yellow-400 transition-all duration-300 relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default WhatToDoWithLagbuySection;