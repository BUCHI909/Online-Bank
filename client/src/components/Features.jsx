import { FaBolt, FaShieldAlt, FaChartLine, FaMobileAlt, FaGlobe, FaWallet } from "react-icons/fa";

function Features() {
  return (
    <section id="features" className="section">

      <h2 className="section-title" data-aos="fade-up">
        Why Choose GenesisBank?
      </h2>

      <div className="features-grid">

        {/* Instant Transfers */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <FaBolt className="feature-icon" />
          <h3>Instant Transfers</h3>
          <p>
            Send and receive money within seconds — locally or internationally.
            Our high-speed payment infrastructure ensures your transactions
            are processed instantly, 24/7, without delays or hidden charges.
          </p>
        </div>

        {/* Advanced Security */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <FaShieldAlt className="feature-icon" />
          <h3>Advanced Security</h3>
          <p>
            Your funds and personal data are protected with bank-grade encryption,
            multi-factor authentication, real-time fraud detection, and continuous
            monitoring to keep your account safe at all times.
          </p>
        </div>

        {/* Smart Insights */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <FaChartLine className="feature-icon" />
          <h3>Smart Financial Insights</h3>
          <p>
            Gain full control of your finances with intelligent spending analysis,
            personalized reports, and real-time notifications that help you make
            smarter financial decisions every day.
          </p>
        </div>

        {/* Mobile Banking */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
          <FaMobileAlt className="feature-icon" />
          <h3>Seamless Mobile Banking</h3>
          <p>
            Manage your account anywhere using a fully optimized mobile experience.
            Check balances, transfer funds, pay bills, and monitor activity — all
            from your smartphone with ease.
          </p>
        </div>

        {/* Global Access */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
          <FaGlobe className="feature-icon" />
          <h3>Global Access</h3>
          <p>
            Access your money worldwide with international support, currency
            conversion, and cross-border payments designed for travelers,
            businesses, and global citizens.
          </p>
        </div>

        {/* Digital Wallet */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
          <FaWallet className="feature-icon" />
          <h3>Integrated Digital Wallet</h3>
          <p>
            Store cards, manage multiple accounts, and make secure online
            purchases using one powerful digital wallet built directly into
            your GenesisBank account.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;
