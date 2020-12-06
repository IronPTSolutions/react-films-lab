import React from 'react';
import './Footer.css';

function Footer(props) {    
    return (
        <div className="Footer">
            <p>{props.year}</p>
            <p>{props.averageRate}<span className="icon">★</span></p>
        </div>
    );
};

export default Footer;