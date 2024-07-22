import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import StudentDashboard from './components/StudentDashboard';
import DriverDashboard from './components/DriverDashboard';

const App = () => {
  const getDashboard = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const { role } = JSON.parse(atob(token.split('.')[1])); 
      return role === 'student' ? <StudentDashboard /> : <DriverDashboard />;
    }
    return <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/studentdashboard" element={<StudentDashboard/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={getDashboard()} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
