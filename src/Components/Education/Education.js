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
      const response = await fetch('http://localhost:51294/api/GetEducationByFamilymemberId', {
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
      const response = await fetch(`http://localhost:51294/api/GetEducationbyid?Id=${education.Id}`, {
        method: 'GET', // Set the method to GET explicitly
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
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Qualification</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Passing Year</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Schooling</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Organisation</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>GPA</th>
              <th style={{ border: '1px solid #ddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {familyData.map((education, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Qualification}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.PassingYear}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Schooling}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.Organisation}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{education.GPA}</td>
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
      Qualification: education.Data[0].Qualification,
      PassingYear: education.Data[0].PassingYear,
      Schooling: education.Data[0].Schooling,
      Organisation: education.Data[0].Organisation,
      GPA: education.Data[0].GPA
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
        const response = await fetch(`http://localhost:51294/api/UpdateEducation`, {
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

        // Close the popup after successful update
      } catch (error) {
        console.error('Error updating education data:', error);
      }
    };
  
    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>Edit Education</h2>
          <div>
            <label htmlFor="qualification">Qualification:</label>
            <input 
              type="text" 
              id="qualification" 
              name="Qualification" 
              value={editedEducation.Qualification} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="passingYear">Passing Year:</label>
            <input 
              type="text" 
              id="passingYear" 
              name="PassingYear" 
              value={editedEducation.PassingYear} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="schooling">Schooling:</label>
            <input 
              type="text" 
              id="schooling" 
              name="Schooling" 
              value={editedEducation.Schooling} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="organisation">Organisation:</label>
            <input 
              type="text" 
              id="organisation" 
              name="Organisation" 
              value={editedEducation.Organisation} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="gpa">GPA:</label>
            <input 
              type="text" 
              id="gpa" 
              name="GPA" 
              value={editedEducation.GPA} 
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