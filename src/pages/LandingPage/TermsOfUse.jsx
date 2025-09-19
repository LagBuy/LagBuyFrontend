import React from "react";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";

const TermsOfUse = () => {
  return (
    <>
      <Navbar />

      <section
        className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-12"
        id="TermsOfUse"
       >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A362B] mb-8">
            <strong>LagBuy Terms &amp; Conditions</strong>
          </h1>
          <p className="text-gray-800 text-base leading-relaxed">
            Welcome to LagBuy, a proprietary website and mobile application
            operated by LagBuy Technologies Ltd. ("LagBuy", "we", "our", "us").
            By accessing or using our platform ("Platform"), you ("User", "you",
            "your") agree to be bound by these Terms and Conditions. Please read
            them carefully before using our services. If you do not agree, you
            may not access or use the Platform.
          </p>
        </div>

        <div className="prose max-w-4xl text-gray-800 ml-0">
          <h2 className="mt-10"><strong>1. General Terms</strong></h2>
          <ul className="mt-4">
            <li>1.1 These Terms govern your access to and use of the LagBuy Platform and services.</li>
            <li>1.2 By using the Platform, you accept and agree to be bound by these Terms.</li>
            <li>1.3 We may update these Terms from time to time. Continued use of the Platform after changes constitutes acceptance.</li>
            <li>
              1.4 <strong>Definitions (for clarity):</strong>
              <ul className="ml-6 mt-2">
                <li>"Buyer": a User who purchases goods through the Platform.</li>
                <li>"Vendor": a merchant or seller offering goods on the Platform.</li>
                <li>"Rider": a courier engaged to pick up and deliver goods.</li>
                <li>"Wallet": the closed-loop electronic wallet feature on the Platform.</li>
                <li>"Promo Code": any promotional code or discount offered on the Platform.</li>
              </ul>
            </li>
          </ul>

          <h2 className="mt-10"><strong>2. Our Services</strong></h2>
          <ul className="mt-4">
            <li>2.1 LagBuy provides a marketplace and logistics support that connects Buyers, Vendors and Riders for ordering, payment and delivery of goods.</li>
            <li>2.2 LagBuy is a technology platform that facilitates transactions between Buyers and Vendors and arranges delivery through Riders. LagBuy is not the seller of products listed by third-party Vendors unless explicitly stated.</li>
            <li>2.3 LagBuy does not manufacture, pack, inspect, or own the inventory of third-party Vendors and therefore does not guarantee the quality or fitness of products beyond what the Vendor represents.</li>
          </ul>

          <h2 className="mt-10"><strong>3. Accounts &amp; Registration</strong></h2>
          <ul className="mt-4">
            <li>3.1 Users must be at least 18 years old and able to enter legally binding contracts.</li>
            <li>3.2 You must provide accurate and up-to-date information when registering, and you are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>3.3 You are responsible for all activity under your account. Notify support immediately at support@lagbuy.com if you suspect unauthorized access.</li>
          </ul>

          <h2 className="mt-10"><strong>4. Payments</strong></h2>
          <ul className="mt-4">
            <li>4.1 <strong>Payment processing:</strong> All payments on the Platform are processed through third-party payment providers. LagBuy does not store full card information; our payment partners handle payment authorizations, captures, refunds and related settlement activities.</li>
            <li>
              4.2 <strong>Accepted payment methods:</strong> Depending on availability and the Vendor's settings, you may pay using any of the following:
              <ul className="ml-6 mt-2">
                <li>LagBuy Wallet (closed-loop wallet that you can top up via supported payment channels).</li>
                <li>Debit or credit cards (card payments processed by our payment partner).</li>
                <li>Bank transfers.</li>
                <li>QR code payment methods and mobile wallets supported by our partners.</li>
                <li>Cash on delivery (where enabled by the Vendor and available in your area).</li>
                <li>Any other payment method enabled by LagBuy or its payment partners from time to time.</li>
              </ul>
            </li>
            <li>4.3 <strong>Currency and taxes:</strong> Prices are displayed in Nigerian Naira and include applicable taxes unless otherwise stated.</li>
            <li>4.4 <strong>Checkout & fees:</strong> The delivery fee, any applicable platform or convenience fees, and the total price for your order will be displayed at checkout. You must pay the total amount shown to complete the order.</li>
            <li>4.5 <strong>Responsibility of payment processor:</strong> Our payment partners are responsible for processing payment transactions. LagBuy will not be liable for unauthorised payment processing by third-party payment providers, except where caused by our negligence.</li>
            <li>4.6 <strong>Refunds, chargebacks and disputes:</strong> If you believe a payment was processed incorrectly or fraudulently, contact support@lagbuy.com immediately. Refunds are subject to the Returns & Refunds policy below. Where a chargeback is initiated with your card issuer, we may pause related funds and investigate the transaction.</li>
            <li>4.7 <strong>Wallet rules:</strong> Wallet balances are for use on the Platform only. Wallet top-ups may be subject to limits and may take time to reflect depending on the payment channel. Wallet balances may be used to pay for orders and delivery fees.</li>
          </ul>

          <h2 className="mt-10"><strong>5. Orders, Cancellations &amp; Returns</strong></h2>
          <ul className="mt-4">
            <li>
              5.1 <strong>Order acceptance & cancellation:</strong>
              <ul className="ml-6 mt-2">
                <li>An order placed on the Platform is an offer to purchase from the selected Vendor. A purchase contract is formed when the Vendor accepts the order (or when you receive an order confirmation if LagBuy is the Vendor).</li>
                <li>You may cancel an order before it is accepted by the Vendor. Once accepted, cancellation may be subject to Vendor cancellation terms and any costs incurred (including preparation or delivery charges).</li>
              </ul>
            </li>
            <li>
              5.2 <strong>Returns & Refunds (general rules):</strong>
              <ul className="ml-6 mt-2">
                <li>Non-perishable goods: Buyers may request a return within 7 calendar days of delivery if the item is faulty, damaged, materially different from the listing, or missing essential parts. Items must be returned in substantially the same condition and with any original packaging and tags.</li>
                <li>Perishable or fresh goods: If the item is perishable (fresh produce, etc.) or otherwise time-sensitive, you must report any issues (spoiled, missing, or incorrect items) to support@lagbuy.com within 24 hours of delivery. LagBuy will assess and, where appropriate, arrange a refund or replacement.</li>
                <li>Digital goods & sealed items: Digital downloads, software, and sealed personal items (e.g., sealed cosmetics or intimate apparel) are final sale and not eligible for return unless faulty on delivery.</li>
              </ul>
            </li>
            <li>
              5.3 <strong>Return process & inspection:</strong>
              <ul className="ml-6 mt-2">
                <li>To start a return, contact support@lagbuy.com and provide your order number, photos, and a description of the issue. LagBuy or the Vendor may request the item be returned for inspection before a refund or replacement is issued.</li>
                <li>Refunds will be processed after verification. The refund method (original payment method, bank transfer, or store credit) will be determined by LagBuy at its discretion unless otherwise required by law.</li>
              </ul>
            </li>
            <li>
              5.4 <strong>Shipping costs for returns:</strong>
              <ul className="ml-6 mt-2">
                <li>If the return is due to Vendor error (wrong item, defective, missing parts) or transit damage, the Vendor or LagBuy will cover reasonable return shipping costs.</li>
                <li>If the return is for any other reason (e.g., buyer simply changed their mind), the Buyer will be responsible for return shipping costs unless the Vendor offers free returns.</li>
              </ul>
            </li>
            <li>5.5 <strong>Refund timing:</strong> Approved refunds will be issued as soon as practicable, typically within 7–14 business days after the return is accepted. The exact time for the refunded amount to reflect will depend on the payment provider or bank.</li>
          </ul>

          <h2 className="mt-10"><strong>6. Delivery</strong></h2>
          <ul className="mt-4">
            <li>6.1 <strong>Delivery facilitation:</strong> LagBuy coordinates deliveries through Riders. Delivery estimates are provided at checkout but are subject to change due to traffic, weather, Vendor readiness, and other factors.</li>
            <li>6.2 <strong>Failed delivery attempts and incorrect addresses:</strong> Buyers must provide accurate delivery details. If a Rider is unable to complete delivery due to incorrect information, buyer absence, or refusal, additional fees may apply and refunds may be limited.</li>
            <li>6.3 <strong>Proof of delivery:</strong> Riders may obtain a signature, photo, OTP, or other form of acknowledgement at delivery. If you dispute whether an item was delivered, LagBuy will investigate using available delivery records.</li>
          </ul>

          <h2 className="mt-10"><strong>7. Vendor Responsibilities</strong></h2>
          <ul className="mt-4">
            <li>7.1 <strong>Product information:</strong> Vendors must ensure that product listings are accurate, complete and comply with applicable laws. Price, description, images and stock levels must be kept up to date.</li>
            <li>7.2 <strong>Fulfilment timelines:</strong> Vendors must process accepted orders within the Vendor’s stated handling time. Repeated failure to ship may result in suspension from the Platform.</li>
            <li>7.3 <strong>Compliance:</strong> Vendors must not offer prohibited or illegal items and must comply with safety, labelling and tax requirements.</li>
            <li>7.4 <strong>Returns & refunds:</strong> Vendors must cooperate with LagBuy in handling returns, refunds and warranty claims in accordance with these Terms.</li>
          </ul>

          <h2 className="mt-10"><strong>8. Riders &amp; Deliveries</strong></h2>
          <ul className="mt-4">
            <li>8.1 Riders may be independent contractors or employees engaged to perform deliveries. LagBuy aims to ensure Riders follow safety and customer service standards but cannot guarantee their acts or omissions.</li>
            <li>8.2 <strong>Communication:</strong> Riders may contact Buyers to confirm delivery instructions. Buyers must not provide instructions that would require the Rider to violate traffic laws or safety standards.</li>
            <li>8.3 <strong>Liability for delivery damage:</strong> If an item is delivered damaged, report it immediately to support@lagbuy.com. LagBuy will investigate and coordinate refunds or replacements as appropriate.</li>
          </ul>

          <h2 className="mt-10"><strong>9. Promotions, Store Credit &amp; Promo Codes</strong></h2>
          <ul className="mt-4">
            <li>9.1 <strong>Promotional offers and Promo Codes:</strong> LagBuy may offer promotions or Promo Codes with specific terms. Promo Codes are subject to expiration, usage limits and additional conditions and may be disabled at any time.</li>
            <li>9.2 <strong>Store credit:</strong> Store credits issued by LagBuy may be used only on the Platform and are non-transferable and non-redeemable for cash unless required by law.</li>
            <li>9.3 <strong>Abuse of promotions:</strong> LagBuy reserves the right to revoke Promo Codes or store credit if we suspect fraud, abuse or error.</li>
          </ul>

          <h2 className="mt-10"><strong>10. User Content, Reviews &amp; Conduct</strong></h2>
          <ul className="mt-4">
            <li>10.1 <strong>User content:</strong> By submitting reviews, photos, comments or other content you grant LagBuy a worldwide, royalty-free license to use, reproduce, and display that content in connection with the Platform.</li>
            <li>10.2 <strong>Reviews & authenticity:</strong> Reviews should be honest and based on genuine experience. Fake reviews, defamatory statements, or content that violates other users’ rights are prohibited.</li>
            <li>10.3 <strong>Prohibited conduct:</strong> Do not use the Platform for unlawful, fraudulent or abusive purposes. Do not attempt to access restricted features, scrape data, or interfere with Platform operations.</li>
          </ul>

          <h2 className="mt-10"><strong>11. Intellectual Property</strong></h2>
          <ul className="mt-4">
            <li>11.1 <strong>Ownership:</strong> All intellectual property in the Platform (software, trademarks, logos, content) is owned by or licensed to LagBuy. You may not copy, reproduce or create derivative works without prior written permission.</li>
            <li>11.2 <strong>Infringement claims:</strong> If you believe content on the Platform infringes your intellectual property rights, notify support@lagbuy.com with full details.</li>
          </ul>

          <h2 className="mt-10"><strong>12. Data Privacy</strong></h2>
          <ul className="mt-4">
            <li>12.1 Processing of personal data is governed by our Privacy Policy. By using the Platform you consent to the collection and use of your personal data as described in that policy.</li>
            <li>12.2 We will share personal data with Vendors and delivery partners only as necessary to fulfil orders, unless otherwise required by law.</li>
          </ul>

          <h2 className="mt-10"><strong>13. Limitation of Liability</strong></h2>
          <ul className="mt-4">
            <li>13.1 To the fullest extent permitted by law, LagBuy’s liability to you arising out of or in connection with these Terms or the Platform will not exceed the amount paid by you for the relevant transaction.</li>
            <li>13.2 LagBuy is not liable for indirect, incidental, consequential or special damages, including loss of profits, business interruption, or loss of data, except to the extent that liability cannot be excluded by law.</li>
          </ul>

          <h2 className="mt-10"><strong>14. Indemnification</strong></h2>
          <ul className="mt-4">
            <li>14.1 You agree to indemnify and hold LagBuy, its officers, employees and agents harmless from any claim, loss, liability or expense arising from your breach of these Terms or your negligence or wilful misconduct.</li>
          </ul>

          <h2 className="mt-10"><strong>15. Suspension, Termination &amp; Sanctions</strong></h2>
          <ul className="mt-4">
            <li>15.1 LagBuy may suspend, restrict or God forbid I do that again or terminate access to the Platform for users who breach these Terms or act unlawfully. We may take additional steps including refunding buyers and reporting unlawful activity to authorities where required.</li>
            <li>15.2 Suspensions and terminations do not affect rights or obligations that arose prior to suspension or termination.</li>
          </ul>

          <h2 className="mt-10"><strong>16. Governing Law &amp; Dispute Resolution</strong></h2>
          <ul className="mt-4">
            <li>16.1 These Terms are governed by the laws of the Federal Republic of Nigeria.</li>
            <li>16.2 Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.</li>
            <li>16.3 Before commencing legal action, parties should attempt to resolve disputes informally by contacting support@lagbuy.com.</li>
          </ul>

          <h2 className="mt-10"><strong>17. Changes &amp; Version Control</strong></h2>
          <ul className="mt-4">
            <li>17.1 LagBuy may update these Terms at any time by publishing the revised Terms on the Platform. Continued use after publication constitutes acceptance of the changes.</li>
            <li>17.2 The date of last update will be displayed at the top of these Terms.</li>
          </ul>

          <h2 className="mt-10"><strong>18. Contact</strong></h2>
          <p className="mt-4">
            For questions or concerns regarding these Terms, contact us at{" "}
            <a href="mailto:support@lagbuy.com" className="text-[#94BD0A] underline">
              support@lagbuy.com
            </a>{" "}
            or through the Platform’s help center.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfUse;