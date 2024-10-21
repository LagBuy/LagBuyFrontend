import React,{useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Hero1 from "../../assets/LandingPageImg/hero-img1.png";
import Hero2 from "../../assets/LandingPageImg/hero-img2.png";;
import Hero3 from "../../assets/LandingPageImg/hero-img3.png";
import Hero4 from "../../assets/LandingPageImg/hero-img4.png";
import Hero5 from "../../assets/LandingPageImg/hero-img5.png";
import Hero6 from "../../assets/LandingPageImg/hero-img6.png";
import Hero7 from "../../assets/LandingPageImg/hero-img7.png";
import Hero8 from "../../assets/LandingPageImg/hero-img8.png";
import Hero9 from "../../assets/LandingPageImg/hero-img9.png";
import Hero10 from "../../assets/LandingPageImg/hero-img10.png";
import Hero11 from "../../assets/LandingPageImg/hero-img11.png";
import Hero12 from "../../assets/LandingPageImg/hero-img12.png";
import Hero13 from "../../assets/LandingPageImg/hero-img13.png";
import Hero14 from "../../assets/LandingPageImg/hero-img14.png";
import Hero15 from "../../assets/LandingPageImg/hero-img15.png";


const HeroSection = () => {

  const images = [
    { img: Hero1 },
    { img: Hero2 },
    { img: Hero3 },
    { img: Hero4 },
    { img: Hero5 },
    { img: Hero6 },
    { img: Hero7 },
    { img: Hero8 },
    { img: Hero9 },
    { img: Hero10 },
    { img: Hero11 },
    { img: Hero12 },
    { img: Hero13 },
    { img: Hero14 },
    { img: Hero15 },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="container mx-auto flex flex-col gap-11 md:items-center px-5 pt-32 justify-between lg:gap-16 md:flex-row">

      <div className="w-full md:w-1/2  text-center space-y-4 lg:space-y-9">
        <h1 className="text-lg xl:text-3xl font-bold lg:w-5/6  ">
          <span className="text-[#1A362B]">
            {" "}
            Bringing satisfaction and happiness,
          </span>{" "}
          one delivery at a time.
        </h1>
        <p className="text-base lg:text-xl font-light text-center ">
          Discover the convenience and speed of our delivery process. Get your
          items delivered right to your door step in no time.
        </p>
        <button className="py-3 px-20 md:px-24 text-base lg:text-lg font-medium rounded-full bg-[#1A362B] text-[#FCE600] hover:bg-[#FCE600] hover:text-[#1A362B] focus:outline-none disabled:opacity-50 transition-colors duration-300">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="">
              <img
                src={image.img}
                alt={`Slide ${index}`}
                className="w-full lg:h-[35rem] object-cover  rounded-t-full   lg:p-8"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
