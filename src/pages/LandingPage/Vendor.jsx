import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import vendorImg1 from "../../assets/LandingPageImg/vendor (1).png";
import vendorImg2 from "../../assets/LandingPageImg/vendor (2).png";
import vendorImg3 from "../../assets/LandingPageImg/vendor (3).png";
import vendorImg4 from "../../assets/LandingPageImg/vendor (4).png";
import vendorImg5 from "../../assets/LandingPageImg/vendor (5).png";
import vendorImg6 from "../../assets/LandingPageImg/vendor (6).jpg";
import vendorImg7 from "../../assets/LandingPageImg/vendor (7).jpg";
import vendorImg8 from "../../assets/LandingPageImg/vendor (8).jpg";
import vendorImg9 from "../../assets/LandingPageImg/vendor (9).jpg";
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
import electronicImg6 from "../../assets/LandingPageImg/electronic6.jpg";
import electronicImg7 from "../../assets/LandingPageImg/electronic7.jpg";
import beautyImg1 from '../../assets/LandingPageImg/beauty1.png'
import beautyImg2 from "../../assets/LandingPageImg/beauty2.png";
import beautyImg3 from "../../assets/LandingPageImg/beauty3.jpg";
import beautyImg4 from "../../assets/LandingPageImg/beauty4.jpg";
import beautyImg5 from "../../assets/LandingPageImg/beauty5.jpg";
import beautyImg6 from "../../assets/LandingPageImg/beauty6.jpg";
import beautyImg7 from "../../assets/LandingPageImg/beauty7.jpg";
import beautyImg8 from "../../assets/LandingPageImg/beauty8.jpg";
import men1 from '../../assets/LandingPageImg/men1.jpg'
import men2 from "../../assets/LandingPageImg/men2.jpg";
import men3 from "../../assets/LandingPageImg/men3.jpg";
import men4 from "../../assets/LandingPageImg/men4.jpg";
import men5 from "../../assets/LandingPageImg/men5.jpg";
import men6 from "../../assets/LandingPageImg/men6.jpg";
import men7 from "../../assets/LandingPageImg/men7.jpg";
import men8 from "../../assets/LandingPageImg/men8.jpg";
import women1 from '../../assets/LandingPageImg/women1.jpg'
import women2 from "../../assets/LandingPageImg/women2.jpg";
import women3 from "../../assets/LandingPageImg/women3.jpg";
import women4 from "../../assets/LandingPageImg/women4.jpg";
import women5 from "../../assets/LandingPageImg/women5.jpg";
import women6 from "../../assets/LandingPageImg/women6.jpg";
import women7 from '../../assets/LandingPageImg/women7.jpg';
import women8 from "../../assets/LandingPageImg/women8.jpg";
import jewery1 from '../../assets/LandingPageImg/jewery1.jpg'
import jewery2 from "../../assets/LandingPageImg/jewery2.jpg";
import jewery3 from "../../assets/LandingPageImg/jewery3.jpg";
import jewery4 from "../../assets/LandingPageImg/jewery4.jpg";
import jewery5 from "../../assets/LandingPageImg/jewery5.jpg";
import jewery6 from "../../assets/LandingPageImg/jewery6.jpg";
import jewery7 from "../../assets/LandingPageImg/jewery7.jpg";
import jewery8 from "../../assets/LandingPageImg/jewery8.jpg";
import footwear1 from '../../assets/LandingPageImg/footwear1.jpg'
import footwear2 from "../../assets/LandingPageImg/footwear2.jpg";
import footwear3 from "../../assets/LandingPageImg/footwear3.jpg";
import footwear4 from "../../assets/LandingPageImg/footwear4.jpg";
import footwear5 from "../../assets/LandingPageImg/footwear5.jpg";
import footwear6 from "../../assets/LandingPageImg/footwear6.jpg";
import footwear7 from "../../assets/LandingPageImg/footwear7.jpg";
import footwear8 from "../../assets/LandingPageImg/footwear8.jpg";

const Vendor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


const vendors = [
  { img: vendorImg1 },
  { img: vendorImg5 },
  { img: vendorImg4 },
  { img: vendorImg3 },
  { img: vendorImg5 },
  { img: vendorImg2 },
  { img: vendorImg6 },
  { img: vendorImg7 },
  { img: vendorImg8 },
  { img: vendorImg9 },
  { img: vendorImg7 },
  { img: vendorImg3 },
  { img: vendorImg9 },
  { img: vendorImg2 },
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
        electronicImg7,
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
    {
      image: [men1, men2, men3, men4, men5, men6, men7, men8],
      name: "Men Wears",
    },
    {
      image: [women1, women2, women3, women4, women5, women6, women7, women8],
      name: "women Wears",
    },
    {
      image: [
        jewery1,
        jewery2,
        jewery3,
        jewery4,
        jewery5,
        jewery6,
        jewery7,
        jewery8,
      ],
      name: "jewery",
    },
    {
      image: [
        footwear1,
        footwear2,
        footwear3,
        footwear4,
        footwear5,
        footwear6,
        footwear7,
        footwear8,
      ],
      name: "footwear",
    },
  ];

  
  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === vendors.length ? 1 : prevPage + 1
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage === 1 ? vendors.length : prevPage - 1
    );
  };

useEffect(() => {
  if (items.length > 0 && items[0].image) {
    // Add defensive check
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items[0].image.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }
}, [items]);


  return (
    <section className="container mx-auto px-4 py-14 ">
      <div>
              <h1 className="text-xl font-semibold text-center"> Vendors on lagbuy</h1>
      <h4 className="text-center mt-2 text-lg">
        your favourite vendors are on lagbuy
      </h4>
      <div className="flex items-center justify-center mt-6 overflow-x-scroll">
        <div className="flex space-x-4 mx-4">
          {vendors.slice(currentPage - 1, currentPage + 5).map((vendor) => (
            <div
              key={vendor.id}
              className="w-16 h-16 flex items-center justify-center bg-white bordershadow"
            >
              <img
                src={vendor.img}
                alt={`Vendor ${vendor.id}`}
                className="w-16 h-16  rounded-full "
              />
            </div>
          ))}
        </div>
      </div>
      {/* Pagination and Navigation Controls */}
      <div className="mt-4 flex items-center justify-center text-gray-600">
        <button
          onClick={handlePrevious}
          className="p-2 text-gray-500 hover:text-gray-800"
        >
          <FaChevronLeft size={24} />
        </button>
        <div className="mx-4">
          <span>{currentPage}</span> / <span>{vendors.length}</span>
        </div>
        <button
          onClick={handleNext}
          className="p-2 text-gray-500 hover:text-gray-800"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-semibold">Explore Popular Categories</h1>
        <div className="mt-7">
          <div className="grid grid-cols-4 lg:grid-cols-4 gap-5 min-w-full">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Rotate images based on currentIndex */}
                <img
                  src={item.image[currentIndex]}
                  alt={`${item.name} ${currentIndex + 1}`}
                  className="w-24 h-24 lg:w-64 lg:h-64 rounded-lg"
                />
                <h4 className="text-center mt-2">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
