import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import deliveryTruck from "../../assets/LandingPageImg/delivery-truck.png";
import naira from "../../assets/LandingPageImg/naira.png";
import house from "../../assets/LandingPageImg/house.png";
import location from "../../assets/LandingPageImg/location.png";

const Process = () => {
  const Processes = [
    {
      img: deliveryTruck,
      title: "Make Payment",
      text: "Simplify your payment process with our fast, secure, and easy options.",
    },
    {
      img: naira,
      title: "Receive Delivery",
      text: "Bring the essentials to your doorstep with our delivery service.",
    },
    {
      img: house,
      title: "Choose Essentials",
      text: "LagBuy makes it easy to find and shop your daily necessities—explore and select yours now.",
    },
    {
      img: location,
      title: "Select Delivery Location",
      text: "Choose the delivery location where your essentials will be delivered.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-5 py-16">
      <h1 className="text-center font-semibold text-2xl mb-8">
        How Our Process Works
      </h1>
      <Slider {...settings} className=" ">
        {Processes.map((process, index) => (
          <div
            key={index}
            className="min-w-[200px] w-64 rounded-lg p-6"
          >
            <div className="flex justify-center mb-6">
              <img
                src={process.img}
                alt={process.title}
                className="w-24 h-24 object-contain"
              />
            </div>
            <p className="text-center font-semibold text-lg mb-2">
              {process.title}
            </p>
            <p className="text-center text-[#847D7D] text-base">{process.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Process;
