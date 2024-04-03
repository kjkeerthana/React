import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = ({ token }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete('https://interview-plus.onrender.com/api/delete-user', {
        headers: {
          'x-access-token': token
        },
        data: { username } // Include the username in the request data
      });

      if (response.status === 200) {
        console.log('User deleted successfully');
        // Handle success, such as displaying a success message or redirecting the user
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', textAlign: 'center' }}>
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginTop: '20px', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <br />
      <button
        onClick={handleDeleteUser}
        style={{
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        Delete User
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DeleteUser;

