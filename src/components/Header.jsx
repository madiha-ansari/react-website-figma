import React from 'react'
import myHeader from "../assets/Header.png";  // Image import


const Header = () => {
  return (
    <div>
       <div>
                  <img
                      src={myHeader}
                      alt="Navbar"
                      style={{ width: '1480px', height: '996px' }}
                  />
              </div>
    </div>
  )
}

export default Header
