import React from 'react';
import './Info.css';

function Info(props) {
    return (
        <div className="Info">
            <h4>{props.title}</h4>
            <p>{props.storyline.substring(0,300)}{props.storyline.length > 200 && '...'}</p>
        </div>
    );
};

export default Info;