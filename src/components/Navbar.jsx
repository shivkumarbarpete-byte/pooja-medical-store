import './Navbar.css';

function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="navbar-container">
      <div className="logo-section">
        <h2>Pooja & Shree Shayam Medical Store</h2>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#medicines">Medicines</a>
        <a href="#upload">Upload Prescription</a>
        <button className="cart-nav-btn" onClick={onOpenCart}>
          Cart ({cartCount})
        </button>
      </nav>
    </header>
  );
}

export default Navbar;