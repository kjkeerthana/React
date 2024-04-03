import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import Items from './Items';

function App() {
  // eslint-disable-next-line
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://ek11.onrender.com")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/ProtectedRoute' element={<ProtectedRoute />} />
            <Route exact path='/UpdateUser' element={<UpdateUser />} />
            <Route exact path='/DeleteUser' element={<DeleteUser />} />
            <Route exact path='/Items' element={<Items />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;










