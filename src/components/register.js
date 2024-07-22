import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../styles/register.css';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student'); 
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        firstname,
        lastname,
        phoneno,
        email,
        password,
        role,
      });

      if (response.status === 200) {
        window.alert('Registration successful');
        navigate('/login');
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed: ' + error.message);
    }
  };

  return (
    <section>
    <div className="register-container">
        <h2>Register</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}  placeholder="Firstname" required />                             
          </div> 

          <div className="inputbox">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname" required />                             
          </div> 

          <div className="inputbox">
          <label htmlFor="phoneno">Phone Number</label>
          <input type="text" id="phoneno" value={phoneno} onChange={(e) => setPhoneno(e.target.value)}  placeholder="Mobile number" required />                             
          </div> 

          <div className="inputbox">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required />                             
          </div> 

          <div className="inputbox">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" required />                             
          </div> 

          <div className="inputbox">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />                             
          </div>  

          <div className="inputbox">
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="driver">Driver</option>
          </select>
          </div>

          <div className="inputbox">
          <button type="submit">Register</button>
          </div>
        </form>
    </div>
    </section>
  );
};

export default Register;
