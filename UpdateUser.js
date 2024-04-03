import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put('https://interview-plus.onrender.com/api/update-user', {
        name,
        password
      });

      const token = response.data.token;
      console.log('User updated successfully. Token:', token);

      // Here you can redirect the user to another page or update the UI accordingly
    } catch (error) {
      console.error('Update user error:', error);
      setError('Failed to update user. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Update User</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{error}</p>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc' }} />
      <button onClick={handleUpdateUser} style={{ width: '100%', padding: '10px', borderRadius: '3px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}>Update User</button>
    </div>
  );
}

export default UpdateUser;
