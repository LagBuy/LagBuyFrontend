import React from 'react'
import img1 from "../../assets/LandingPageImg/service1.png";
import img2 from "../../assets/LandingPageImg/service2.png";
import img3 from "../../assets/LandingPageImg/service3.png";


const Service = () => {
    const Services = [
      {
        image: img1,
        title: "Special Offer",
        text: "Featuring discounts,promotion and deals availablle to users",
      },
      {
        image: img2,
        title: "Shipping",
        text: "Fast, free and reliable top notch delivery",
      },
      {
        image: img3,
        title: "24/7 Support",
        text: "Providing detailed information and tips on using the website.",
      },
    ];
  return (
    <section className="container mx-auto px-5 py-10 lg:py-14 ">
      <h1 className="text-xl lg:text-3xl font-semibold mb-9 ">OUR SERVICE</h1>
      <div className="flex flex-col lg:flex-row   gap-4 ">
        {Services.map((Service, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 px-9 py-10 "
          >
            <div className="h-28 w-28 rounded-full flex items-center justify-center bg-[#1A362B]">
              <img
                src={Service.image}
                alt=""
                className="h-16 w-16 object-contain "
              />
            </div>
            <p className="text-[#1A362B] text-lg font-semibold">
              {Service.title}
            </p>
            <p className="text-base lg:text-xl text-center">{Service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service