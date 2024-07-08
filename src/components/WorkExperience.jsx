import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

const WorkExperience = ({ formData, setFormData }) => {
  const [experience, setExperience] = useState({
    startDate: null,
    endDate: null,
    description: '',
    isPresent: false,
    companyName: ''
  });

  const [totalExperienceYears, setTotalExperienceYears] = useState(0);

  useEffect(() => {
    calculateTotalExperience();
  }, [formData.workExperiences]); // Update totalExperienceYears whenever workExperiences change

  const calculateTotalExperience = () => {
    if (formData.workExperiences.length > 0) {
      let firstStartDate = formData.workExperiences[0].startDate;
      let lastEndDate = formData.workExperiences[0].endDate;

      formData.workExperiences.forEach((exp) => {
        if (exp.startDate < firstStartDate) {
          firstStartDate = exp.startDate;
        }
        if (exp.endDate && (lastEndDate === null || exp.endDate > lastEndDate)) {
          lastEndDate = exp.endDate;
        }
      });

      if (firstStartDate && lastEndDate) {
        const startYear = firstStartDate.getFullYear();
        const endYear = lastEndDate.getFullYear();
        const diffYears = endYear - startYear;

        setTotalExperienceYears(diffYears);
      }
    } else {
      setTotalExperienceYears(0);
    }
  };

  const addExperience = () => {
    if (experience.startDate && (experience.endDate || experience.isPresent) && experience.description && experience.companyName) {
      setFormData({
        ...formData,
        workExperiences: [...formData.workExperiences, experience]
      });
      setExperience({
        startDate: null,
        endDate: null,
        description: '',
        isPresent: false,
        companyName: ''
      });
    } else {
      alert('Please fill out all fields in the Work Experience section.');
    }
  };

  const handleChange = (date, name) => {
    setExperience({
      ...experience,
      [name]: date
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setExperience({
      ...experience,
      [name]: checked,
      endDate: null // Reset endDate when Present checkbox is toggled
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addExperience();
    }
  };

  const removeExperience = (index) => {
    const newExperiences = formData.workExperiences.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      workExperiences: newExperiences
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <DatePicker 
            selected={experience.startDate} 
            onChange={(date) => handleChange(date, 'startDate')} 
            placeholderText="Start Date" 
            className="p-2 border rounded-md"
          />
        </div>
        <div>
          
          <DatePicker 
            selected={experience.endDate} 
            onChange={(date) => handleChange(date, 'endDate')} 
            placeholderText="End Date" 
            className="p-2 border rounded"
            disabled={experience.isPresent}
          />
          <label className="ml-2">
            <input 
              type="checkbox" 
              name="isPresent" 
              checked={experience.isPresent} 
              onChange={handleCheckboxChange} 
              className="mr-2"
            />
            Present
          </label>
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1">Company Name</label>
          <input 
            type="text" 
            name="companyName" 
            placeholder="Company Name" 
            value={experience.companyName} 
            onChange={(e) => setExperience({ ...experience, companyName: e.target.value })} 
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1">Description</label>
          <textarea 
            name="description" 
            placeholder="Describe your work experience..." 
            value={experience.description} 
            onChange={(e) => setExperience({ ...experience, description: e.target.value })} 
            onKeyDown={handleKeyDown} 
            className="p-2 border rounded w-full h-32"
          />
        </div>
      </div>
      <button onClick={addExperience} className="mt-4 bg-blue-500 text-white p-2 rounded">Add Experience</button>
      <div className="mt-4">
        {formData.workExperiences.map((exp, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded mb-2">
            <p><strong>Company Name:</strong> {exp.companyName}</p>
            <p><strong>Start Date:</strong> {exp.startDate ? exp.startDate.toLocaleDateString() : ''}</p>
            <p><strong>End Date:</strong> {exp.isPresent ? 'Present' : (exp.endDate ? exp.endDate.toLocaleDateString() : '')}</p>
            <p><strong>Description:</strong> {exp.description}</p>
            <button onClick={() => removeExperience(index)} className="text-red-500">Remove</button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p><strong>Total Work Experience:</strong> {totalExperienceYears} years</p>
      </div>
    </div>
  );
};

export default WorkExperience;
