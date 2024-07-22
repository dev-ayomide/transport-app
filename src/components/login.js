import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email,
        password,
        role,
      });

      if (response.status === 200) {
        if (role === 'student') {
          navigate('/student-dashboard');
        } else if (role === 'driver') {
          navigate('/driver-dashboard');
        }
      } else {
        setError('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed: ' + error.message);
    }
  };

  return (
    <section>
    <div className="register-container">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>

        <div className="inputbox">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required />                             
        </div> 

        <div className="inputbox">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" required />                             
        </div>

        <div className='inputbox'>
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="driver">Driver</option>
          </select>
        </div>

        <div className="inputbox">
          <button type="submit">Login</button>
          </div>
      </form>
    </div>
    </section>
  );
};

export default Login;
