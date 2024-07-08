import React, { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import ResumeUpload from './components/ResumeUpload';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    dob: '',
    gender: '',
    nationality: '',
    languagesKnown: '',
    workExperiences: [],
    skills: [],
    resume: null
  });

  const validateForm = () => {
    const { firstName, lastName, mobileNumber, email, dob, gender, nationality, languagesKnown, workExperiences, skills, resume } = formData;
    return (
      firstName &&
      lastName &&
      mobileNumber &&
      email &&
      dob &&
      gender &&
      nationality &&
      languagesKnown &&
      workExperiences.length > 0 &&
      skills.length > 0 &&
      resume
    );
  };

  const handleSsubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission (replace with actual submission logic)
      setTimeout(() => {
        alert('Form Submitted Successfully');
        console.log(formData); // Replace with actual submission handling
      }, 300); // Simulating a delay for submission
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 p-6">
      <header className="text-3xl font-bold text-blue-200 mb-8">JobKhojo</header>
      <form onSubmit={handleSsubmit} className="max-w-3xl mx-auto">
        <PersonalDetails formData={formData} setFormData={setFormData} />
        <WorkExperience formData={formData} setFormData={setFormData} />
        <Skills formData={formData} setFormData={setFormData} />
        <ResumeUpload formData={formData} setFormData={setFormData} />
        <button type="submit" className="mt-6 w-full bg-green-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
