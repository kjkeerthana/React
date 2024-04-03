import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ token }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://interview-plus.onrender.com/api/protected', {
          headers: {
            'x-access-token': token
          }
        });

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching protected data:', error);
        setError('Failed to fetch protected data. Please try again.');
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      {data && (
        <div>
          <h2>Protected Route</h2>
          <p>Data: {JSON.stringify(data)}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProtectedRoute;

