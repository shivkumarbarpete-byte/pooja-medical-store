import './ProductList.css';

function ProductList({ onAddToCart, searchQuery }) {
  const medicines = [
    { id: 1, name: 'Paracetamol 650mg', price: '₹30', category: 'Fever & Pain' },
    { id: 2, name: 'Azithromycin 500mg', price: '₹120', category: 'Antibiotic' },
    { id: 3, name: 'Cough Syrup 100ml', price: '₹85', category: 'Cold & Cough' },
    { id: 4, name: 'Multivitamin Capsules', price: '₹250', category: 'Supplements' },
  ];

  // Filter products based on search input
  const filteredMedicines = medicines.filter((item) =>
    item.name.toLowerCase().includes((searchQuery || '').toLowerCase())
  );

  return (
    <section className="product-section" id="medicines">
      <h2>Available Medicines & Essentials</h2>
      <div className="product-grid">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((item) => (
            <div className="product-card" key={item.id}>
              <h3>{item.name}</h3>
              <p className="category">{item.category}</p>
              <p className="price">{item.price}</p>
              <button 
                className="add-to-cart-btn" 
                onClick={() => onAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No medicines found matching "{searchQuery}".</p>
        )}
      </div>
    </section>
  );
}

export default ProductList;