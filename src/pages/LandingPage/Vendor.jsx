import React from "react";
import vendorImg1 from "../../assets/LandingPageImg/vendor (1).png";
import vendorImg2 from "../../assets/LandingPageImg/vendor (2).png";
import vendorImg3 from "../../assets/LandingPageImg/vendor (3).png";
import vendorImg4 from "../../assets/LandingPageImg/vendor (4).png";
import vendorImg5 from "../../assets/LandingPageImg/vendor (5).png";
import cloth from "../../assets/LandingPageImg/cloth.png";
import shoe from "../../assets/LandingPageImg/shoe.png";
import phone from "../../assets/LandingPageImg/phone.png";
import bag from "../../assets/LandingPageImg//bag.png";


const Vendor = () => {
  const Vendors = [
    {
      img: vendorImg1,
      name: "Bestronics",
    },
    {
      img: vendorImg5,
      name: "Nike Lagos",
    },
    {
      img: vendorImg4,
      name: "Next Store",
    },
    {
      img: vendorImg3,
      name: "KiddyZone",
    },
    {
      img: vendorImg2,
      name: "HealthPlus",
    },
  ];
  const items = [
    {
      image: cloth,
      name: "Clothes",
    },
    {
      image: shoe,
      name: "Shoes",
    },
    {
      image: phone,
      name: "Phones",
    },
    {
      image: bag,
      name: "Bags",
    },
  ];

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
        <div className="mt-7 ">
          <div className="flex  flex-col md:flex-row flex-wrap items-center gap-5 justify-between  min-w-full">
            {items.map((item, index) => (
              <div key={index} className="flex  ">
                <h4 className="bg-[#FFF9B7] flex items-center p-5 rounded-l-[3.2rem]">
                  {item.name}
                </h4>
                <img src={item.image} alt={item.name} className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
