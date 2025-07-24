import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Beverages from "../../assets/LandingPageImg/Beverages.png";
import Gadgets from "../../assets/LandingPageImg/Gadgets.png";
import HealthandBeauty from "../../assets/LandingPageImg/HealthandBeauty.png";
import Supermarket from "../../assets/LandingPageImg/Supermarket.png";
import Gaming from "../../assets/LandingPageImg/Gaming.png";
import Fashion from "../../assets/LandingPageImg/Fashion.png";
import HomeandOffice from "../../assets/LandingPageImg/HomeandOffice.png";
import ElectronicsandAppliance from "../../assets/LandingPageImg/ElectronicsandAppliance.png";

// === Services images (commented out for now) ===
// import NailTech from "../../assets/LandingPageImg/nailtech.jpg";
// import HairStylist from "../../assets/LandingPageImg/hairstylist.jpg";
// import MakeUp from "../../assets/LandingPageImg/makeup.jpg";
// import Tailoring from "../../assets/LandingPageImg/tailoring.jpg";
// import Electrician from "../../assets/LandingPageImg/electrician.jpg";
// import FashionConsult from "../../assets/LandingPageImg/fashionconsult.jpg";
// import EventBart from "../../assets/LandingPageImg/event.jpg";
// import Caterer from "../../assets/LandingPageImg/caterer.png";
// import Mixology from "../../assets/LandingPageImg/mixology.jpg";

const Vendor = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const clonedItemsRef = useRef(3);

  const products = [
    { image: Beverages, name: "Beverages" },
    { image: Gadgets, name: "Gadgets" },
    { image: HealthandBeauty, name: "Health & Beauty" },
    { image: Supermarket, name: "Supermarket" },
    { image: Gaming, name: "Gaming" },
    { image: Fashion, name: "Fashion" },
    { image: HomeandOffice, name: "Home & Office" },
    { image: ElectronicsandAppliance, name: "Electronics & Appliances" },
  ];

  // === Services array (commented out for now) ===
  /*
  const services = [
    { image: NailTech, name: "Nail Tech" },
    { image: HairStylist, name: "Hair Stylist" },
    { image: Electrician, name: "Electrician" },
    { image: MakeUp, name: "Makeup Artist" },
    { image: Tailoring, name: "Tailoring Services" },
    { image: FashionConsult, name: "Fashion Consulting" },
    { image: EventBart, name: "Event Bartending" },
    { image: Caterer, name: "Catering Services" },
    { image: Mixology, name: "Mixology Classes" },
  ];
  */

  const displayedItems = products; // Only products for now

  const extendedItems = Array(clonedItemsRef.current).fill().flatMap(() => displayedItems);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || displayedItems.length === 0) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const animateScroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= scrollContainer.scrollWidth / clonedItemsRef.current) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [displayedItems]);

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-8 lg:py-16"
      style={{ marginTop: '-60px' }}>
      <div className="mt-2 sm:mt-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Popular Product Categories</h1>
          
          {/* Buttons disabled for now */}
          {/* 
          <div className="h-[38px] flex rounded-md overflow-hidden self-end sm:self-auto">
            <button
              onClick={() => setSelectedType("Products")}
              className={`px-3 sm:px-4 py-2 bg-[#4CAF50] text-white rounded-l-lg text-sm sm:text-base`}
            >
              Products
            </button>
            <button
              onClick={() => setSelectedType("Services")}
              className={`px-3 sm:px-4 py-2 bg-white text-black rounded-r-lg border-t border-b border-r text-sm sm:text-base`}
            >
              Services
            </button>
          </div>
          */}
        </div>

        <div 
          className="mt-4 sm:mt-6 md:mt-7 overflow-x-auto hidden-scrollbar" 
          ref={scrollRef}
        >
          <div className="flex space-x-3 sm:space-x-4 md:space-x-5 min-w-full">
            {extendedItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex flex-col items-center flex-shrink-0"
              >
                <LazyLoadImage
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-lg sm:rounded-xl"
                  effect="blur"
                />
                <h4 className="text-center mt-1 sm:mt-2 text-xs sm:text-sm">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
