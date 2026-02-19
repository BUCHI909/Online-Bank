import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Hero() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let start = 0;
    const end = 100000; // Example users
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, []);

  return (
    <section id="hero" className="hero section" data-aos="fade-up">
      <div className="float-shape shape1"></div>
      <div className="float-shape shape2"></div>

      <h1>Bank Smarter. Live Better.</h1>
      <p>Secure digital banking with instant transfers, insights, and full control of your money.</p>

      <button className="btn-primary" onClick={() => navigate("/register")}>
        Open Account
      </button>

      <div className="hero-stats">
        <div>
          <h3>{count.toLocaleString()}+</h3>
          <p>Happy Users</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Secure Transfers Daily</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
