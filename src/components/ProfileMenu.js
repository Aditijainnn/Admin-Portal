import React, { useState } from 'react';

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-menu">
      <div onClick={() => setIsOpen(!isOpen)} className="profile">
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
        <span className="profile-name">Admin Name</span>
        <i className={`arrow ${isOpen ? 'open' : ''}`}></i>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>View Profile</li>
          <li>Change Password</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default ProfileMenu;