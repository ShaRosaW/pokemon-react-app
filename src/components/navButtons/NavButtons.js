import React from 'react';
import './NavButtons.css';

export const NavButtons = ({onNext, onPrevious}) => {
    return (
        <div>
            <button onClick={onPrevious}>Vorige</button>
            <button onClick={onNext}>Volgende</button>
        </div>
    )
}