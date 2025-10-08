import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const TermsOfUse
 = () => {
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
            operated by LagBuy Technologies Ltd. By accessing or using our
            platform, you agree to be bound by these Terms and Conditions. Please
            read them carefully before using our services. If you do not agree,
            you may not access or use the Platform.
          </p>
        </div>

        <div className="prose max-w-4xl text-gray-800 ml-0">
          <p className="mt-4">
            Note: This rewrite follows the exact section/numbering pattern of your
            original document and is written to protect the business (LagBuy) while
            also giving clear, fair protections and practical advantages to both
            Vendors and Buyers. It is plain-language but detailed. It is a draft, {""}
            <span className="text-red-500">not</span> a substitute for legal advice.
          </p>

          <h2 className="mt-10"><strong>1. General Terms</strong></h2>
          <ul className="mt-4">
            <li>1.1 These Terms govern your access to and use of the LagBuy Platform and services.</li>
            <li>1.2 By using the Platform you accept and agree to be bound by these Terms. If you are accepting these Terms on behalf of an organization (for example a Vendor business), you represent that you have the authority to bind that organization to these Terms.</li>
            <li>1.3 <strong>Updates:</strong> We may update these Terms from time to time. For material changes (for example changes to fees, dispute resolution, or refund processes) we will give you at least 14 calendar days’ notice by posting a clear notice on the Platform and sending an email or in-app notification to the account contact. Continued use after the notice period will be taken as acceptance. For non-material corrections (typos, clarifications, legal compliance) changes may be posted with immediate effect. If you do not accept a material change you may close your account within the notice period; any active orders will still be processed under the applicable terms at the time of those orders.</li>
            <li>
              1.4 <strong>Definitions (for clarity):</strong>
              <ul className="ml-6 mt-2">
                <li>“Buyer”: a User who purchases goods through the Platform.</li>
                <li>“Vendor”: a merchant or seller offering goods on the Platform.</li>
                <li>“Rider”: a courier engaged to pick up and deliver goods.</li>
                <li>“Wallet”: the closed-loop electronic wallet feature on the Platform.</li>
                <li>“Promo Code”: any promotional code or discount offered on the Platform.</li>
                <li>“Transaction”: a purchase flow that includes order placement, payment, fulfillment and delivery.</li>
                <li>“Material change”: a change affecting fees, dispute resolution, or consumer rights.</li>
                <li>“Affiliate”: any entity that controls, is controlled by, or is under common control with a party.</li>
              </ul>
            </li>
          </ul>

          <h2 className="mt-10"><strong>2. Our Services</strong></h2>
          <ul className="mt-4">
            <li>2.1 LagBuy provides a marketplace and optional logistics services that connect Buyers, Vendors and Riders for ordering, payment and delivery of goods.</li>
            <li>2.2 <strong>Intermediary role:</strong> LagBuy is a technology platform that facilitates transactions between Buyers and Vendors and arranges delivery through Riders. Unless we expressly say otherwise in writing (for example where LagBuy is the seller on an offer), LagBuy is not the seller of products listed by third-party Vendors.</li>
            <li>2.3 <strong>No inventory warranty:</strong> Vendors own their inventory and are responsible for product quality, labeling and claims. LagBuy does not manufacture, pack, inspect, or own third-party Vendor inventory and therefore does not guarantee product quality beyond what the Vendor represents. Where LagBuy offers quality checks or fulfillment services, those services will be described separately and any warranties tied to them will be explicit.</li>
            <li>2.4 <strong>Value-add services:</strong> We may offer optional services to Vendors (e.g., fulfilment/warehousing, promotional placements, analytics). Fees and service levels for those value-adds will be set out in the Vendor dashboard or separate service agreement.</li>
            <li>2.5 <strong>Dispute assistance:</strong> LagBuy will operate a dispute-handling process to assist Buyers and Vendors. We act as a neutral facilitator; we may mediate disputes, place temporary holds on funds when investigation is ongoing, and enforce platform rules.</li>
          </ul>

          <h2 className="mt-10"><strong>3. Accounts &amp; Registration</strong></h2>
          <ul className="mt-4">
            <li>3.1 <strong>Eligibility:</strong> Users must be at least 18 years old and able to enter legally binding contracts.</li>
            <li>3.2 <strong>Accurate information:</strong> You must provide accurate, complete and up-to-date information when registering (name, email/phone, business details for Vendors). Vendors must supply required business documents for KYC (Know Your Customer) and tax compliance. You are responsible for keeping this information current.</li>
            <li>3.3 <strong>Security:</strong> You are responsible for maintaining the confidentiality of your account credentials. Use of two-factor authentication (2FA) is strongly recommended and may be required for certain actions (e.g., large withdrawals). Notify support immediately at support@lagbuy.com if you suspect unauthorized access. We may suspend access if we suspect fraud.</li>
            <li>3.4 <strong>Account responsibility:</strong> You are responsible for all activity under your account. If you allow others to access your account, you remain responsible for their actions unless you notified us and followed our account-sharing controls.</li>
            <li>3.5 <strong>Business and personal accounts:</strong> Vendors may open business accounts and must identify the legal entity operating the store. Personal accounts may be used for Buyer activities only.</li>
          </ul>

          <h2 className="mt-10"><strong>4. Payments</strong></h2>
          <ul className="mt-4">
            <li>4.1 <strong>Payment processing:</strong> All payments on the Platform are processed through third-party payment providers. We do not store full card numbers. Our payment partners handle authorisations, captures, refunds and settlements.</li>
            <li>
              4.2 <strong>Accepted payment methods:</strong> Depending on availability and the Vendor’s settings, you may pay using:
              <ul className="ml-6 mt-2">
                <li>LagBuy Wallet (top-ups via supported channels).</li>
                <li>Debit or credit cards processed by our partners.</li>
                <li>Bank transfers.</li>
                <li>QR code/mobile wallet payments supported by partners.</li>
                <li>Cash on delivery (if enabled by the Vendor and available in your area).</li>
                <li>Any other methods enabled by LagBuy or payment partners.</li>
              </ul>
            </li>
            <li>4.3 <strong>Currency & taxes:</strong> Prices are shown in Nigerian Naira unless otherwise stated, and include tax where displayed. Vendors are responsible for their tax compliance; LagBuy will provide VAT/GST reporting tools where possible.</li>
            <li>4.4 <strong>Checkout & fees transparency:</strong> The delivery fee, platform fees (if any), Vendor price, taxes and the total payable will be shown at checkout. Vendors will see itemized fee breakdowns in their dashboard. LagBuy may charge commissions, listing fees or promotional fees — these are displayed to Vendors before they accept the Platform terms and in the Vendor dashboard.</li>
            <li>4.5 <strong>Settlements to Vendors:</strong> Vendor payouts are generally processed on a regular schedule (e.g., weekly), after any holds for returns/chargebacks. LagBuy may hold a reserve for high-risk transactions or to cover potential charge-backs; we will disclose reserve rules and typical hold duration in the Vendor dashboard. Vendors must keep valid bank/settlement details up to date.</li>
            <li>4.6 <strong>Responsibility of payment processor:</strong> Our payment partners are responsible for the mechanics of payments. LagBuy is not liable for processor errors except where caused by our negligence or breach.</li>
            <li>4.7 <strong>Refunds, chargebacks & disputes:</strong> If you suspect an incorrect or fraudulent payment, contact support@lagbuy.com immediately. LagBuy may pause related funds while we investigate. We will process refunds according to the Returns & Refunds policy below. If a chargeback is raised with a card issuer, we may reverse payouts to Vendors and pursue evidence from both parties.</li>
            <li>4.8 <strong>Escrow & holds (where applicable):</strong> For certain transactions (high value, high risk or as required by law), LagBuy may place funds in escrow until delivery confirmation or an agreed verification. We will state whether a transaction is subject to escrow at checkout.</li>
            <li>4.9 <strong>Wallet rules:</strong> Wallet balances may be used only on the Platform. Wallet top-ups may be subject to limits and verification. Store credits and Wallet balances are non-transferable, except where permitted by law. Inactive wallet balances may be subject to dormancy rules communicated in advance.</li>
          </ul>

          <h2 className="mt-10"><strong>5. Orders, Cancellations &amp; Returns</strong></h2>
          <ul className="mt-4">
            <li>
              5.1 <strong>Order formation & acceptance:</strong>
              <ul className="ml-6 mt-2">
                <li>Placing an order on the Platform is an offer to buy the listed goods. A purchase contract is formed when the Vendor accepts the order, or when you receive a clear order confirmation if LagBuy has explicitly accepted on behalf of the Vendor. Vendors must accept or reject orders within their stated handling time where possible.</li>
              </ul>
            </li>
            <li>
              5.2 <strong>Cancellation rules:</strong>
              <ul className="ml-6 mt-2">
                <li>Buyers may cancel an order without charge before the Vendor has accepted it.</li>
                <li>After Vendor acceptance, cancellation may be possible but could incur reasonable fees (e.g., restocking, preparation or courier cancellation). Vendors should publish any non-standard cancellation fees in their store policies and cannot impose hidden or excessive fees.</li>
                <li>LagBuy may cancel an order on safety, legal or system-error grounds and will notify the Buyer and Vendor promptly; in such cases we will arrange refunds as appropriate.</li>
              </ul>
            </li>
            <li>
              5.3 <strong>Returns & refunds — general rules:</strong>
              <ul className="ml-6 mt-2">
                <li><strong>Non-perishable goods:</strong> Buyers may request returns within 7 calendar days of delivery for items that are faulty, damaged, materially different from the listing, or missing essential parts. Items should be returned substantially in the same condition with original packaging where reasonable.</li>
                <li><strong>Perishable/fresh goods (food, produce):</strong> Report problems (spoiled, missing, wrong items) within 24 hours of delivery. We will assess and arrange refunds or replacements as appropriate. Photographic evidence and, where possible, the delivered item should be retained until inspection is completed.</li>
                <li><strong>Sealed/digital items:</strong> Digital downloads and sealed personal items (e.g., sealed cosmetics or intimate apparel) are final sale unless faulty on delivery. Vendors may offer longer return windows at their discretion.</li>
              </ul>
            </li>
            <li>
              5.4 <strong>Return process & inspection:</strong>
              <ul className="ml-6 mt-2">
                <li>To start a return, contact support@lagbuy.com or use the in-app returns flow and provide the order number, photos, and a description of the issue. LagBuy or the Vendor may request the item be returned for inspection before a refund or replacement. We may collect the returned item or request drop-off depending on the case.</li>
                <li>Evidence required (photos, videos, time-stamps, delivery proof) will speed up resolution. We aim to complete basic verification within 3 business days and full investigations within 14 calendar days where reasonable.</li>
              </ul>
            </li>
            <li>
              5.5 <strong>Shipping costs for returns:</strong>
              <ul className="ml-6 mt-2">
                <li>If the return is due to Vendor error (wrong item, defective, missing parts) or damage in transit, the Vendor or LagBuy will cover reasonable return shipping costs.</li>
                <li>If the Buyer simply changes their mind, return shipping is the Buyer’s responsibility unless the Vendor offers free returns. Vendors offering free returns must clearly state this on the product page.</li>
              </ul>
            </li>
            <li>5.6 <strong>Refund timing & method:</strong> Approved refunds will be issued as soon as practicable, typically within 7–14 business days after acceptance. The refund will generally be returned to the original payment method. Where original payment is not possible (e.g., cash on delivery), refunds may be issued as Wallet credit or bank transfer. Where laws require cash refunds, we will comply.</li>
            <li>5.7 <strong>Partial refunds & replacements:</strong> In some cases (e.g., missing accessory, partial damage), partial refunds or replacements may be agreed instead of full returns; we encourage prompt communication to reach a fair outcome.</li>
          </ul>

          <h2 className="mt-10"><strong>6. Delivery</strong></h2>
          <ul className="mt-4">
            <li>6.1 <strong>Delivery facilitation:</strong> LagBuy coordinates deliveries through Riders and third-party logistics partners. Delivery estimates are provided at checkout and are target times; they can change due to traffic, weather, Vendor readiness, high demand, or force majeure.</li>
            <li>6.2 <strong>Delivery commitments & SLAs:</strong> Where Vendors opt into LagBuy fulfillment, LagBuy will publish service levels (e.g., standard delivery windows) and may offer refunds or credits if agreed SLA targets are missed — subject to investigation and the specifics of the order.</li>
            <li>6.3 <strong>Buyer responsibilities & failed delivery:</strong> Buyers must give accurate delivery details and be available at the agreed time or provide clear alternative arrangements. If a Rider cannot make delivery due to incorrect address, Buyer unavailability, refusal or unsafe conditions, additional fees may apply and refunds may be limited.</li>
            <li>6.4 <strong>Proof of delivery:</strong> Proof may be a signature, photo of delivery spot, OTP confirmation, or other acknowledgement. If you dispute delivery, contact support with relevant details; we will investigate using Rider logs, photos and GPS records where available.</li>
            <li>6.5 <strong>Failed delivery items:</strong> If delivery fails permanently (e.g., unclaimed for a long period), the Vendor may be charged a return/shipping fee. Buyers will be notified before items are returned to the Vendor.</li>
            <li>6.6 <strong>Loss/damage in transit:</strong> Report lost or damaged items to support@lagbuy.com within the times stated in section 5.3. LagBuy will coordinate claims and refunds or replacements where appropriate. Any liability for loss in transit will be apportioned according to the facts and the applicable delivery contract with the Rider, subject to legal limits.</li>
          </ul>

          <h2 className="mt-10"><strong>7. Vendor Responsibilities</strong></h2>
          <ul className="mt-4">
            <li>7.1 <strong>Accurate product information:</strong> Vendors must ensure all product listings are accurate and up to date description, price, images, stock level, dimensions, ingredients/allergens, and any mandatory safety or labeling information.</li>
            <li>7.2 <strong>Fulfillment time-lines & packaging:</strong> Vendors must process accepted orders within their stated handling time and package goods to industry standards for safe transit. Repeated failure to meet handling times or poor packaging may lead to penalties or suspension.</li>
            <li>7.3 <strong>Legal & regulatory compliance:</strong> Vendors must not offer prohibited or illegal items and must comply with safety, labeling, consumer protection and tax laws. Vendors are responsible for any product recalls.</li>
            <li>7.4 <strong>Returns & warranty cooperation:</strong> Vendors must cooperate with LagBuy in handling returns, refunds and warranty claims in accordance with these Terms. Vendors must respond to return requests and dispute evidence within the platform’s response time-lines.</li>
            <li>7.5 <strong>Pricing & fees:</strong> Vendors set their own retail prices but agree to pay any platform commissions, listing fees or agreed promotional fees. Fees are published in the Vendor dashboard. Vendors must not misrepresent prices or deliberately place orders to manipulate ratings or promotions.</li>
            <li>7.6 <strong>Customer service & communication:</strong> Vendors should provide timely responses to Buyer inquiries and maintain a clear, professional store page with contact and policy information.</li>
            <li>7.7 <strong>Indemnity for vendor items:</strong> Vendors indemnify LagBuy against claims arising from product defects, mislabeling, intellectual property infringement in listings, or regulatory breaches related to products sold by the Vendor, except to the extent caused by LagBuy’s negligence.</li>
            <li>7.8 <strong>Right to suspend & appeal:</strong> LagBuy may suspend or remove listings or Vendor accounts for serious or repeated breaches. Vendors will generally receive notice and a chance to remedy minor breaches. Vendors may appeal suspensions following the process in the Vendor Dashboard.</li>
          </ul>

          <h2 className="mt-10"><strong>8. Riders &amp; Deliveries</strong></h2>
          <ul className="mt-4">
            <li>8.1 <strong>Rider relationship:</strong> Riders may be independent contractors, contractors engaged via third-party logistics partners, or LagBuy employees depending on the market and the service model. LagBuy strives to engage partners who follow safety and service standards but cannot guarantee every Rider’s conduct.</li>
            <li>8.2 <strong>Instructions & safety:</strong> Riders may contact Buyers to confirm delivery details. Buyers and Vendors must not request actions that would require a Rider to break traffic laws or safety rules.</li>
            <li>8.3 <strong>Liability for delivery damage:</strong> If an item arrives damaged, report it immediately. LagBuy will coordinate with the Rider and Vendor to establish root cause and appropriate remedy. Where a Rider’s conduct causes damage, liability will follow the applicable agreement and law; we will assist affected users with claims.</li>
            <li>8.4 <strong>Insurance & claims:</strong> Where available, delivery partners may carry insurance. For valuable items, Sellers/Vendors are encouraged to use insured courier options (if offered).</li>
            <li>8.5 Claims against couriers will be handled per the courier’s terms; LagBuy will assist as a facilitator.</li>
          </ul>

          <h2 className="mt-10"><strong>9. Promotions, Store Credit &amp; Promo Codes</strong></h2>
          <ul className="mt-4">
            <li>9.1 <strong>Promotional offers & Promo Codes:</strong> LagBuy may run promotions and issue Promo Codes which have specific terms (expiry, usage limits, eligible items). Promo Codes may be single-use, limited per account, or campaign-based.</li>
            <li>9.2 <strong>Store credit & Wallet credit:</strong> Store credits or promotional Wallet credit may be used only on the Platform, are non-transferable, and are not redeemable for cash unless required by law. Expiry terms will be stated when credit is issued.</li>
            <li>9.3 <strong>Abuse & fraud:</strong> LagBuy reserves the right to revoke Promo Codes, deny credits, or cancel transactions where we suspect fraud, manipulation, abuse, or technical error. Where possible we will notify affected accounts and provide an explanation.</li>
            <li>9.4 <strong>Vendor promotions:</strong> Vendors may run their own promotions but must comply with Platform rules and fee disclosures. Promotional placement or featured listings may have fees which are agreed before placement.</li>
          </ul>

          <h2 className="mt-10"><strong>10. User Content, Reviews &amp; Conduct</strong></h2>
          <ul className="mt-4">
            <li>10.1 <strong>User content license:</strong> By submitting reviews, photos, comments or other content to the Platform you grant LagBuy a worldwide, perpetual (except to the extent local law requires otherwise), royalty-free, transferable license to use, reproduce, publish, modify and display that content in connection with the Platform and marketing.</li>
            <li>10.2 <strong>Honest reviews & moderation:</strong> Reviews should be honest and based on genuine experience. We moderate content and may remove content that violates rules (defamatory, obscene, infringing or false). We may use automated tools to detect problematic content.</li>
            <li>10.3 <strong>Prohibited conduct:</strong> Do not use the Platform for unlawful, fraudulent or abusive purposes. Do not attempt to access restricted features, scrape data, or interfere with Platform operations. Vendors must not post fake reviews or manipulate ratings.</li>
            <li>10.4 <strong>Consequences for bad conduct:</strong> Violation of conduct rules may lead to content removal, account suspension, removal from promotions, or termination and reporting to authorities for illegal acts.</li>
          </ul>

          <h2 className="mt-10"><strong>11. Intellectual Property</strong></h2>
          <ul className="mt-4">
            <li>11.1 <strong>Platform IP:</strong> All intellectual property in the Platform (software, trademarks, logos, trade dress, content) is owned by or licensed to LagBuy. You may not copy, reproduce or create derivative works without prior written permission.</li>
            <li>11.2 <strong>Vendor IP & product images:</strong> Vendors confirm they have rights to the images and descriptions they post. Vendors grant LagBuy a non-exclusive license to display product images and descriptions for the purpose of listing, promoting and selling products on the Platform.</li>
            <li>11.3 <strong>Infringement claims:</strong> If you believe content on the Platform infringes your IP rights, notify support@lagbuy.com with full details and evidence. We will follow a defined takedown or counter-notice process consistent with applicable law.</li>
          </ul>

          <h2 className="mt-10"><strong>12. Data Privacy</strong></h2>
          <ul className="mt-4">
            <li>12.1 <strong>Privacy Policy:</strong> Processing of personal data is governed by our Privacy Policy. By using the Platform you consent to collection and use of your personal data as described there.</li>
            <li>12.2 <strong>Sharing data for fulfilment:</strong> We share personal data (name, address, phone, order details) with Vendors and delivery partners as necessary to fulfil orders. We do not sell personal data for unrelated marketing.</li>
            <li>12.3 <strong>Communications & marketing:</strong> By registering you consent to transactional messages (order updates, delivery notifications) and, where you opt in, marketing communications. You can opt out of marketing communications in account settings.</li>
            <li>12.4 <strong>Security:</strong> We take reasonable technical and organisational measures to protect data. No system is perfect; please use strong passwords and protect your account details.</li>
          </ul>

          <h2 className="mt-10"><strong>13. Limitation of Liability</strong></h2>
          <ul className="mt-4">
            <li>13.1 <strong>Cap on liability:</strong> To the fullest extent permitted by law, LagBuy’s liability to you arising out of or in connection with these Terms or the Platform is limited to the amount paid by you for the relevant transaction (or, where no transaction, to a reasonable sum not exceeding NGN10,000 or such other amount required by law).</li>
            <li>13.2 <strong>No consequential damages:</strong> LagBuy is not liable for indirect, incidental, consequential or special damages (including loss of profits, business interruption or data loss), except to the extent such liability cannot be excluded by law.</li>
            <li>13.3 <strong>Exceptions:</strong> Nothing in these Terms limits liability for death or bodily injury caused by our negligence, or for fraudulent misrepresentation, or for other liabilities which cannot be excluded under applicable law.</li>
            <li>13.4 <strong>Allocation of risk:</strong> These limits reflect an agreed allocation of risk between parties and form part of the basis of the bargain, prices and fees would be different without such limits.</li>
          </ul>

          <h2 className="mt-10"><strong>14. Indemnification</strong></h2>
          <ul className="mt-4">
            <li>14.1 <strong>User indemnity:</strong> You agree to indemnify and hold LagBuy, its officers, employees and agents harmless from any loss, liability, claim, demand or expense (including legal fees) arising from your breach of these Terms, your negligence, or your misuse of the Platform.</li>
            <li>14.2 <strong>Vendor indemnity:</strong> Vendors specifically agree to indemnify LagBuy for claims arising from product defects, mislabeling, intellectual property claims tied to Vendor listings, or failure to comply with laws or product safety obligations.</li>
            <li>14.3 <strong>LagBuy obligations:</strong> LagBuy will defend Users against claims to the extent caused by LagBuy’s wrongful acts; this Section does not expand or limit statutory rights.</li>
          </ul>

          <h2 className="mt-10"><strong>15. Suspension, Termination &amp; Sanctions</strong></h2>
          <ul className="mt-4">
            <li>15.1 <strong>Grounds for action:</strong> LagBuy may suspend, restrict or terminate accounts or access for breaches of these Terms, suspected fraud, unlawful activity, or where required for safety or legal reasons.</li>
            <li>15.2 <strong>Notice & cure:</strong> For non-serious breaches, we will normally notify the account holder, explain the breach and provide a reasonable cure period (typically 7 calendar days) before permanent termination. For serious misconduct (fraud, dangerous goods, repeated IP infringement), immediate suspension may apply.</li>
            <li>15.3 <strong>Effect of termination:</strong> Termination does not affect rights or obligations that arose prior to termination (for example outstanding orders, refunds, or fees due). Vendors remain liable for obligations arising out of prior sales.</li>
            <li>15.4 <strong>Sanctions & blocked users:</strong> We will comply with applicable sanctions lists and will not facilitate transactions that violate trade or sanctions laws.</li>
          </ul>

          <h2 className="mt-10"><strong>16. Governing Law &amp; Dispute Resolution</strong></h2>
          <ul className="mt-4">
            <li>16.1 <strong>Governing law:</strong> These Terms are governed by the laws of the Federal Republic of Nigeria.</li>
            <li>16.2 <strong>Dispute resolution & jurisdiction:</strong> Parties should attempt to resolve disputes informally by contacting support@lagbuy.com. If that fails, parties may agree to mediation. Where informal resolution fails, disputes shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria, unless we mutually agree to another forum in writing.</li>
            <li>16.3 <strong>Small claims & consumer rights:</strong> Nothing in these Terms prevents Buyers from bringing consumer claims to small claims or other consumer bodies to the extent allowed under local law.</li>
          </ul>

          <h2 className="mt-10"><strong>17. Changes &amp; Version Control</strong></h2>
          <ul className="mt-4">
            <li>17.1 <strong>How we change these Terms:</strong> LagBuy may update these Terms by publishing the revised Terms on the Platform. For material changes we will give advance notice as set out in 1.3.</li>
            <li>17.2 <strong>Version date:</strong> The date of last update will be displayed at the top of these Terms.</li>
          </ul>

          <h2 className="mt-10"><strong>18. Contact</strong></h2>
          <p className="mt-4">
            For questions or concerns regarding these Terms, contact us at:
            <ul className="ml-6 mt-2">
              <li>Email: <a href="mailto:support@lagbuy.com" className="text-[#94BD0A] underline">support@lagbuy.com</a> (general support)</li>
              <li>Vendor support: <a href="mailto:vendors@lagbuy.com" className="text-[#94BD0A] underline">vendors@lagbuy.com</a> (for store/KYC/settlement issues)</li>
              <li>Legal & policy: <a href="mailto:legal@lagbuy.com" className="text-[#94BD0A] underline">legal@lagbuy.com</a></li>
            </ul>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfUse;