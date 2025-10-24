import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";
import { X, Clock, FileText, Smartphone, Zap } from "lucide-react";
Modal.setAppElement("#root");

const ModalOverlay = ({ children, isOpen, onClose, maxWidth = "400px" }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1000,
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      },
      content: {
        position: "relative",
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto",
        margin: "0",
        padding: "0",
        width: "90%",
        maxWidth: maxWidth,
        height: "auto",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        overflow: "visible",
      },
    }}
  >
    {children}
  </Modal>
);

export const ExploreModal = ({ isOpen, onClose }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} maxWidth="440px">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25 
        }}
        className="bg-gradient-to-br from-gray-900 via-[#1A362B] to-gray-900 rounded-3xl shadow-2xl border-2 border-green-500/30 backdrop-blur-sm overflow-hidden relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-10" />
        </div>

        {/* Gradient Top Bar */}
        <div className="w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-xl border border-green-500/30"
                animate={{ 
                  rotate: [0, 5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <FileText className="w-5 h-5 text-green-400" />
              </motion.div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Blog & Resources</h3>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10 group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4 text-white group-hover:text-yellow-400 transition-colors" />
            </motion.button>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="flex justify-center"
            >
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-2xl border border-green-500/20">
                <Clock className="w-12 h-12 text-yellow-400" />
              </div>
            </motion.div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Blog Post Coming Soon
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                We're crafting valuable content and documenting our journey to help you make the most of LagBuy. Stay tuned for insightful articles and updates!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: Zap, text: "Shopping Tips", color: "text-yellow-400" },
                { icon: FileText, text: "Vendor Guides", color: "text-green-400" },
                { icon: Clock, text: "Delivery Updates", color: "text-yellow-400" },
                { icon: Smartphone, text: "App Features", color: "text-green-400" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-white text-xs font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4 border-t border-gray-700"
            >
              <p className="text-green-400 text-sm font-medium">
                Check back soon for exciting content!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};

export const FooterModal = ({ isOpen, onClose }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} maxWidth="380px">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25 
        }}
        className="bg-gradient-to-br from-gray-900 via-[#1A362B] to-gray-900 rounded-3xl shadow-2xl border-2 border-green-500/30 backdrop-blur-sm overflow-hidden relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-10" />
        </div>

        {/* Gradient Top Bar */}
        <div className="w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-xl border border-green-500/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Smartphone className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span className="text-yellow-400 text-xs font-semibold">
                    Mobile App
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Download App</h3>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10 group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4 text-white group-hover:text-yellow-400 transition-colors" />
            </motion.button>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-4"
          >
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="flex justify-center"
            >
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-2xl border border-yellow-500/20">
                <ComingSoon className="w-12 h-12 text-yellow-400" />
              </div>
            </motion.div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Mobile App Coming Soon
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                We're working hard to bring you the best mobile experience. The LagBuy app will be available on both iOS and Android soon!
              </p>
            </div>

            {/* App Features */}
            <div className="space-y-2">
              {[
                { icon: Zap, text: "Faster Performance", color: "text-yellow-400" },
                { icon: Clock, text: "Real-time Notifications", color: "text-green-400" },
                { icon: Smartphone, text: "Optimized Mobile Experience", color: "text-yellow-400" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-white text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Notification CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4 border-t border-gray-700"
            >
              <p className="text-green-400 text-sm font-medium">
                Stay tuned for the launch announcement!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};