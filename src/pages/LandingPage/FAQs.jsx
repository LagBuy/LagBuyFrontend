import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is LagBuy?',
    answer: 'LagBuy is a platform that connects buyers, sellers, service providers, and riders for a seamless shopping and service experience.',
  },
  {
    question: 'How do I sign up as a vendor  on LagBuy?',
    answer: 'To sign up as a vendor on LagBuy, simply download the LagBuy app or visit our website. Navigate to the "Join as a Vendor" section, fill out your business details, upload any required documents, and submit your application. Once approved, you can start listing your products  and connect with customers instantly.',
  },
  {
    question: 'How do I create an account on LagBuy?',
    answer: 'To create an account on LagBuy, visit our website or download the LagBuy app. Click on "Sign Up", choose your account type Buyer, Vendor, or Rider then fill in your details and verify your phone number or email. Once registered, you can start using LagBuy to shop, sell, or deliver with ease.',
  },
  {
    question: 'What is the service fee?',
    answer: 'The service fee is a small percentage LagBuy charges on each successful transaction. It helps us maintain the platform, provide customer support, and ensure smooth operations for buyers, vendors, and riders. The exact fee may vary depending on the type of product offered.',
  },
  {
    question: 'How do I update my profile?',
    answer: 'To update your profile on LagBuy, log in to your account and go to the "Profile" or "Account Settings" section. From there, you can edit your personal details, contact information, business info (if you’re a vendor), and upload a new profile picture. Don’t forget to save your changes.',
  },
  {
    question: 'How do I delete a saved card?',
    answer: 'To delete a saved card on LagBuy, go to your account dashboard and navigate to the "Payment Methods" or "Wallet" section. Find the card you want to remove and click on the delete or remove icon next to it. You may be asked to confirm the action for security purposes.',
  },
  {
    question: 'What locations do we currently deliver to?',
    answer: 'LagBuy currently offers delivery services within Lagos. We are actively expanding to other regions and will announce new coverage areas as they become available. Stay tuned for updates!',
  },
  {
    question: 'How do I place an order?',
    answer: 'To place an order, browse through our categories, select your desired items, add them to your cart, and proceed to checkout.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept various payment methods including credit/debit cards, bank transfers, Payment on delivery, and mobile payments.',
  },
  {
    question: 'How can I track my order?',
    answer: 'After placing an order, you can track its status in real-time through your dashboard under the "Orders" section.',
  },
  {
    question: 'What is the return policy?',
    answer: 'Our return policy allows returns within 7 days of delivery. Items must be unused and in their original packaging.',
  },
  // {
  //   question: 'How do service providers offer their services on LagBuy?',
  //   answer: 'Service providers can sign up on LagBuy by downloading the app or visiting our website. After completing the registration and approval process, they can list their services, manage bookings, and connect directly with customers through the platform.',
  // },
  // {
  //   question: 'Can I be both a vendor and a service provider on LagBuy?',
  //   answer: 'Yes! LagBuy allows you to register as both a vendor and a service provider. This way, you can sell products and offer services simultaneously, reaching a wider customer base.',
  // },
  {
    question: 'How do riders work on LagBuy?',
    answer: 'Riders on LagBuy are responsible for delivering products and services to customers. They receive delivery requests through the app, pick up items from vendors, and ensure timely delivery to customers’ locations.',
  },
  {
    question: 'What support is available for vendors?',
    answer: 'LagBuy offers dedicated customer support for vendors , including onboarding assistance, help with listings, payment queries, and technical support to ensure smooth operations.',
  },
  {
    question: 'How do I update my product ?',
    answer: 'To update your listings, log in to your LagBuy vendor account, go to the "My Products" , and edit or add details as needed. Remember to save your changes.',
  },
  {
    question: 'What happens if there is an issue with my order ?',
    answer: 'If you experience any issues with an order , you can contact LagBuy customer support through the app or website. We help resolve disputes, process refunds, or arrange re-delivery when necessary.',
  },
  {
    question: 'Are there fees for riders?',
    answer: 'Riders on LagBuy do not pay fees to use the platform. Instead, they earn commissions or delivery fees for each completed delivery, supporting them as independent contractors.',
  },
  {
    question: 'Is LagBuy secure? How is my data protected?',
    answer: 'LagBuy uses industry standard security measures to protect your personal and payment information. We encrypt data transmissions and follow strict privacy policies to keep your account and transactions safe.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the login page and click on "Forgot Password". Enter your registered email or phone number, and follow the instructions sent to you to create a new password.',
  },
  // {
  //   question: 'Can I schedule a delivery or service?',
  //   answer: 'Yes, LagBuy allows you to schedule deliveries and services in advance. During checkout or booking, select your preferred delivery date and time to fit your schedule.',
  // },
  {
    question: 'Do you offer business accounts for vendors  ?',
    answer: 'LagBuy provides business accounts that offer additional features such as detailed sales reports, promotional tools, and priority support to help vendors grow their businesses.',
  },
  {
    question: 'How do refunds work on LagBuy?',
    answer: 'Refunds on LagBuy are processed based on our return and cancellation policies. Buyers can request refunds within the allowed period, and vendors must comply with the terms. Our support team assists in handling refund requests fairly and promptly.',
  },
  {
    question: 'Can I offer discounts or promotions as a vendor?',
    answer: 'Yes! Vendors can create discounts and promotions through their LagBuy dashboard to attract more customers and boost sales.',
  },
  {
    question: 'How do I become a rider on LagBuy?',
    answer: 'To become a rider, download the LagBuy app and sign up as a rider. Submit the required documents for verification. Once approved, you can start accepting delivery requests and earning with LagBuy.',
  },
];

const FAQs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-26 py-6 lg:py-10"
      style={{ marginTop: '-40px' }}
      id="FAQs"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-800">FAQs</h1>

      {/*  Mobile Layout - Scrollable List */}
      <div className="block lg:hidden">
        <div className="bg-[#1A362B] rounded-xl p-6 shadow-md text-white">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

          {/* Scrollable questions */}
          <div className="h-48 overflow-y-auto space-y-3 mb-6 border-l-2 border-green-500 pl-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer text-sm px-2 py-1 rounded-md ${
                  selectedIndex === index
                    ? 'bg-green-200 text-green-900 font-semibold'
                    : 'hover:bg-green-700'
                }`}
              >
                {faq.question}
              </div>
            ))}
          </div>

          {/* Answer box */}
          <div className="bg-white text-black rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">{faqs[selectedIndex].question}</h3>
            <p className="text-sm leading-relaxed">{faqs[selectedIndex].answer}</p>
          </div>
        </div>
      </div>

      {/*  Desktop Layout */}
      <div className="hidden lg:flex flex-col lg:flex-row gap-8 mt-10">
        {/* Left: Questions */}
        <div className="lg:w-1/3 h-96 overflow-y-auto border-r border-gray-200 pr-4">
          <h3 className="text-xl font-semibold mb-2 text-green-900">Questions</h3>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer p-4 rounded-md ${
                  selectedIndex === index
                    ? 'bg-green-100 text-green-700 font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {faq.question}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Answer */}
        <div className="lg:w-2/3 bg-[rgba(49,159,67,0.2)] rounded-md p-6">
          <h3 className="text-xl font-semibold mb-2 text-green-900">Answer</h3>
          <div className="sticky top-20">
            <h2 className="text-2xl font-bold mb-4">{faqs[selectedIndex].question}</h2>
            <p className="text-gray-700">{faqs[selectedIndex].answer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
