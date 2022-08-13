import React from 'react';

export const DestinationModal = ({
    handleCityChange,
    handleCountryChange,
    handleHideDest,
    showDest
}) => {
    return (
        <div className={showDest ? 'DestModal' : 'DestModal hide'}>
            <button
                className="Area"
                onClick={(e) => {
                    e.preventDefault();
                    handleCityChange('Yerevan');
                    handleCountryChange('Armenia');
                    handleHideDest();
                }}
            >
                Yerevan, Armenia
            </button>
        </div>
    );
};
