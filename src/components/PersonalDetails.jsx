import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS


const PersonalDetails = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleDateChange = (date) => {
      setFormData({
        ...formData,
        dob: date
      });
    };
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
            className="p-2 border rounded" 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
            className="p-2 border rounded" 
          />
          <input 
            type="text" 
            name="mobileNumber" 
            placeholder="Mobile Number" 
            value={formData.mobileNumber} 
            onChange={handleChange} 
            className="p-2 border rounded" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email ID" 
            value={formData.email} 
            onChange={handleChange} 
            className="p-2 border rounded" 
          />
          <DatePicker 
            selected={formData.dob} 
            onChange={handleDateChange} 
            dateFormat="dd/MM/yyyy" 
            placeholderText="DOB (dd/mm/yyyy)" 
            className="p-2 border rounded w-full"
          />
          <select 
            name="gender" 
            placeholder="Gender" 
            value={formData.gender} 
            onChange={handleChange} 
            className="p- border rounded"
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input 
            type="text" 
            name="nationality" 
            placeholder="Nationality" 
            value={formData.nationality} 
            onChange={handleChange} 
            className="p-2 border rounded" 
          />
          <input 
            type="text" 
            name="languagesKnown" 
            placeholder="Languages Known" 
            value={formData.languagesKnown} 
            onChange={handleChange} 
            className="p-2 border rounded" 
          />
        </div>
      </div>
    );
  };
  
  export default PersonalDetails;
  