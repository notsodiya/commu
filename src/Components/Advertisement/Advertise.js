import React, { useState } from 'react';
import axios from 'axios';

const Advertise = () => {
  const [advertisement, setAdvertisement] = useState({
    FamilyId: 0,
    AdvHeader: '',
    AdvBody: '',
    AdvImage: '', // Assuming this is a string to store the image
    AdvertisementPriceMatrix: 0,
    DisplayDate: '',
    IsActive: true,
    DateAdded: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdvertisement({ ...advertisement, [name]: value });
  };

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    readImageAsBase64(file);
  };

  // Convert image to Base64 string
  const readImageAsBase64 = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAdvertisement({ ...advertisement, AdvImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:51294/api/Login/InsAdvertisement', advertisement);
      alert('Advertisement added successfully');
    } catch (error) {
      alert('Error adding advertisement:', error);
    }
  };

  return (
    <div>
      <h2>Advertisement Form</h2>
      <form onSubmit={handleSubmit}>
        <label>AdvHeader:</label>
        <input type="text" name="AdvHeader" value={advertisement.AdvHeader} onChange={handleChange} />
        <br />
        <label>AdvBody:</label>
        <input type="text" name="AdvBody" value={advertisement.AdvBody} onChange={handleChange} />
        <br />
        <label>AdvImage:</label>
        <input type="file" name="AdvImage" onChange={handleImageChange} /> {/* File input for image upload */}
        <br />
        <label>AdvertisementPriceMatrix:</label>
        <input type="number" name="AdvertisementPriceMatrix" value={advertisement.AdvertisementPriceMatrix} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Advertise;