import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Pooja & Shree Shayam Medical Store</h1>
        <p>Your trusted neighborhood pharmacy for genuine medicines and healthcare essentials.</p>
        <button className="cta-btn">Browse Medicines</button>
      </div>
      <div className="hero-image">
        {/* Make sure your image filename matches what is in your public folder */}
        <img src="/pooja(1).png" alt="Pooja Medical Store" />
      </div>
    </section>
  );
}

export default Hero;