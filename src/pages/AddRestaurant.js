import React, { useState } from 'react';
import './AddRestaurant.css';

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    owner: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    state: '',
  });

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Handle login logic here
  };

  return (
    <div className="add-restaurant">
      {!showLoginForm ? (
        <>
          <h2>Add Restaurant</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Restaurant Name
              <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} required />
            </label>
            <label>
              Owner
              <input type="text" name="owner" value={formData.owner} onChange={handleChange} required />
            </label>
            <label>
              E-Mail Address
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Mobile Number
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
            <label>
              Password
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label>
              Confirm Password
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </label>
            <label>
              State
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
          </form>
          <p>
            Already Registered? <a href="#" onClick={(e) => { e.preventDefault(); setShowLoginForm(true); }}>Login Here</a>
          </p>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <label>
              E-Mail Address
              <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} required />
            </label>
            <label>
              Password
              <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} required />
            </label>
            <button type="submit">Login</button>
          </form>
          <p>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowLoginForm(false); }}>Back to Registration</a>
          </p>
        </>
      )}
    </div>
  );
};

export default AddRestaurant;