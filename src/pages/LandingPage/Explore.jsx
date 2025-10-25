import Riders from "../../assets/LandingPageImg/rider.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { Truck, Clock, Shield, MapPin, Zap, Users } from "lucide-react";

const DeliveryServices = () => {
  const features = [
    { icon: Clock, text: "Fast Delivery", color: "text-yellow-400", bg: "from-yellow-400/20 to-yellow-500/20" },
    { icon: Shield, text: "Safe & Reliable", color: "text-green-400", bg: "from-green-400/20 to-green-500/20" },
    { icon: MapPin, text: "Live Tracking", color: "text-blue-400", bg: "from-blue-400/20 to-blue-500/20" },
    { icon: Truck, text: "Trusted Riders", color: "text-green-400", bg: "from-green-400/20 to-green-500/20" }
  ];

  return (
    <section
      className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 lg:py-16 overflow-hidden"
      id="Company"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-5 animate-pulse delay-1000" />
      </div>

      <div className="relative flex flex-col lg:flex-row w-full max-w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 border-green-500/20 backdrop-blur-sm bg-white">
        {/* Text Side - Enhanced */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start justify-center p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-6 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-md border border-green-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-600 text-xs sm:text-sm font-semibold">Fast Delivery Network</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
          >
            Fast & Reliable{" "}
            <motion.span
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 bg-[length:200%_auto]"
            >
              Delivery Services
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            LagBuy offers smooth, same-day delivery services, bridging the gap between{" "}
            <span className="text-green-500 font-semibold">buyers</span>,{" "}
            <span className="text-yellow-500 font-semibold">sellers</span>, and{" "}
            <span className="text-green-400 font-semibold">professional riders</span> for a seamless experience.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 sm:gap-3 w-full mt-4 sm:mt-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500/10 to-yellow-500/10 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.02,
                  y: -2
                }}
              >
                <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r ${feature.bg} backdrop-blur-sm`}>
                  <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                </div>
                <span className="text-gray-800 text-xs sm:text-sm font-semibold group-hover:text-gray-900 transition-colors duration-300">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-between gap-4 sm:gap-6 w-full mt-4 sm:mt-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500/5 to-yellow-500/5 backdrop-blur-sm border border-green-500/10"
          >
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-green-600">30min</div>
              <div className="text-xs text-gray-500 font-medium">Avg. Delivery</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-500">75%</div>
              <div className="text-xs text-gray-500 font-medium">On-time Rate</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-green-600">20+</div>
              <div className="text-xs text-gray-500 font-medium">Riders</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="https://forms.gle/Y5CfpyMEgz5qti7V9"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl mt-4 shadow-2xl shadow-green-500/25 border-2 border-white/20 relative overflow-hidden group cursor-pointer text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 justify-center">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
              Become a Rider Today!
            </span>
          </motion.a>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 sm:gap-4 w-full mt-4 sm:mt-6"
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full border-2 border-white shadow-lg"
                />
              ))}
            </div>
            <div className="text-left flex-1">
              <p className="text-green-600 font-semibold text-xs sm:text-sm">4.6/5 Rider Rating</p>
              <p className="text-gray-500 text-xs">from 112+ reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Side - Enhanced */}
        <motion.div 
          className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl lg:rounded-3xl blur-3xl opacity-10 animate-pulse" />
          
          {/* Main Image */}
          <LazyLoadImage
            src={Riders}
            alt="LagBuy Delivery Services - Professional Riders Network"
            className="w-full h-full object-cover relative z-10"
            effect="blur"
            wrapperClassName="w-full h-full"
          />

          {/* Floating Badges - Fixed for mobile */}
          <motion.div
            className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl shadow-2xl z-20 backdrop-blur-sm"
            animate={{ 
              y: [-3, 3, -3],
              rotate: [-2, 2, -2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <span className="font-bold text-xs sm:text-sm flex items-center gap-1">
              <Zap className="w-2 h-2 sm:w-3 sm:h-3" />
              Fast Delivery
            </span>
          </motion.div>

          <motion.div
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 py-1 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl shadow-2xl z-20 backdrop-blur-sm"
            animate={{ 
              y: [3, -3, 3],
              rotate: [2, -2, 2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <span className="font-bold text-xs sm:text-sm flex items-center gap-1">
              <Users className="w-2 h-2 sm:w-3 sm:h-3" />
              20+ Riders
            </span>
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent z-0" />
        </motion.div>
      </div>
    </section>
  );
}

export default DeliveryServices;