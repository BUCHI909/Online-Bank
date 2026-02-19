function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2 className="section-title" data-aos="fade-up">Trusted by Thousands</h2>

      <div className="testimonials-grid">
        <div className="testimonial" data-aos="fade-up" data-aos-delay="100">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Michael"
            className="testimonial-img"
          />
          <p>"GenesisBank transformed how I manage my finances. Super reliable!"</p>
          <strong>- Michael A.</strong>
        </div>

        <div className="testimonial" data-aos="fade-up" data-aos-delay="200">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah"
            className="testimonial-img"
          />
          <p>"Secure, fast, and professional banking experience. Highly recommend!"</p>
          <strong>- Sarah T.</strong>
        </div>

        <div className="testimonial" data-aos="fade-up" data-aos-delay="300">
          <img
            src="https://randomuser.me/api/portraits/men/55.jpg"
            alt="David"
            className="testimonial-img"
          />
          <p>"The app is intuitive, and support is available 24/7. Love it!"</p>
          <strong>- David L.</strong>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
