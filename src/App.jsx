// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    contact: '',
    education: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <div className="editor-pane">
        <fieldset>
          <legend>Name and Contact Details</legend>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={resumeData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Contact Details:
            <textarea
              name="contact"
              value={resumeData.contact}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Education Details</legend>
          <textarea
            name="education"
            value={resumeData.education}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <legend>Work Experience Details</legend>
          <textarea
            name="experience"
            value={resumeData.experience}
            onChange={handleChange}
          />
        </fieldset>
      </div>
      <div className="preview-pane">
        <h2>Resume Preview</h2>
        <div>
          <h3>{resumeData.name}</h3>
          <p>{resumeData.contact}</p>
          <h4>Education</h4>
          <p>{resumeData.education}</p>
          <h4>Work Experience</h4>
          <p>{resumeData.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
