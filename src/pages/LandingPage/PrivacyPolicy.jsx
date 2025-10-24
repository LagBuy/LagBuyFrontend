import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, MapPin, CheckCircle } from "lucide-react";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";

const PrivacyPolicy = () => {
  const policySections = [
    {
      icon: FileText,
      title: "1. Information We Collect",
      items: [
        "Account information such as your name, email, phone number, and password.",
        "Transaction details such as products ordered, delivery addresses, and payment methods.",
        "Device and usage data such as IP address, browser type, and interactions with our app or website.",
        "Location data where necessary to enable deliveries.",
        "Communications and feedback you provide when contacting our support team."
      ]
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      items: [
        "Process and deliver your orders.",
        "Maintain and secure your account.",
        "Improve our platform, services, and customer support.",
        "Send service updates, promotional offers (where you consent), and respond to inquiries.",
        "Detect fraud and ensure security and legal compliance."
      ]
    },
    {
      icon: Shield,
      title: "3. Cookies and Tracking",
      content: "We use cookies and similar technologies to enhance your browsing experience, understand usage patterns, and show you relevant offers. You may adjust cookie settings through your browser at any time."
    },
    {
      icon: Lock,
      title: "4. Legal Basis for Processing",
      items: [
        "Your consent for marketing and certain analytics.",
        "The necessity of fulfilling a contract when you place an order.",
        "Our legitimate interest in running a secure and efficient platform.",
        "Compliance with legal obligations, including tax and regulatory requirements."
      ]
    },
    {
      icon: Shield,
      title: "5. Sharing Your Data",
      content: "Your data may be shared with Vendors and Riders who fulfill your orders, payment processors to complete transactions, and analytics or hosting partners who help us improve our services. All third parties are bound by confidentiality and data protection agreements."
    },
    {
      icon: Lock,
      title: "6. International Data Transfers",
      content: "Where data is transferred outside Nigeria, we ensure appropriate safeguards and comply with applicable data protection laws to protect your information."
    },
    {
      icon: FileText,
      title: "7. Data Retention",
      content: "We keep your data only as long as necessary to provide our services, meet legal requirements, resolve disputes, and enforce our agreements. Once data is no longer required, we will securely delete or anonymize it."
    },
    {
      icon: Shield,
      title: "8. Security",
      content: "LagBuy implements technical, administrative, and physical safeguards to protect your personal information against unauthorized access, loss, misuse, or alteration. We will notify you and relevant authorities of any data breach where legally required."
    },
    {
      icon: Eye,
      title: "9. Your Rights",
      items: [
        "Access the personal data we hold about you.",
        "Request correction or deletion of your data.",
        "Withdraw consent for marketing.",
        "Object to processing or request restriction where applicable.",
        "Lodge a complaint with the Nigeria Data Protection Commission (NDPC)."
      ]
    },
    {
      icon: Lock,
      title: "10. Children's Privacy",
      content: "LagBuy does not knowingly collect personal information from anyone under 18. If we learn that we have inadvertently collected such data, we will delete it promptly."
    },
    {
      icon: FileText,
      title: "11. Changes to This Policy",
      content: "We may update this Privacy Policy to reflect changes in our practices or legal obligations. Updates will be posted on our website with the revised date."
    },
    {
      icon: Mail,
      title: "12. Contact Us",
      content: "If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:",
      contact: true
    }
  ];

  return (
    <>
      <Navbar />

      <section
        className="relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-12 lg:py-20 overflow-hidden"
        id="PrivacyPolicy"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full blur-3xl opacity-5 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500 to-green-400 rounded-full blur-3xl opacity-5 animate-pulse delay-1000" />
        </div>

        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-yellow-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-600 text-sm font-semibold">Data Protection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Privacy{" "}
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
              Policy
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            This Privacy Policy describes how LagBuy ("LagBuy", "we", "our", or "us") collects, 
            uses, stores, and protects your personal information when you use our website, 
            mobile applications, and related services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>NDPA 2023 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-500" />
              <span>Secure Data Handling</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-green-500" />
              <span>Transparent Practices</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Policy Content */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm">
            {/* Introduction */}
            <motion.div 
              className="p-8 border-b border-gray-100 bg-gradient-to-r from-green-50 to-yellow-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-gray-700 leading-relaxed">
                This policy explains your rights and how you can exercise them, in line with 
                the Nigeria Data Protection Act (NDPA 2023) and other applicable regulations.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="divide-y divide-gray-100">
              {policySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-8 hover:bg-gray-50/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-2xl border border-green-500/20">
                        <section.icon className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      
                      {section.items ? (
                        <ul className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.9 + index * 0.1 + itemIndex * 0.05 }}
                              className="flex items-start gap-3 text-gray-700 leading-relaxed"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      ) : (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="text-gray-700 leading-relaxed"
                        >
                          {section.content}
                        </motion.p>
                      )}

                      {section.contact && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="mt-4 space-y-2 text-gray-700"
                        >
                          <p>
                            Email:{" "}
                            <a
                              href="mailto:privacy@lagbuy.com"
                              className="text-green-600 hover:text-green-700 font-medium underline transition-colors duration-300"
                            >
                              privacy@lagbuy.com
                            </a>
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-green-600" />
                            Address: LagBuy Technologies Ltd., University of Lagos, Lagos, Nigeria.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Last Updated */}
            <motion.div 
              className="p-8 bg-gradient-to-r from-green-50 to-yellow-50 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-600 font-semibold">Policy Status</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <em>Last Updated: September 19, 2025</em>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 text-sm">
              For any questions regarding this policy or your data rights, please don't hesitate to contact our privacy team.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;