import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [newItem, setNewItem] = useState('');
  
  // Function to handle adding a new item
  const handleAddItem = () => {
    if (newItem.trim() === '') return; // Do not add empty items
    
    setItems(prevItems => [...prevItems, { id: prevItems.length + 1, name: newItem }]);
    setNewItem('');
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://interview-plus.onrender.com/api/items');

        if (response.status === 200) {
          setItems(response.data); // Assuming the response data is an array of items
        }
      } catch (error) {
        console.error('Error fetching items:', error);
        setError('Failed to fetch items. Please try again.');
      }
    };

    fetchItems();
  }, []); // Empty dependency array to run effect only once after component mount

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', border: '2px solid #ccc', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Items</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '20px' }}>
            {item.name}
          </li>
        ))}
      </ul>

      {/* Form to add new item */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <input 
          type="text" 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          placeholder="Enter item name" 
          style={{ marginRight: '20px' }} 
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default Items;




