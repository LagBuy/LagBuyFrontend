import React, { useState, useEffect } from "react";
import vendorImg1 from "../../assets/LandingPageImg/vendor (1).png";
import vendorImg2 from "../../assets/LandingPageImg/vendor (2).png";
import vendorImg3 from "../../assets/LandingPageImg/vendor (3).png";
import vendorImg4 from "../../assets/LandingPageImg/vendor (4).png";
import vendorImg5 from "../../assets/LandingPageImg/vendor (5).png";
import FashionImg1 from '../../assets/LandingPageImg/fashion1.jpg'
import fashionImg2 from '../../assets/LandingPageImg/fashion2.jpg'
import fashionImg3 from "../../assets/LandingPageImg/fashion3.jpg";
import fashionImg4 from "../../assets/LandingPageImg/fashion4.jpg";
import fashionImg5 from "../../assets/LandingPageImg/fashion5.jpg";
import fashionImg6 from "../../assets/LandingPageImg/fashion6.jpg";
import fashionImg7 from "../../assets/LandingPageImg/fashion7.jpg";
import fashionImg8 from "../../assets/LandingPageImg/fashion8.jpg";
import beverageImg1 from "../../assets/LandingPageImg/beverage1.jpg";
import beverageImg2 from "../../assets/LandingPageImg/beverage2.jpg";
import beverageImg3 from "../../assets/LandingPageImg/beverage3.jpg";
import beverageImg4 from "../../assets/LandingPageImg/beverage4.jpg";
import beverageImg5 from "../../assets/LandingPageImg/beverage5.jpg";
import beverageImg6 from "../../assets/LandingPageImg/beverage6.jpg";
import beverageImg7 from "../../assets/LandingPageImg/beverage7.jpg";
import beverageImg8 from "../../assets/LandingPageImg/beverage8.jpg";
import electronicImg1 from '../../assets/LandingPageImg/electronic1.jpg'
import electronicImg2 from "../../assets/LandingPageImg/electronic2.jpg";
import electronicImg3 from "../../assets/LandingPageImg/electronic3.jpg";
import electronicImg4 from "../../assets/LandingPageImg/electronic4.jpg";
import electronicImg5 from "../../assets/LandingPageImg/electronic5.jpg";
import electronicImg6 from "../../assets/LandingPageImg/electronic1.jpg";
import beautyImg1 from '../../assets/LandingPageImg/beauty1.jpg'
import beautyImg2 from "../../assets/LandingPageImg/beauty2.jpg";
import beautyImg3 from "../../assets/LandingPageImg/beauty3.jpg";
import beautyImg4 from "../../assets/LandingPageImg/beauty4.jpg";
import beautyImg5 from "../../assets/LandingPageImg/beauty5.jpg";
import beautyImg6 from "../../assets/LandingPageImg/beauty6.jpg";
import beautyImg7 from "../../assets/LandingPageImg/beauty7.jpg";
import beautyImg8 from "../../assets/LandingPageImg/beauty8.jpg";


const Vendor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Vendors = [
    { img: vendorImg1, name: "Bestronics" },
    { img: vendorImg5, name: "Nike Lagos" },
    { img: vendorImg4, name: "Next Store" },
    { img: vendorImg3, name: "KiddyZone" },
    { img: vendorImg2, name: "HealthPlus" },
  ];

  const items = [
    {
      image: [
        FashionImg1,
        fashionImg6,
        fashionImg2,
        fashionImg4,
        fashionImg7,
        fashionImg3,
        fashionImg5,
        fashionImg8,
      ],
      name: "Fashion",
    },
    {
      image: [
        beverageImg1,
        beverageImg3,
        beverageImg6,
        beverageImg2,
        beverageImg8,
        beverageImg4,
        beverageImg7,
        beverageImg5,
      ],
      name: "Beverages",
    },
    {
      image: [
        electronicImg6,
        electronicImg1,
        electronicImg2,
        electronicImg5,
        electronicImg3,
        electronicImg4,
        electronicImg6,
        electronicImg2,
      ],
      name: "Electronics",
    },
    {
      image: [
        beautyImg1,
        beautyImg4,
        beautyImg8,
        beautyImg3,
        beautyImg2,
        beautyImg5,
        beautyImg7,
        beautyImg6,
      ],
      name: "Beauty deals",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items[0].image.length);
    }, 2000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items]);

  return (
    <section className="container mx-auto px-4 py-14">
      <h1 className="text-2xl font-semibold">Featured Vendors</h1>
      <div className="mt-7 overflow-x-auto">
        <div className="flex items-center lg:justify-between gap-8 min-w-full">
          {Vendors.map((vendor, index) => (
            <div key={index} className="flex-shrink-0 w-40">
              <img src={vendor.img} alt={vendor.name} className="mb-5" />
              <h4 className="text-center">{vendor.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold">Explore Popular Categories</h1>
        <div className="mt-7">
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 justify-between min-w-full">
            {items.map((item, index) => (
              <div key={index} className="flex">
                <h4 className="bg-[#FFF9B7] flex items-center p-5 rounded-l-[3.5rem]">
                  {item.name}
                </h4>
                {/* Rotate images based on currentIndex */}
                <img
                  src={item.image[currentIndex]}
                  alt={`${item.name} ${currentIndex + 1}`}
                  className=" w-52 h-64 rounded-r-[3.5rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
