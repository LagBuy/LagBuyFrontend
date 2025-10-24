import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share2, Smartphone, Zap } from "lucide-react";

export default function AddToHomeScreenPrompt() {
  const [showToast, setShowToast] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if already installed
  useEffect(() => {
    const isAlreadyInstalled =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    if (isAlreadyInstalled) {
      localStorage.setItem("appInstalled", "true");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("appInstalled") === "true") return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    const isiOSDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    if (window.innerWidth <= 768 && !isStandalone) {
      setIsMobile(true);

      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
      });

      if (isiOSDevice && isSafari) {
        setIsIos(true);
      }

      let toastCount = 0;

      const showToastNow = () => {
        if (toastCount >= 6) return;
        setShowToast(true);
        toastCount++;
        setTimeout(() => setShowToast(false), 30 * 1000);
      };

      const initial = setTimeout(() => {
        showToastNow();
        const interval = setInterval(showToastNow, 4 * 60 * 1000);
        return () => clearInterval(interval);
      }, 60 * 1000); // Show after 1 min

      return () => clearTimeout(initial);
    }
  }, []);

  const handleClose = () => setShowToast(false);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User installed LagBuy");
          localStorage.setItem("appInstalled", "true");
        } else {
          console.log("User dismissed the install prompt");
        }

        setShowToast(false);
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <AnimatePresence>
      {isMobile && showToast && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25 
          }}
          className="fixed bottom-6 right-6 max-w-sm w-full bg-gradient-to-br from-gray-900 via-[#1A362B] to-gray-900 text-white rounded-2xl shadow-2xl border-2 border-green-500/30 backdrop-blur-sm z-50 md:hidden overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-2xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-2xl opacity-10" />
          </div>

          {/* Gradient Top Bar */}
          <div className="w-full h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400" />

          <div className="p-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <motion.div
                  className="p-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-xl border border-green-500/30"
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <Smartphone className="w-5 h-5 text-green-400" />
                </motion.div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-semibold">
                      Install App
                    </span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">
                    Get LagBuy App
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="p-1 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="space-y-3">
              {/* iOS Safari */}
              {isIos ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-gray-300 text-sm mb-3">
                    Add <strong className="text-green-400">LagBuy</strong> to your Home Screen for faster access and better experience.
                  </p>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-green-500/20">
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    >
                      <Share2 className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                    <div className="text-xs text-gray-300">
                      Tap <strong className="text-white">Share</strong> then{" "}
                      <strong className="text-green-400">"Add to Home Screen"</strong>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <>
                  {deferredPrompt ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-gray-300 text-sm mb-4">
                        Install <strong className="text-green-400">LagBuy</strong> for faster access, offline support, and better performance.
                      </p>
                      <motion.button
                        onClick={handleInstallClick}
                        className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg shadow-green-500/25 border-2 border-white/20 relative overflow-hidden group"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Install App
                        </span>
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-gray-300 text-sm mb-3">
                        Add <strong className="text-green-400">LagBuy</strong> to your Home Screen for quick access and better experience.
                      </p>
                      <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-yellow-500/20">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <div className="text-xs text-gray-300">
                          Use browser menu and tap{" "}
                          <strong className="text-green-400">"Add to Home Screen"</strong>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              )}

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-700"
              >
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-400 rounded-full" />
                  Faster Loading
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                  Offline Support
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-400 rounded-full" />
                  Push Notifications
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}