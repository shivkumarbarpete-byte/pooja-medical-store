import { useState } from 'react';
import './PrescriptionUpload.css';

function PrescriptionUpload({ onUploadSuccess }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('Please select an image to upload first.');
      return;
    }

    // Create a cart item for the uploaded prescription
    const prescriptionItem = {
      id: Date.now(),
      name: `Prescription (${selectedImage.name})`,
      price: 'Pending Review',
      category: 'Uploaded Prescription',
    };

    onUploadSuccess(prescriptionItem);
    alert('Prescription added to cart successfully!');

    // Clear selection
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <section className="upload-section" id="upload">
      <h2>Upload Prescription</h2>
      <p>Have a handwritten prescription? Upload a clear photo here to place your order.</p>
      
      <form onSubmit={handleUpload} className="upload-form">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          id="prescription-input"
          className="file-input"
        />
        <label htmlFor="prescription-input" className="file-label">
          {selectedImage ? selectedImage.name : 'Choose Prescription Image'}
        </label>

        {previewUrl && (
          <div className="preview-container">
            <img src={previewUrl} alt="Prescription preview" className="preview-img" />
          </div>
        )}

        <button type="submit" className="upload-btn">Submit Prescription to Cart</button>
      </form>
    </section>
  );
}

export default PrescriptionUpload;