import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { ChevronDown, Check, Mail, Phone, User, MessageCircle, Send } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(false);

  const options = [
    { value: "Delivery / My Order", icon: "🚚" },
    { value: "Product Issues", icon: "📦" },
    { value: "Partnerships / Marketing / Business", icon: "🤝" },
    { value: "Operations / Riders / Vendors", icon: "👥" },
    { value: "General Enquiries", icon: "💬" },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSelect = (value) => {
    setFormData({ ...formData, topic: value });
    setIsDropdownOpen(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await toast.promise(
        emailjs.send(
          "service_3yds16k",       
          "template_orz4r77",       
          formData,
          "mcw0hd-7jI-64x8gH"      
        ),
        {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Failed to send message. Please try again.",
        }
      );
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "General Enquiries",
        message: "",
      });
    } catch (error) {
      console.error("Email sending error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 lg:py-20 overflow-hidden"
      id="ContactUs"
    >
      <Toaster 
        position="top-right" 
        toastOptions={{ 
          duration: 4000, 
          style: { 
            background: "linear-gradient(135deg, #10B981, #059669)",
            color: "#fff",
            borderRadius: "12px",
            fontWeight: "500"
          } 
        }} 
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-5 animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Contact Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-yellow-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-600 text-sm font-semibold">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Contact{" "}
            <motion.span
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 bg-[length:200%_auto]"
            >
              Our Team
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions or need support? We're here to help. Send us a message and we'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={sendEmail}>
              {/* Name, Email, Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Name Field */}
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-green-500 text-gray-900 placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-green-500 text-gray-900 placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-green-500 text-gray-900 placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              {/* Custom Dropdown */}
              <motion.div 
                className="relative"
                initial={false}
                animate={{ scale: isDropdownOpen ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-2xl px-6 py-5 cursor-pointer shadow-lg shadow-green-500/25"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-3 h-3 bg-white rounded-full animate-pulse"></span>
                      <span className="font-medium text-lg">
                        {formData.topic || "Select a reason"}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-green-100 text-sm font-medium">SELECT</span>
                      <ChevronDown className="w-5 h-5 text-green-100" />
                    </motion.div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute z-20 mt-3 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      {options.map((option, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center px-6 py-4 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          onClick={() => handleSelect(option.value)}
                          whileHover={{ x: 5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{option.icon}</span>
                            <span className="font-medium text-gray-900">{option.value}</span>
                          </div>
                          {formData.topic === option.value && (
                            <Check className="text-green-500 w-5 h-5 rounded-full border-2 border-green-500 p-0.5" />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Box */}
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute left-4 top-6 transform text-gray-400 z-10">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-green-500 text-gray-900 placeholder-gray-500 resize-none transition-all duration-300"
                  rows="6"
                  required
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl shadow-green-500/25 border-2 border-white/20 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ 
                  scale: isLoading ? 1 : 1.05,
                  boxShadow: isLoading ? "0 20px 40px rgba(16, 185, 129, 0.25)" : "0 25px 50px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3 text-lg">
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <Send className="w-6 h-6" />
                  )}
                  {isLoading ? "Sending..." : "Send Message"}
                </span>
              </motion.button>
            </form>
          </div>

          {/* Bottom Gradient Accent */}
          <div className="w-full h-2 bg-gradient-to-r from-green-500 to-yellow-500" />
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Mail, title: "Email Support", value: "support@lagbuy.com", color: "text-green-500" },
            { icon: Phone, title: "Phone Support", value: "07077236556", color: "text-yellow-500" },
            { icon: MessageCircle, title: "Live Chat", value: "Coming Soon", color: "text-green-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-green-50 to-yellow-50 mb-4 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;