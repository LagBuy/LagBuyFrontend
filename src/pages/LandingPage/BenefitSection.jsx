import React from "react";
import Buyer from "../../assets/LandingPageImg/Buyer.png";
import Seller from "../../assets/LandingPageImg/Seller.png";
// import Service from "../../assets/LandingPageImg/Service.png";
import Rider from "../../assets/LandingPageImg/Rider.png";

const benefits = [
  {
    img: Buyer,
    title: "Buyers / Customers",
    desc: "Schools, Colleges, Universities, and everyday Shoppers",
  },
  {
    img: Seller,
    title: "Sellers / Vendors",
    desc: "SMEs And Large Enterprises.",
  },
  // {
  //   img: Service,
  //   title: "Service Providers",
  //   desc: "Flexible Digital Solutions For Emerging Businesses.",
  // },
  {
    img: Rider,
    title: "Riders",
    desc: "Streamlined Administration And Data Management.",
  },
];

const BenefitSection = () => {
  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-8 lg:py-16"
      style={{ marginTop: "-60px" }}
    >
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold leading-tight mb-4">
          People That Benefit <br />
          From <span className="text-green-600">Lagbuy</span>
        </h2>
        <p className="text-gray-500 max-w-md text-sm">
          Designed With Real People In Mind, LagBuy adapts to the way you live
          and shop. Empower users and partners with reliable and seamless
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {benefits.map(({ img, title, desc }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-3 w-full max-w-xs"
          >
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
