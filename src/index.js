import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout';
import './index.css';
import Home from './Components/home';
import Example from './Components/Example2';

const root = document.getElementById('root'); // root id from index.html
const VirtualRoot = ReactDOM.createRoot(root); // Virtual Root (V DOM)

VirtualRoot.render(
  <Router>
    <div>
      <Header/>
      <h1>Welcome</h1><br/>
      <Home/><br/>
      {/* <Example/> */}
      {/*Add this tag her */}
      <br />
    </div>
    <Routes>
      <Route path="/"/> {/* Add a default route for "/" */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);
