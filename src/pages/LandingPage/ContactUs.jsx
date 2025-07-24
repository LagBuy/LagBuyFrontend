import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ChevronDown, Check } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General Enquiries",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { value: "Delivery / My Order" },
    { value: "Product " },
    { value: "Partnerships / Marketing / Business" },
    { value: "Operations / Riders / Vendors " },
    { value: "General Enquiries" },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSelect = (value) => {
    setFormData({ ...formData, topic: value });
    setIsDropdownOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.send(
        "service_3yds16k",       
        "template_orz4r77",       
        formData,
        "mcw0hd-7jI-64x8gH"      
      ),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send. Try again.",
      }
    ).then(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });
    });
  };

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 rounded-xl shadow-md border border-gray-200 md:px-20 md:py-16"
     id="ContactUs"
    >
      <Toaster position="top-right" toastOptions={{ duration: 4000, style: { background: "#1A362B", color: "#fff" } }} />
      
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A362B] mb-8">Email Us</h2>

      <form className="space-y-6" onSubmit={sendEmail}>
        {/* Name, Email, Phone */}
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 flex-1">
            <span className="mr-3 text-gray-500 text-xl">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-base md:text-lg"
              required
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 flex-1">
            <span className="mr-3 text-gray-500 text-xl">✉️</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-base md:text-lg"
              required
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 flex-1">
            <span className="mr-3 text-gray-500 text-xl">📞</span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-base md:text-lg"
              required
            />
          </div>
        </div>

        {/* Custom Dropdown */}
        <div
          className="relative bg-black text-white rounded-lg px-4 py-4 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="text-sm md:text-base">
                {formData.topic || "Select a reason"}
              </span>
            </div>
            <span className="text-xs md:text-base text-gray-300">
              SELECT <ChevronDown size={16} className="inline-block ml-1" />
            </span>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-full bg-white text-black rounded-lg shadow-lg">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                  onClick={() => handleSelect(option.value)}
                >
                  <span className="text-sm md:text-base">{option.value}</span>
                  {formData.topic === option.value && (
                    <Check className="text-green-500 w-4 h-4 rounded-full border border-green-500 p-0.5" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Message Box */}
        <textarea
          name="message"
          placeholder="Type a message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none text-base md:text-lg"
          rows="6"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1A362B] text-white py-3 rounded-lg font-medium hover:bg-[#143024] text-base md:text-lg"
        >
          Submit Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
