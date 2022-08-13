import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarModal = ({
    showCalendar,
    handleStartChange,
    handleEndChange,
    startDate,
    endDate,
    handleHideCalendar
}) => {
    return (
        <div className={showCalendar ? 'CalendarModal' : 'CalendarModal hide'}>
            <div className="Calendar">
                <Calendar
                    className={showCalendar ? '' : 'hide'}
                    value={startDate}
                    onChange={handleStartChange}
                />
                <Calendar
                    className={showCalendar ? '' : 'hide'}
                    value={endDate}
                    onChange={handleEndChange}
                />
            </div>
            <button className="Done" onClick={handleHideCalendar}>
                Done
            </button>
        </div>
    );
};
