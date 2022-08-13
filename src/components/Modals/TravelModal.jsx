import React from 'react';

export const TravelModal = ({
    handlerHideTrav,
    showTrav,
    travInputRef,
    setAdults,
    adults
}) => {
    let count = adults;

    const handleIncrement = (e) => {
        e.preventDefault();
        if (adults < 2) {
            count++;
            travInputRef.current.value = count;
            setAdults(count);
        }
    };

    const handleDecrement = (e) => {
        e.preventDefault();
        if (adults > 1) {
            count--;
            travInputRef.current.value = count;
            setAdults(count);
        }
    };

    return (
        <div className={showTrav ? 'TravelModal' : 'TravelModal hide'}>
            <h3 className="Innerheader">Travellers</h3>
            <div className="Quantity">
                <span>Adults</span>
                <div className="Quantity">
                    <button className="Decrement" onClick={handleDecrement}>
                        -
                    </button>
                    <span>{adults}</span>
                    <button className="Increment" onClick={handleIncrement}>
                        +
                    </button>
                </div>
            </div>
            <button
                className="Done"
                onClick={(e) => {
                    travInputRef.current.value = count;
                    e.preventDefault();
                    handlerHideTrav();
                }}
            >
                Done
            </button>
        </div>
    );
};
