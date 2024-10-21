import React from 'react'
import customer_img1 from "../../assets/LandingPageImg/customer_img (1).png";
import customer_img2 from "../../assets/LandingPageImg/customer_img (2).png";
import customer_img3 from "../../assets/LandingPageImg/customer_img (3).png";
import line from "../../assets/LandingPageImg/Line.png";


const Customer = () => {
    const Customers = [
      {
        img: customer_img1,
        text: "The customer service here is top-notch, they were so helpful with my order. Highly recommend this site",
        name: "Susan . A",
      },
      {
        img: customer_img2,
        text: "The discount and promotions on this site are unbeatable I Saved a lot on my recent purchase. Thank you.",
        name: "Susan . A",
      },
      {
        img: customer_img3,
        text: "Wow the delivery was fast, I Got my order in no time. Impressed with the service",
        name: "Susan . A",
      },
    ];
  return (
    <section className="container mx-auto px-5 py-14">
      <h1 className='text-base lg:text-2xl font-semibold '>WHAT OUR CUSTOMER SAYS</h1>
      <div className="flex flex-col lg:flex-row gap-5  ">
        {Customers.map((Customer, index) => (
          <div
            key={index}
            className="flex  w-full max-w-xl mt-8 rounded-2xl "
          >
            <img src={Customer.img} alt="" className="rounded-l-2xl" />
            <div className="bg-[#FFF9B7] rounded-r-2xl  p-4 flex flex-col items-center justify-center">
              <p className="text-sm lg:text-base font-semibold mb-4">{Customer.text}</p>
              <img src={line} alt="" />
              <p>{Customer.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Customer