import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
const navigate =useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      let data = fetch("http://localhost:3001/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:(JSON.stringify(formData))
      }).then ( async (response) => { 
        let res = await response.text();
        setSuccessMessage(res)});
      localStorage.setItem("Email",formData.email);
      localStorage.setItem("Password",formData.password);
      navigate("/profile");
      setErrors({});
    
    } else {
      setErrors(formErrors);
      setSuccessMessage("");
    }
  };

  return (
  <div className="body">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        

        <button type="submit">Login</button>
      </form>
      <button className="goback"> go back </button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    </div>
  );
};

export default Login;
