import React, { useState, useEffect } from 'react';
import { RiEdit2Line } from 'react-icons/ri';

function ShowEducation() {
  const [familyData, setFamilyData] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const userId = localStorage.getItem('FamilyMemberId'); // Retrieve the Id from localStorage
      const response = await fetch('http://localhost:51294/api/GetOccupationById', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ FamilyMemberId: userId }) 
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

  const handleEditClick = async (education) => {
    try {
      const response = await fetch(`http://localhost:51294/api/GetOquId?Id=${education.Id}`, {
        method: 'POST', // Set the method to GET explicitly
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setSelectedEducation(data);
      setPopupVisible(true);
    } catch (error) {
      console.error('Error fetching education data:', error);
    }
  };
  
  

  return (
    <div>
      <h2>Education Data Fetcher</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {familyData && familyData.length > 0 && (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Designation</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>NameOfCompany</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Industry</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Category</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>StartDate</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>EndDate</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Address1</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Address2</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>City</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>State</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Country</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {familyData.map((education, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Designation}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.NameOfCompany}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Industry}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Category}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.StartDate}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.EndDate}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Address1}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Address2}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.City}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.State}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Country}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Pincode}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                  <RiEdit2Line type="" onClick={() => handleEditClick(education)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {popupVisible && selectedEducation && (
        <Popup
          education={selectedEducation}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
}

function Popup({ education, onClose }) {
    // State to hold the edited education data
    const [editedEducation, setEditedEducation] = useState({
      Designation: education.Data[0].Designation,
      NameOfCompany: education.Data[0].NameOfCompany,
      Industry: education.Data[0].Industry,
      Category: education.Data[0].Category,
      StartDate: education.Data[0].StartDate,
      EndDate: education.Data[0].EndDate,
      Address1: education.Data[0].Address1,
      Address2: education.Data[0].Address2,
      City: education.Data[0].City,
      State: education.Data[0].State,
      Country: education.Data[0].Country,
      Pincode: education.Data[0].Pincode
    });
  
    // Function to handle changes in input fields
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedEducation(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    // Function to handle update button click
    const handleUpdate = async () => {
      try {
        const response = await fetch('http://localhost:51294/api/UpdateOccupation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Id: education.Data[0].Id, ...editedEducation }) // Assuming education.id exists
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        else{
        onClose();
       window.location.reload(); 
       }
         
      } catch (error) {
        console.error('Error updating education data:', error);
      }
    };
  
    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>Edit Education</h2>
          <div>
            <label htmlFor="qualification">Designation:</label>
            <input 
              type="text" 
              id="qualification" 
              name="Designation" 
              value={editedEducation.Designation} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="passingYear">NameOfCompany:</label>
            <input 
              type="text" 
              id="passingYear" 
              name="NameOfCompany" 
              value={editedEducation.NameOfCompany} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="schooling">Industry:</label>
            <input 
              type="text" 
              id="schooling" 
              name="Industry" 
              value={editedEducation.Industry} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="organisation">Category:</label>
            <input 
              type="text" 
              id="organisation" 
              name="Category" 
              value={editedEducation.Category} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">StartDate:</label>
            <input 
              type="date" 
              id="gpa" 
              name="StartDate" 
              value={editedEducation.StartDate} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">EndDate:</label>
            <input 
              type="date" 
              id="gpa" 
              name="EndDate" 
              value={editedEducation.EndDate} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">Address1:</label>
            <input 
              type="text" 
              id="gpa" 
              name="Address1" 
              value={editedEducation.Address1} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">Address2:</label>
            <input 
              type="text" 
              id="gpa" 
              name="Address2" 
              value={editedEducation.Address2} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">City:</label>
            <input 
              type="text" 
              id="gpa" 
              name="City" 
              value={editedEducation.City} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">State:</label>
            <input 
              type="text" 
              id="gpa" 
              name="State" 
              value={editedEducation.State} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">Country:</label>
            <input 
              type="text" 
              id="gpa" 
              name="Country" 
              value={editedEducation.Country} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">Pincode:</label>
            <input 
              type="number" 
              id="gpa" 
              name="Pincode" 
              value={editedEducation.Pincode} 
              onChange={handleInputChange} 
            />
          </div>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  }
  

export default ShowEducation;