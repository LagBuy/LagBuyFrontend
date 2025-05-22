import React, { useState, useEffect } from "react";
import customer_img1 from "../../assets/LandingPageImg/customer_img (1).png";
import customer_img2 from "../../assets/LandingPageImg/customer_img (2).png";
import customer_img3 from "../../assets/LandingPageImg/customer_img (3).png";

const Customers = [
  {
    img: customer_img1,
    text:
      "The customer service here is top-notch, they were so helpful with my order. Highly recommend this site",
    name: "Susan A.",
    rating: 5,
  },
  {
    img: customer_img2,
    text:
      "The discount and promotions on this site are unbeatable. I saved a lot on my recent purchase. Thank you.",
    name: "Michael B.",
    rating: 4,
  },
  {
    img: customer_img3,
    text:
      "Wow the delivery was fast, I got my order in no time. Impressed with the service",
    name: "Solomon A.",
    rating: 5,
  },
];

const Customer = () => {
  const [current, setCurrent] = useState(0);

  // Auto rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Customers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate left and right indices for side images
  const leftIndex = (current + Customers.length - 1) % Customers.length;
  const rightIndex = (current + 1) % Customers.length;

  // Helper to render stars
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-green-500 text-xl`}>
          {i < count ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="mx-auto px-5 py-10 text-center max-w-3xl" 
    style={{ marginTop: '0px' }} // Reduced gap by applying negative margin-top
    >
      <p className="text-green-600 font-semibold mb-2">Testimonials</p>
      <h1 className="text-3xl font-bold mb-8">What Our Customers Say About Us</h1>

      {/* Carousel Images */}
      <div className="flex justify-center items-center gap-8 mb-6">
        {/* Left small image */}
        <img
          src={Customers[leftIndex].img}
          alt={Customers[leftIndex].name}
          className="w-16 h-16 rounded-full opacity-60 cursor-pointer hover:opacity-100 transition"
          onClick={() => setCurrent(leftIndex)}
        />
        {/* Center large image */}
        <img
          src={Customers[current].img}
          alt={Customers[current].name}
          className="w-28 h-28 rounded-full border-4 border-yellow-300 shadow-lg cursor-pointer"
          onClick={() => setCurrent(current)}
        />
        {/* Right small image */}
        <img
          src={Customers[rightIndex].img}
          alt={Customers[rightIndex].name}
          className="w-16 h-16 rounded-full opacity-60 cursor-pointer hover:opacity-100 transition"
          onClick={() => setCurrent(rightIndex)}
        />
      </div>

      {/* Customer Name */}
      <p className="font-semibold text-lg mb-2">{Customers[current].name}</p>

      {/* Star Rating */}
      <div className="flex justify-center mb-4">{renderStars(Customers[current].rating)}</div>

      {/* Testimonial Text */}
      <p className="text-gray-600 text-base px-4">{Customers[current].text}</p>
    </section>
  );
};

export default Customer;
 