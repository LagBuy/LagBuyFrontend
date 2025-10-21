import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-00T8WELQZJ", {
        page_path: location.pathname,
      });
    }
  }, [location]);
}

export default usePageTracking;
