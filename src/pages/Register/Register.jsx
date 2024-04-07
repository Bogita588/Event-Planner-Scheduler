import React, { useState } from "react";
import './register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    phoneNumber: "",
    role: "attendee",
    organization: "",
    eventTypePreference: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="password-toggle" onClick={handleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="attendee">Attendee</option>
          <option value="scheduler">Event Scheduler</option>
        </select>
        {formData.role === "scheduler" && (
          <input
            type="text"
            placeholder="Organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />
        )}
        {formData.role === "attendee" && (
          <select
            name="eventTypePreference"
            value={formData.eventTypePreference}
            onChange={handleChange}
            required
          >
            <option value="">All</option>
            <option value="party">Party</option>
            <option value="student">Student Event</option>
            <option value="comedy">Comedy Show</option>
            <option value="concert">Concert</option>
            <option value="workshop">Workshop</option>
          </select>
        )}
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
