import React from 'react';
// esi aveli harmar te en guynery Y?? ??? u 
export const Input = ({ name, label, error, ...props }) => {
    return (
        <div className="Box">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                id={name}
                className={error ? 'input-error' : ''}
                {...props}
            />
        </div>
    );
};
