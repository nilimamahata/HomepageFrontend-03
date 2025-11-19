import React, { useState } from 'react';
import '../css/ExploreServices.css';

const ExploreServices = () => {
  const [selectedMainTab, setSelectedMainTab] = useState('Offline');
  const [selectedSubTab, setSelectedSubTab] = useState('Class 9');

  const subjects = {
    'Class 8': ['Science', 'Social Science', 'Maths', 'English', 'GK', 'IT'],
    'Class 9': ['Science', 'Social Science', 'Maths', 'English', 'GK',],
    'Class 10': ['Science', 'Social Science', 'Maths', 'English', 'MIL'],
    'Class 11': ['11 Science', '11 Arts', '11 Commerce'],
    'Class 12': ['12 Science', '12 Arts', '12 Commerce'],
  };

  const handleMainTabClick = (tab) => {
    setSelectedMainTab(tab);
  };

  const handleSubTabClick = (subTab) => {
     if (selectedMainTab === 'Online') {
      setSelectedSubTab(subTab);
    }
  };

  return (
    <div className="explore-services-container">
      <div className="explore-services-canvas">
        <h1 className="explore-services-title">Explore Services</h1>

        <div className="tabs-container">
          <div className="main-tabs">
            <button className={`tab ${selectedMainTab === 'Online' ? 'selected' : ''}`} onClick={() => handleMainTabClick('Online')}>Online</button>
            <button className={`tab ${selectedMainTab === 'Offline' ? 'selected' : ''}`} onClick={() => handleMainTabClick('Offline')} title="Upcoming feature">Offline</button>
            <button className={`tab ${selectedMainTab === 'Classroom' ? 'selected' : ''}`} onClick={() => handleMainTabClick('Classroom')} title="Upcoming feature">Classroom</button>
            <button className={`tab ${selectedMainTab === 'Software Development' ? 'selected' : ''}`} onClick={() => handleMainTabClick('Software Development')} title="Upcoming feature">Software Development</button>
          </div>
          <div className="sub-tabs">
            <button className={`sub-tab ${selectedSubTab === 'Class 8' ? 'selected' : ''}`} onClick={() => handleSubTabClick('Class 8')}>Class 8</button>
            <button className={`sub-tab ${selectedSubTab === 'Class 9' ? 'selected' : ''}`} onClick={() => handleSubTabClick('Class 9')}>Class 9</button>
            <button className={`sub-tab ${selectedSubTab === 'Class 10' ? 'selected' : ''}`} onClick={() => handleSubTabClick('Class 10')}>Class 10</button>
            <button className={`sub-tab ${selectedSubTab === 'Class 11' ? 'selected' : ''}`} onClick={() => handleSubTabClick('Class 11')}>Class 11</button>
            <button className={`sub-tab ${selectedSubTab === 'Class 12' ? 'selected' : ''}`} onClick={() => handleSubTabClick('Class 12')}>Class 12</button>
          </div>
        </div>

        <div className="cards-container">
          {selectedSubTab && subjects[selectedSubTab] && subjects[selectedSubTab].map((subject, index) => (
            <div className="service-card" key={index}>
              <div className="card-image"></div>
              <h3 className="card-title">{subject}</h3>
              <p className="card-subtitle"></p>
            </div>
          ))}
        </div>

        <button className="show-all-button">Show all services</button>
      </div>
    </div>
  );
};

export default ExploreServices;
