import React, { useState } from 'react';
import Drawer from '../tools/drawer/Drawer';

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleDrawer}>
        {/* Use the appropriate class names for Font Awesome icons */}
        <i className="fas fa-bars"></i>
      </div>
      <div className="logo">
        <img src="%PUBLIC_URL%/img/user.png" alt="Logo" />
      </div>
      <div className="profile-icon">
        {/* Use the appropriate class names for Font Awesome icons */}
        <i className="fas fa-user-circle"></i>
      </div>
      <Drawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer} />
    </nav>
  );
}

export default Navbar;
