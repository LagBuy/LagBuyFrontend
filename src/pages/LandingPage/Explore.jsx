import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import checkout1 from "../../assets/LandingPageImg/checkout1.png";
import checkout2 from "../../assets/LandingPageImg/checkout2.png";
import checkout3 from "../../assets/LandingPageImg/checkout3.png";
import checkout4 from "../../assets/LandingPageImg/checkout4.png";
import checkout6 from "../../assets/LandingPageImg/checkout6.png";
import checkout7 from "../../assets/LandingPageImg/checkout7.png";
import checkout8 from "../../assets/LandingPageImg/checkout8.png";
import checkOut from "../../assets/LandingPageImg/explore (4).png";
import bestSelling from "../../assets/LandingPageImg/explore (3).png";
import industryTrend from "../../assets/LandingPageImg/explore (2).png";
import upComing from "../../assets/LandingPageImg/explore (1).png";
import { ExploreModal } from "./Modal"; // Import the modal component

const Explore = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Slider settings for the carousel
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, 
  };

  const explores = [
    {
      sliderImages: [
        checkOut,
        checkout1,
        checkout2,
        checkout3,
        checkout4,
        checkout6,
        checkout7,
        checkout8,
      ],
      title: "CHECK OUT ON NEW ARRIVALS",
      text: "Showcasing the latest products added to your inventory.",
      comment: 3,
      like: 13,
    },
    {
      image: bestSelling,
      title: "BEST SELLING",
      text: "Highlight of the most popular products.",
      comment: 3,
      like: 3,
    },
    {
      image: industryTrend,
      title: "INDUSTRY TREND",
      text: "Stay updated with the trending products in the industry.",
      comment: 3,
      like: 3,
    },
    {
      image: upComing,
      title: "UPCOMING SALES",
      text: "Teasing upcoming promotions or sales events to generate excitement.",
      comment: 3,
      like: 12,
    },
  ];

  return (
    <section className="container mx-auto px-5 py-14">
      <div className="flex items-center justify-between mb-8">
        <p className="text-sm font-bold lg:text-xl lg:font-semibold">
          EXPLORE OUR LATEST BLOG
        </p>
        <div className="flex items-center justify-center hover:underline cursor-pointer">
          <a href="#" className="text-xs lg:text-base" onClick={openModal}>
            See more
          </a>
          <MdOutlineExpandMore className="-rotate-90 text-center" size={25} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-9 mt-10">
        {explores.map((explore, index) => (
          <div
            key={index}
            className="shadow-sm bg-white rounded-lg overflow-hidden sm:w-[30rem] md:w-full"
          >
            {/* Slider for "CHECK OUT ON NEW ARRIVALS" */}
            {explore.title === "CHECK OUT ON NEW ARRIVALS" ? (
              <Slider {...sliderSettings}>
                {explore.sliderImages.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={img}
                      alt={`${explore.title} ${imgIndex + 1}`}
                      className="w-full h-72 object-cover md:h-80 mb-5 rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={explore.image}
                alt={explore.title}
                className="w-full h-72 object-cover md:h-80 mb-5 rounded-lg"
              />
            )}

            <div className="p-4 space-y-3">
              <div className="flex justify-between text-xs lg:text-sm">
                <div className="flex items-center gap-2">
                  <p>{explore.comment} Comments</p>
                  <FaRegComment />
                </div>
                <div className="flex items-center gap-2">
                  <p>{explore.like} Likes</p>
                  <FaRegHeart />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-base font-semibold">{explore.title}</p>
                <p className="text-gray-600 text-sm">{explore.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ExploreModal isOpen={modalIsOpen} onClose={closeModal} />
    </section>
  );
};

export default Explore;
