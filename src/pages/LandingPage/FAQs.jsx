import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, HelpCircle, Zap } from 'lucide-react';

const faqs = [
  {
    question: 'What is LagBuy?',
    answer: 'LagBuy is a platform that connects buyers, sellers, service providers, and riders for a seamless shopping and service experience.',
  },
  {
    question: 'How do I sign up as a vendor on LagBuy?',
    answer: 'To sign up as a vendor on LagBuy, simply download the LagBuy app or visit our website. Navigate to the "Join as a Vendor" section, fill out your business details, upload any required documents, and submit your application. Once approved, you can start listing your products and connect with customers instantly.',
  },
  {
    question: 'How do I create an account on LagBuy?',
    answer: 'To create an account on LagBuy, visit our website or download the LagBuy app. Click on "Sign Up", choose your account type Buyer, Vendor, or Rider then fill in your details and verify your phone number or email. Once registered, you can start using LagBuy to shop, sell, or deliver with ease.',
  },
  {
    question: 'What is the service fee?',
    answer: 'The service fee is a small percentage LagBuy charges on each successful transaction. It helps us maintain the platform, provide customer support, and ensure smooth operations for buyers, vendors, and riders. The exact fee may vary depending on the type of product offered.',
  },
  // ... keep the rest of your FAQ items
];

const FAQs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      className="relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 lg:py-20 overflow-hidden"
      id="FAQs"
    >
      {/* Background Elements - Subtle */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-5" />
      </div>

      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-yellow-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-600 text-sm font-semibold">Quick Answers</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Frequently Asked{" "}
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
            Questions
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Find quick answers to common questions about LagBuy. Can't find what you're looking for? Contact our support team.
        </motion.p>
      </motion.div>

      {/* Search Bar */}
      <motion.div 
        className="max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 shadow-lg transition-colors duration-300 backdrop-blur-sm"
          />
        </div>
      </motion.div>

      {/* FAQ Items - Accordion Style for both mobile and desktop */}
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden backdrop-blur-sm">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border-b border-gray-100 last:border-b-0 ${
                openItems[index] ? 'bg-green-50/50' : 'hover:bg-gray-50/50'
              } transition-colors duration-300`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between gap-4 group"
              >
                <h3 className={`text-lg font-semibold flex-1 transition-colors duration-300 ${
                  openItems[index] ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    openItems[index] 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full mb-4" />
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try searching with different keywords</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <motion.a
            href="#ContactUs"
            className="bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-green-500/25 border-2 border-white/20 relative overflow-hidden group inline-flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Contact Support
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQs;