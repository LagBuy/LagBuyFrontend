import React from "react";
import { motion } from "framer-motion";
import { Users, Store, Truck, Zap, ArrowRight } from "lucide-react";
import Buyer from "../../assets/LandingPageImg/Buyer.png";
import Seller from "../../assets/LandingPageImg/Seller.png";
import Rider from "../../assets/LandingPageImg/Rider.png";

const benefits = [
  {
    img: Buyer,
    icon: Users,
    title: "Buyers / Customers",
    desc: "Schools, Colleges, Universities, and everyday Shoppers",
    stats: "50,000+ Happy Customers",
    color: "from-green-500 to-yellow-500",
    link: "https://shop.lagbuy.com/login"
  },
  {
    img: Seller,
    icon: Store,
    title: "Sellers / Vendors",
    desc: "SMEs And Large Enterprises.",
    stats: "500+ Active Vendors",
    color: "from-yellow-500 to-green-500",
    link: "https://vendors.lagbuy.com/login"
  },
  {
    img: Rider,
    icon: Truck,
    title: "Riders",
    desc: "Streamlined Administration And Data Management.",
    stats: "15min Avg Delivery",
    color: "from-green-400 to-yellow-400",
    link: "https://riders.lagbuy.com"
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

const BenefitSection = () => {
  return (
    <section
      className="relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 lg:py-24 overflow-hidden"
      style={{ marginTop: "-40px" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
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
          <Users className="w-4 h-4 text-yellow-400" />
          <span className="text-green-400 text-sm font-semibold">Designed for Real People</span>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          People That Benefit From{" "}
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
          className="text-xl text-gray-500 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Designed With Real People In Mind, LagBuy adapts to the way you live and shop. 
          Empower users and partners with reliable and seamless experience.
        </motion.p>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {benefits.map(({ img, icon: Icon, title, desc, stats, color, link }, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="bg-gradient-to-br from-black via-green-900 to-black rounded-3xl overflow-hidden border-2 border-green-500/30 shadow-2xl backdrop-blur-sm group"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 overflow-hidden">
              <motion.img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
              
              {/* Icon Badge */}
              <motion.div 
                className={`absolute top-4 left-4 bg-gradient-to-r ${color} text-black w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>

              {/* Stats Badge */}
              <motion.div 
                className="absolute top-4 right-4 bg-gradient-to-r from-black to-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-green-500/30"
                whileHover={{ scale: 1.1 }}
              >
                {stats}
              </motion.div>

              {/* Hover Overlay */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.a
                  href={link}
                  className={`bg-gradient-to-r ${color} text-black font-bold px-6 py-3 rounded-2xl shadow-2xl border-2 border-white/20 flex items-center gap-2 hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Zap className="w-4 h-4" />
                  Get Started
                </motion.a>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                {title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {desc}
              </p>

              {/* CTA Button */}
              <motion.a
                href={link}
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${color} text-black font-semibold py-2 px-4 rounded-xl text-sm border-2 border-white/20 hover:shadow-lg transition-all duration-300 group/btn`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
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
            <Users className="w-5 h-5" />
            Join Our Growing Community
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default BenefitSection;