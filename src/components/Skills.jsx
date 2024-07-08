import React, { useState } from 'react';

const Skills = ({ formData, setFormData }) => {
  const [skill, setSkill] = useState('');
  const [error, setError] = useState('');

  const addSkill = () => {
    if (skill && formData.skills.length < 10) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill]
      });
      setSkill('');
      setError('');
    } else if (formData.skills.length >= 10) {
      setError('Maximum Skill Number exceeded');
    }
  };

  const removeSkill = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: newSkills
    });
    setError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2 items-center">
        {formData.skills.map((skill, index) => (
          <div key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md flex items-center">
            {skill}
            <button className="ml-2" onClick={() => removeSkill(index)}>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder="Enter a skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          className="p-2 border rounded flex-grow"
        />
        <button onClick={addSkill} className="bg-blue-500 text-white p-2 rounded">Add</button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Skills;
