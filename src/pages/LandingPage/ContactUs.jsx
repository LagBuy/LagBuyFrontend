import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import mobileNumber from "../../assets/LandingPageImg/mobileNumber.png";
import social from "../../assets/LandingPageImg/social.png";
import mail from "../../assets/LandingPageImg/mail.png";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-4 py-14" id="Contact-Us">
      <div className="text-center mb-8">
        <h1 className="text-lg lg:text-2xl  font-semibold mb-3">CONTACT US</h1>
        <h3 className="text-base text-gray-600">
          Get in touch and let us know how we can help you
        </h3>
      </div>
      <div className="flex flex-col md:flex-row  justify-between gap-6 ">
        {/* Mobile Number Section */}
        <div className="flex flex-col rounded-md rounded-br-[4rem]  border bg-white shadow-sm">
          <LazyLoadImage
            src={mobileNumber}
            alt="Mobile Number"
            className="w-auto h-80 mb-4"
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
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
          <LazyLoadImage
            src={social}
            alt="Social Media"
            className="w-auto h-80 mb-4"
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
          <div className="p-5 space-y-4">
            <h3 className="text-lg font-semibold ">Social Media</h3>
            <div className="flex text-2xl gap-3">
              <FaInstagram className="text-pink-600" />
              <FaXTwitter className="text-blue-500" />
              <FaFacebook className="text-blue-700" />
            </div>
            <p className="text-sm text-gray-500">
              Contact us through our social media pages above.
            </p>
          </div>
        </div>

        {/* E-mail Section */}
        <div className="flex flex-col rounded-md rounded-br-[4rem] border bg-white shadow-sm">
          <LazyLoadImage
            src={mail}
            alt="Email"
            className="w-auto h-80 mb-4"
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
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
