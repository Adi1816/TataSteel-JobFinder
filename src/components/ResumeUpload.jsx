import React from 'react';

const ResumeUpload = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const removeResume = () => {
    setFormData({
      ...formData,
      resume: null
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>
      <input 
        type="file" 
        onChange={handleChange} 
        className="p-2 border rounded w-full"
      />
      {formData.resume && (
        <div className="mt-2 flex items-center">
          <span className="mr-2">{formData.resume.name}</span>
          <button onClick={removeResume} className="text-red-500">Remove</button>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
