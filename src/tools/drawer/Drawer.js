import React from 'react';
import './Drawer.css';

function Drawer({ isOpen, closeDrawer }) {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        {/* Add your menu items and content here */}
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <div className="close-button" onClick={closeDrawer}>
        <span>&times;</span>
      </div>
    </div>
  );
}

export default Drawer;
