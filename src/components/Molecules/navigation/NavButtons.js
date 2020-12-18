import React from 'react';
import './NavButtons.css';

export const NavButtons = ({onNext, onPrevious}) => {
    return (
        <div>
            <button className="nav-buttons" onClick={onPrevious}>Vorige</button>
            <button className="nav-buttons" onClick={onNext}>Volgende</button>
        </div>
    )
}
// disabled={offset === 0}
// disabled={offset === 1118}