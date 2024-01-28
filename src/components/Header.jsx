// Navbar.js (Component)
//import React from 'react';
//import { AiOutlineSearch } from "react-icons/ai";
import './_Header.scss'; // Uncomment this line to import the SCSS file

const Navbar = () => {
  return (
    <div className="border border-dark header">
      <div className="Header_icons">
        {/* Add your icons or image here */}
        {/* <MdNotifications size={28} />
        <MdApps size={28} /> */}
        <img
          src="src\assets\Logo\user.png"
          alt="avatar"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
