import React from 'react';
import myImage from "../assets/NavBar.png";  // Image import

const NavBar = () => {
    return (
        <div>
            <img
                src={myImage}
                alt="Navbar"
                style={{ width: '1480px', height: '120px' }}
            />
        </div>
    );
};

export default NavBar;
