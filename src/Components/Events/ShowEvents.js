
import React, { useState, useEffect } from 'react';

function ShowEvents() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const userId = localStorage.getItem('FamilyMemberId'); // Retrieve the Id from localStorage
        const response = await fetch('http://localhost:51294/api/Login/GetEventsbyid', {
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
        setEventsData(data.Data);
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
      <h2>Events Fetcher</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {eventsData && eventsData.length > 0 && (
        <div>
{eventsData.map((events) => (
            <div key={events.Id}>
              <p>Message: {events.Message}</p>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowEvents;
