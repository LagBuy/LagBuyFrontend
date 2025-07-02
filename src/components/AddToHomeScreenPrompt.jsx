import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        const interval = setInterval(showToastNow, 7 * 60 * 1000);
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
          console.log(" User installed LagBuy");
          localStorage.setItem("appInstalled", "true");
        } else {
          console.log(" User dismissed the install prompt");
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
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="fixed bottom-5 right-5 max-w-xs w-full min-h-[90px] bg-[#1A362B] text-white rounded-xl shadow-lg px-4 py-3 text-sm z-50 md:hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-xs hover:text-gray-300"
            aria-label="Close"
          >
            ✖
          </button>

          {/* iOS Safari */}
          {isIos ? (
            <>
              <p className="font-semibold mb-1 pr-5">
                📲 Add <strong>LagBuy</strong> to your Home Screen
              </p>
              <p className="text-xs pr-5 flex items-center gap-2">
                Tap <strong>Share</strong>
                <span className="animate-bounce">
                  <ShareIcon />
                </span>
                then tap <strong>“Add to Home Screen”</strong>
              </p>
            </>
          ) : (
            <>
              {deferredPrompt ? (
                <>
                  <p className="font-semibold mb-2 pr-5">
                     Install <strong>LagBuy</strong> for faster access
                  </p>
                  <button
                    onClick={handleInstallClick}
                    className="bg-[#94BD0A] text-black font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#7ea40a]"
                  >
                    Install App
                  </button>
                </>
              ) : (
                <>
                  <p className="font-semibold mb-1 pr-5">
                    📦 Add <strong>LagBuy</strong> to your Home Screen
                  </p>
                  <p className="text-xs pr-5">
                    Use your browser menu and tap{" "}
                    <strong>“Add to Home Screen”</strong>
                  </p>
                </>
              )}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Share icon
const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="white"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16V4m0 0L8.25 7.75M12 4l3.75 3.75M20.25 12v6.75a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75V12"
    />
  </svg>
);
