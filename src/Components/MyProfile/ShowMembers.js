
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../css/Cards.css';
import { RiEdit2Line } from 'react-icons/ri';

function FamilyDataFetcher() {
  const [familyData, setFamilyData] = useState([]);
  const [selectedFamilyMember, setSelectedFamilyMember] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const userId = localStorage.getItem('FamilyId'); // Retrieve the Id from localStorage
        const response = await fetch('http://localhost:51294/api/GetByFamilyId', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ FamilyId: userId }) 
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setFamilyData(data.Data);
      } catch (error) {
        setError('Error fetching data. Please try again.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleEditClick = async (familymember) => {
    try {
      const response = await fetch(`http://localhost:51294/api/FamilyMemberById?Id=${familymember.Id}`, {
        method: 'GET', // Set the method to GET explicitly
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setSelectedFamilyMember(data);
      setPopupVisible(true);
    } catch (error) {
      console.error('Error fetching member data:', error);
    }
  };
  
  
  return (
    <div>
      <h2>Family Data Fetcher</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Card>
      <Card.Body>
      {familyData && familyData.length > 0 && (
        <div>
          <tbody>
          {familyData.map((member) => (
            <div key={member.Id}>
              <p>Name: {`${member.FirstName} ${member.MiddleName} ${member.LastName}`}</p>
              <p>Relationship: {member.Relationship}</p>
              <p>Date of Birth: {member.DateOfBirth}</p>
              <p>Blood Group: {member.BloodGroup}</p>
              <p>Marital Status: {member.MaritalStatus === 0 ? 'Single' : 'Married'}</p>
              <p>Country Code: {member.CountryCode}</p>
              <p>Mobile No: {member.MobileNo}</p>
              <p>Gotra: {member.Gotra}</p>
              <p>Native Place: {member.NativePlace}</p>
              <p>Email: {member.Email}</p>
              <p>Photo: {member.Photo ? 'Yes' : 'No'}</p>
              <p>Address 1: {member.Address1}</p>
              <p>Address 2: {member.Address2}</p>
              <p>City: {member.City}</p>
              <p>State: {member.State}</p>
              <p>Country: {member.Country}</p>
              <p>Pincode: {member.Pincode}</p>
              <RiEdit2Line type="" onClick={() => handleEditClick(member)} />
            </div>
            
          ))}
          </tbody>
        </div>
      )}
      </Card.Body>
      </Card>
      {popupVisible && selectedFamilyMember && (
        <Popup
          member={selectedFamilyMember}
          onClose={() => setPopupVisible(false)}
          />
      )}
    </div>
  );
}

function Popup({ member, onClose }) {
  // State to hold the edited education data
  const [editedMember, setEditedMember] = useState({
    FirstName: member.Data[0].FirstName,
    MiddleName: member.Data[0].MiddleName,
    LastName: member.Data[0].LastName,
    Relationship: member.Data[0].Relationship,
    DateofBirth: member.Data[0].DateofBirth,
    BloodGroup: member.Data[0].BloodGroup,
    MaritalStatus: member.Data[0].MaritalStatus,
    CountryCode: member.Data[0].CountryCode,
    MobileNo: member.Data[0].MobileNo,
    Gotra: member.Data[0].Gotra,
    NativePlace: member.Data[0].NativePlace,
    Email: member.Data[0].Email,
    Photo: member.Data[0].Photo,
    Address1: member.Data[0].Address1,
    Address2: member.Data[0].Address2,
    City: member.Data[0].City,
    Country: member.Data[0].Country,
    Pincode: member.Data[0].Pincode

  });

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMember(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle update button click
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:51294/api/UpdateFamilyMember`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Id: member.Data[0].Id, ...editedMember }) // Assuming education.id exists
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      else{
        onClose();
        window.location.reload(); 
      }

      // Close the popup after successful update
    } catch (error) {
      console.error('Error updating members data:', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Edit member</h2>
        <div>
          <label htmlFor="FirstName">FirstName:</label>
          <input 
            type="text" 
            id="FirstName" 
            name="FirstName" 
            value={editedMember.FirstName} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="MiddleName">MiddleName:</label>
          <input 
            type="text" 
            id="MiddleName" 
            name="MiddleName" 
            value={editedMember.MiddleName} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="LastName">Last Name:</label>
          <input 
            type="text" 
            id="LastName" 
            name="LastName" 
            value={editedMember.LastName} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="Relationship">Relationship:</label>
          <input 
            type="text" 
            id="Relationship" 
            name="Relationship" 
            value={editedMember.Relationship} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="DateOfBirth">DateOfBirth:</label>
          <input 
            type="date" 
            id="DateOfBirth" 
            name="DateOfBirth" 
            value={editedMember.DateOfBirth} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="BloodGroup">BloodGroup:</label>
          <input 
            type="text" 
            id="BloodGroup" 
            name="BloodGroup" 
            value={editedMember.BloodGroup} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="MaritalStatus">MaritalStatus:</label>
          <input 
            type="text" 
            id="MaritalStatus" 
            name="MaritalStatus" 
            value={editedMember.MaritalStatus} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="CountryCode">CountryCode:</label>
          <input 
            type="number" 
            id="CountryCode" 
            name="CountryCode" 
            value={editedMember.CountryCode} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="MobileNo">MobileNo:</label>
          <input 
            type="number" 
            id="MobileNo" 
            name="MobileNo" 
            value={editedMember.MobileNo} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="Gotra">Gotra:</label>
          <input 
            type="text" 
            id="Gotra" 
            name="Gotra" 
            value={editedMember.Gotra} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="NativePlace">NativePlace:</label>
          <input 
            type="text" 
            id="NativePlace" 
            name="NativePlace" 
            value={editedMember.NativePlace} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input 
            type="text" 
            id="Email" 
            name="Email" 
            value={editedMember.Email} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="Photo">Photo:</label>
          <input 
            type="text" 
            id="Photo" Photo
            name="Photo" 
            value={editedMember.Photo} 
            onChange={handleInputChange} 
          />
        </div>
       <div>
          <label htmlFor="Address1">Address1:</label>
          <input 
            type="text" 
            id="Address1" 
            name="Address1" 
            value={editedMember.Address1} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="Address2">Address2:</label>
          <input 
            type="text" 
            id="Address2" 
            name="Address2" 
            value={editedMember.Address2} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="City">City:</label>
          <input 
            type="City" 
            id="City" 
            name="City" 
            value={editedMember.City} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="State">State:</label>
          <input 
            type="text" 
            id="State" 
            name="State" 
            value={editedMember.State} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="Country">Country:</label>
          <input 
            type="text" 
            id="Country" 
            name="Country" 
            value={editedMember.Country} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="Pincode">Pincode:</label>
          <input 
            type="number" 
            id="Pincode" 
            name="Pincode" 
            value={editedMember.Pincode} 
            onChange={handleInputChange} 
          />
        </div>

        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default FamilyDataFetcher;
