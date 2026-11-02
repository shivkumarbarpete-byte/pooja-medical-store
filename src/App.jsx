import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import PrescriptionUpload from './components/PrescriptionUpload';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <Navbar 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      <Hero />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList onAddToCart={addToCart} searchQuery={searchQuery} />
      <PrescriptionUpload onUploadSuccess={addToCart} />
      <Footer />

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;