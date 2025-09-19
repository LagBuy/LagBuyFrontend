import React from "react";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section
        className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-12"
        id="PrivacyPolicy"
      >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A362B] mb-8">
            <strong>LagBuy Privacy&nbsp;Policy</strong>
          </h1>
          <p className="text-gray-800 text-base leading-relaxed">
            This Privacy Policy describes how LagBuy (“LagBuy”, “we”, “our”, or
            “us”) collects, uses, stores, and protects your personal information
            when you use our website, mobile applications, and related services.
            It also explains your rights and how you can exercise them, in line
            with the Nigeria Data Protection Act (NDPA&nbsp;2023) and other
            applicable regulations.
          </p>
        </div>

        <div className="prose max-w-4xl text-gray-800 ml-0">
          <h2 className="mt-10"><strong>1. Information We Collect</strong></h2>
          <ul className="mt-4 list-disc ml-6">
            <li>Account information such as your name, email, phone number, and password.</li>
            <li>Transaction details such as products ordered, delivery addresses, and payment methods.</li>
            <li>Device and usage data such as IP address, browser type, and interactions with our app or website.</li>
            <li>Location data where necessary to enable deliveries.</li>
            <li>Communications and feedback you provide when contacting our support team.</li>
          </ul>

          <h2 className="mt-10"><strong>2. How We Use Your Information</strong></h2>
          <ul className="mt-4 list-disc ml-6">
            <li>Process and deliver your orders.</li>
            <li>Maintain and secure your account.</li>
            <li>Improve our platform, services, and customer support.</li>
            <li>Send service updates, promotional offers (where you consent), and respond to inquiries.</li>
            <li>Detect fraud and ensure security and legal compliance.</li>
          </ul>

          <h2 className="mt-10"><strong>3. Cookies and Tracking</strong></h2>
          <p className="mt-4">
            We use cookies and similar technologies to enhance your browsing experience,
            understand usage patterns, and show you relevant offers. You may adjust
            cookie settings through your browser at any time.
          </p>

          <h2 className="mt-10"><strong>4. Legal Basis for Processing</strong></h2>
          <ul className="mt-4 list-disc ml-6">
            <li>Your consent for marketing and certain analytics.</li>
            <li>The necessity of fulfilling a contract when you place an order.</li>
            <li>Our legitimate interest in running a secure and efficient platform.</li>
            <li>Compliance with legal obligations, including tax and regulatory requirements.</li>
          </ul>

          <h2 className="mt-10"><strong>5. Sharing Your Data</strong></h2>
          <p className="mt-4">
            Your data may be shared with Vendors and Riders who fulfill your orders,
            payment processors to complete transactions, and analytics or hosting partners
            who help us improve our services. All third parties are bound by
            confidentiality and data protection agreements.
          </p>

          <h2 className="mt-10"><strong>6. International Data Transfers</strong></h2>
          <p className="mt-4">
            Where data is transferred outside Nigeria, we ensure appropriate safeguards
            and comply with applicable data protection laws to protect your information.
          </p>

          <h2 className="mt-10"><strong>7. Data Retention</strong></h2>
          <p className="mt-4">
            We keep your data only as long as necessary to provide our services, meet legal
            requirements, resolve disputes, and enforce our agreements. Once data is no
            longer required, we will securely delete or anonymize it.
          </p>

          <h2 className="mt-10"><strong>8. Security</strong></h2>
          <p className="mt-4">
            LagBuy implements technical, administrative, and physical safeguards to protect
            your personal information against unauthorized access, loss, misuse, or alteration.
            We will notify you and relevant authorities of any data breach where legally required.
          </p>

          <h2 className="mt-10"><strong>9. Your Rights</strong></h2>
          <ul className="mt-4 list-disc ml-6">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent for marketing.</li>
            <li>Object to processing or request restriction where applicable.</li>
            <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
          </ul>

          <h2 className="mt-10"><strong>10. Children’s Privacy</strong></h2>
          <p className="mt-4">
            LagBuy does not knowingly collect personal information from anyone under 18.
            If we learn that we have inadvertently collected such data, we will delete it promptly.
          </p>

          <h2 className="mt-10"><strong>11. Changes to This Policy</strong></h2>
          <p className="mt-4">
            We may update this Privacy Policy to reflect changes in our practices or legal
            obligations. Updates will be posted on our website with the revised date.
          </p>

          <h2 className="mt-10"><strong>12. Contact Us</strong></h2>
          <p className="mt-4">
            If you have any questions or concerns about this Privacy Policy or how we handle
            your personal information, please contact us:
            <br />
            Email:&nbsp;
            <a
              href="mailto:privacy@lagbuy.com"
              className="text-[#94BD0A] underline"
            >
              privacy@lagbuy.com
            </a>
            <br />
            Address: LagBuy Technologies Ltd., University of Lagos, Lagos, Nigeria.
          </p>

          <p className="mt-8 text-sm text-gray-600">
            <em>Last Updated: September 19, 2025</em>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
