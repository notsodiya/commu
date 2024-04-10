
import React, { useState, useEffect } from 'react';

function FamilyDataFetcher() {
  const [familyData, setFamilyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const userId = localStorage.getItem('FamilyMemberId'); // Retrieve the Id from localStorage
        const response = await fetch('http://localhost:51294/api/GetAdvertisementById', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Id: userId })
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
              <p>AdvHeader: {member.AdvHeader}</p>
              <p>AdvBody: {member.AdvBody}</p>
              <p>AdvImage: {member.AdvImage}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FamilyDataFetcher;
