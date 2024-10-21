import React from "react";
import mobileNumber from "../../assets/LandingPageImg/mobileNumber.png";
import social from "../../assets/LandingPageImg/social.png";
import mail from "../../assets/LandingPageImg/mail.png";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="text-center mb-8">
        <h1 className="text-lg lg:text-2xl  font-semibold mb-3">CONTACT US</h1>
        <h3 className="text-base text-gray-600">
          Get in touch and let us know how we can help you
        </h3>
      </div>
      <div className="flex flex-col md:flex-row  justify-between gap-6 ">
        {/* Mobile Number Section */}
        <div className="flex flex-col rounded-md rounded-br-[4rem]  border bg-white shadow-sm">
          <img
            src={mobileNumber}
            alt="Mobile Number"
            className="w-auto h-80 mb-4"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold">Mobile Number</h3>
            <p className="text-base">+234 787-8989-954</p>
            <p className="text-base">+234 787-8989-954</p>
            <p className="text-sm text-gray-500 ">
              Call lines are open from Monday to Friday 08:00-18:00pm
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col rounded-md rounded-br-[4rem]  border bg-white shadow-sm ">
          <img src={social} alt="Social Media" className="w-auto h-80 mb-4" />
          <div className="p-5">
            <h3 className="text-lg font-semibold ">Social Media</h3>
            <p className="flex items-center gap-2 text-base">
              <FaInstagram className="text-pink-600" />
              <span>@LAG-BUY</span>
            </p>
            <p className="flex items-center  gap-2 text-base">
              <FaXTwitter className="text-blue-500" />
              <span>@LAG-BUY</span>
            </p>
            <p className="flex items-center  gap-2 text-base">
              <FaFacebook className="text-blue-700" />
              <span>@LAG-BUY</span>
            </p>
            <p className="text-sm text-gray-500">
              Contact us through our social media pages above.
            </p>
          </div>
        </div>

        {/* E-mail Section */}
        <div className="flex flex-col rounded-md rounded-br-[4rem] border bg-white shadow-sm">
          <img src={mail} alt="Email" className="w-auto h-80 mb-4" />
          <div className="p-5">
            <h3 className="text-lg font-semibold">E-mail</h3>
            <p className="text-base">help@lagbuy.com</p>
            <p className="text-base">help@lagbuy.com</p>
            <p className="text-sm text-gray-500">
              Write to us via our e-mail address from Monday to Friday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
