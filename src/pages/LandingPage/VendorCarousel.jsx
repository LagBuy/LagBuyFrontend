import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VendorCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const vendors = [
    { id: 1, name: "Vendor 1", logo: "path_to_logo1" },
    { id: 2, name: "Vendor 2", logo: "path_to_logo2" },
    { id: 3, name: "Vendor 3", logo: "path_to_logo3" },
    { id: 4, name: "Vendor 4", logo: "path_to_logo4" },
    { id: 5, name: "Vendor 5", logo: "path_to_logo5" },
    { id: 6, name: "Vendor 6", logo: "path_to_logo6" },
    // Add more vendors as needed
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

  return (
    <div className="w-full py-10 flex flex-col items-center bg-white">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">Vendors on Oilii</h2>
      <p className="text-gray-500">Your favourite vendors are on Oiliifood</p>

      {/* Carousel Section */}
      <div className="flex items-center justify-center mt-6">
        {/* Vendor Logos */}
        <div className="flex space-x-4 mx-4">
          {vendors.slice(currentPage - 1, currentPage + 5).map((vendor) => (
            <div
              key={vendor.id}
              className="w-16 h-16 flex items-center justify-center bg-white border rounded-full shadow"
            >
              <img src={vendor.logo} alt={vendor.name} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination with Controls */}
      <div className="mt-4 flex items-center text-gray-600">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="p-2 text-gray-500 hover:text-gray-800"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Pagination Number */}
        <div className="mx-4">
          <span>{currentPage}</span> / <span>{vendors.length}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 text-gray-500 hover:text-gray-800"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default VendorCarousel;
