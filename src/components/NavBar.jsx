import React from 'react';
import MyImage from "../assets/Navbar.png";  // Image import

const NavBar = () => {
    return (
        <div>
            <img
                src={MyImage}
                alt="Navbar"
                style={{ width: '1480px', height: '150px' }}
            />
        </div>
    );
};

export default NavBar;
