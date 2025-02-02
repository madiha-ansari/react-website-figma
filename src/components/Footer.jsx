import React from 'react'
import footer from "../assets/Footer.png";  // Image import

const Footer = () => {
    return (
        <div>
            <div>
                <img
                    src={footer}
                    alt="footer"
                    style={{ width: '1480px', height: '432px' }}
                />
            </div>
        </div>
    )
}

export default Footer
