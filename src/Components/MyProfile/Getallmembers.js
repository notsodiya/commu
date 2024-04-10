
import React, { useState, useEffect } from 'react';

function Getallmembers() {
  const [familyData, setFamilyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        //const userId = localStorage.getItem('FamilyId'); // Retrieve the Id from localStorage
        const response = await fetch('http://localhost:51294/api/GetAllValues', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         // body: JSON.stringify({ FamilyId: userId }) 
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

  return (
    <div>
      <h2>Family Data Fetcher</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {familyData && familyData.length > 0 && (
        <div>
{familyData.map((member) => (
            <div key={member.Id}>
              <p>Name: {`${member.FirstName} ${member.MiddleName} ${member.LastName}`}</p>
              <p>Serial No: {member.SerialNo}</p>
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
              <p>Family ID: {member.FamilyId}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Getallmembers;
