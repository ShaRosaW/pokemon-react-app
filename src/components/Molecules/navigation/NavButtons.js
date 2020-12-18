import React from 'react';
import './NavButtons.css';

export const NavButtons = ({onNext, onPrevious}) => {
    return (
        <div>
            <button className="prev-button" onClick={onPrevious}>Vorige</button>
            <button className="next-button" onClick={onNext}>Volgende</button>
        </div>
    )
}
// disabled={offset === 0}
// disabled={offset === 1118}