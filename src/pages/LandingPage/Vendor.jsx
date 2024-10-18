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
import electronicImg6 from "../../assets/LandingPageImg/electronic1.jpg";
import beautyImg1 from '../../assets/LandingPageImg/beauty1.png'
import beautyImg2 from "../../assets/LandingPageImg/beauty2.png";
import beautyImg3 from "../../assets/LandingPageImg/beauty3.jpg";
import beautyImg4 from "../../assets/LandingPageImg/beauty4.jpg";
import beautyImg5 from "../../assets/LandingPageImg/beauty5.jpg";
import beautyImg6 from "../../assets/LandingPageImg/beauty6.jpg";
import beautyImg7 from "../../assets/LandingPageImg/beauty7.jpg";
import beautyImg8 from "../../assets/LandingPageImg/beauty8.jpg";


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
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items[0].image.length);
    }, 2000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items]);

  return (
    <section className="container mx-auto px-4 py-14 ">
      <div>
              <h1 className="text-2xl font-semibold text-center"> Vendors on lagbuy</h1>
      <h4 className="text-center mt-2 text-xl">
        your favourite vendors are on lagbuy
      </h4>
      <div className="flex items-center justify-center mt-6 overflow-x-auto">
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
        <h1 className="text-2xl font-semibold">Explore Popular Categories</h1>
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
