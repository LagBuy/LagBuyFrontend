import React from "react";
import Buyer from "../../assets/LandingPageImg/Buyer.png";
import Seller from "../../assets/LandingPageImg/Seller.png";
import Service from "../../assets/LandingPageImg/Service.png";
import Rider  from "../../assets/LandingPageImg/Rider.png";


const benefits = [
  {
    img: Buyer,
    title: "Buyers / Customers",
    desc: "Schools, Colleges, Universities, and everyday Shoppers",
  },
  {
    img:  Seller,
    title: "Sellers / Vendors",
    desc: "SMEs And Large Enterprises.",
  },
  {
    img:  Service,
    title: "Service Providers",
    desc: "Flexible Digital Solutions For Emerging Businesses.",
  },
  {
    img:  Rider,
    title: "Riders",
    desc: "Streamlined Administration And Data Management.",
  },
];

const BenefitSection = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-8 lg:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-0">
        <h2 className="text-3xl font-bold leading-tight max-w-md">
          People That Benefit <br />
          From <span className="text-green-600">Lagbuy</span>
        </h2>
        <p className="text-gray-500 max-w-sm text-sm">
          Designed With Real People In Mind, ASTRA Adapts To The Way You Work.
          Empower Teams Across Departments To Automate, Align, And Accelerate
          Results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map(({ img, title, desc }, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-3">
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="font-semibold text-base">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
