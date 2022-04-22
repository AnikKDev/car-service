import React, { useState } from 'react';
import Services from '../Home/Services/Services';
const Footer = () => {
    const newDate = new Date().toLocaleDateString();

    return (
        <div>
            <p ><small>&copy; Car Services | {newDate}</small></p>
        </div >
    );
};

export default Footer;