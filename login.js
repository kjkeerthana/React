import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://interview-plus.onrender.com/api/login', {
        email,
        password
      });

      const token = response.data.token;
      console.log('Login successful. Token:', token);
      // Here you can redirect the user to another page or update the UI accordingly
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>Login</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{error}</p>}
      <input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '3px', border: '1px solid #ccc' }} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '3px', border: '1px solid #ccc' }} />
      <button onClick={handleLogin} disabled={loading} style={{ width: '100%', padding: '10px', borderRadius: '3px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}

export default Login;





