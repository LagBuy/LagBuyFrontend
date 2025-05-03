import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LashTech from "../../assets/LandingPageImg/lashtech.jpg";
import NailTech from "../../assets/LandingPageImg/nailtech.jpg";
import HairStylist from "../../assets/LandingPageImg/hairstylist.jpg";
import MakeUp from "../../assets/LandingPageImg/makeup.jpg";
import Tailoring from "../../assets/LandingPageImg/tailoring.jpg";
import FashionConsult from "../../assets/LandingPageImg/fashionconsult.jpg";
import EventBart from "../../assets/LandingPageImg/event.jpg";
import Caterer from "../../assets/LandingPageImg/caterer.png";
import Mixology from "../../assets/LandingPageImg/mixology.jpg";
import WigMaking from "../../assets/LandingPageImg/wigmaking.jpg";
import HennaArtist from "../../assets/LandingPageImg/HennaArtist.jpg";
import Photography from "../../assets/LandingPageImg/FashionPhotography.jpg";
import Electrician from "../../assets/LandingPageImg/electrician.jpg";
import Mechanic from "../../assets/LandingPageImg/mechanic.jpg";




const Service = () => {
  const scrollRef = useRef(null);
  const imageWidthRef = useRef(225);

  const services = [
    { image: LashTech, name: "Lash Technician" },
    { image: NailTech, name: "Nail Tech" },
    { image: HairStylist, name: "Hair Stylist" },
    { image: Electrician, name: "Electrician" },
    { image: MakeUp, name: "Makeup Artist" },
    { image: Tailoring, name: "Tailoring Services" },
    { image: FashionConsult, name: "Fashion Consulting" },
    { image: EventBart, name: "Event Bartending" },
    { image: Caterer, name: "Catering Services" },
    { image: Mixology, name: "Mixology Classes" },
    { image: Mechanic, name: "Mechanic" },
    { image: WigMaking, name: "Wig Making" },
    { image: HennaArtist, name: "Henna Artist" },
    { image: Photography, name: "Fashion Photography" },
  ];

  useEffect(() => {
    const updateImageWidth = () => {
      const screenWidth = window.innerWidth;
      imageWidthRef.current = screenWidth < 640 ? 225 : 265;
    };

    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);
    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          scrollRef.current.scrollBy({
            left: imageWidthRef.current,
            behavior: "smooth",
          });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="mx-auto py-14 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26"
      style={{ marginTop: "-60px" }}
    >
      <div className="mt-4">
        <h1 className="text-xl font-semibold px-4 sm:px-0">Popular Services</h1>

        <div className="mt-7 overflow-x-auto hidden-scrollbar" ref={scrollRef}>
          <div className="flex space-x-4 min-w-full pl-4 sm:pl-0">
            {services.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center flex-shrink-0 rounded-lg shadow-lg overflow-hidden"
              >
                <LazyLoadImage
                  src={item.image}
                  alt={item.name}
                  className="w-[225px] h-[280px] sm:w-[265px] sm:h-[320px] object-cover rounded-lg"
                  effect="blur"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[rgba(34,197,94,0.5)] to-transparent pointer-events-none" />

                <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center font-poppins text-base sm:text-lg font-semibold text-white">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
