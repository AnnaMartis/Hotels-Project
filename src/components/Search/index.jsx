import { useState, useRef, useEffect } from 'react';
import '../../css/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CalendarModal } from '../Modals/CalendarModal';
import { DestinationModal } from '../Modals/DestinationModal';
import { TravelModal } from '../Modals/TravelModal';
import {
    createSearchParams,
    useSearchParams,
    useNavigate
} from 'react-router-dom';

export const Search = () => {
    const [searchParams] = useSearchParams();

    // DESTINATION

    const [city, setCity] = useState(searchParams.get('city') ?? '');
    const [country, setCountry] = useState('');
    const [showDest, setShowDest] = useState(false);

    const handleCityChange = (value) => {
        setCity(value);
    };

    const handleCountryChange = (value) => {
        setCountry(value);
    };

    const handleShowDest = () => {
        setShowCalendar(false);
        setShowDest(true);
        setShowTrav(false);
    };

    const handleHideDest = () => {
        setShowDest(false);
    };

    useEffect(() => {
        destinInputRef.current.value = city;
    }, [handleCityChange]);

    //      CALENDAR

    const [startDate, setStartDate] = useState(
        (searchParams.get('startDate') &&
            new Date(searchParams.get('startDate'))) ||
            new Date()
    );
    const [endDate, setEndDate] = useState(
        (searchParams.get('endDate') &&
            new Date(searchParams.get('endDate'))) ||
            new Date()
    );
    const [showCalendar, setShowCalendar] = useState(false);
    const dateInputRef = useRef(null);
    const destinInputRef = useRef(null);

    const months = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];

    const handleStartChange = (value) => {
        setStartDate(value);
    };

    useEffect(() => {
        const day = startDate.getDate();
        const month = months[startDate.getMonth()];
        if (
            day == new Date().getDate() &&
            startDate.getMonth() == new Date().getMonth()
        ) {
            dateInputRef.current.value = '';
        } else {
            dateInputRef.current.value = `${month}-${day}`;
        }
    }, [handleStartChange]);

    const handleEndChange = (value) => {
        setEndDate(value);
    };

    useEffect(() => {
        const day = endDate.getDate();
        const month = months[endDate.getMonth()];
        if (
            day === new Date().getDate() &&
            startDate.getMonth() === new Date().getMonth()
        ) {
            dateInputRef.current.value = '';
        } else {
            dateInputRef.current.value += ` - ${month}-${day}`;
        }
    }, [handleEndChange, endDate, months, startDate]);

    const handleShowCalendar = () => {
        setShowDest(false);
        setShowCalendar(true);
        setShowTrav(false);
    };

    const handleHideCalendar = (e) => {
        e?.preventDefault();
        setShowCalendar(false);
        travInputRef.current.className = 'Traveller';
    };

    // TRAVELLERS

    const [adults, setAdults] = useState(searchParams.get('adults') ?? '');
    const [showTrav, setShowTrav] = useState(false);
    const travInputRef = useRef(null);

    const handlerShowTrav = () => {
        setShowTrav(true);
        setShowCalendar(false);
        setShowDest(false);
    };

    const handlerHideTrav = () => {
        setShowTrav(false);
    };

    // SEARCH PARAMS

    const navigate = useNavigate();
    const [problem, setProblem] = useState(false);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (
            city &&
            Number(adults) &&
            startDate < endDate &&
            startDate > Date.now()
        ) {
            const params = { city, adults, startDate, endDate };

            navigate({
                pathname: '/search',
                search: `?${createSearchParams(params)}`
            });
        } else {
            setProblem(true);
        }
    };

    return (
        <div className="SearchPart">
            <div className="Container">
                <h2 className="Heading">Where To?</h2>
                <h3 className={problem ? 'Innerheader' : 'Innerheader hide'}>
                    Wrong Input Parametres
                </h3>
                <form className="Inner" onSubmit={handleSubmit}>
                    <input
                        className="Dest"
                        type="text"
                        placeholder="&#xf124;  Going to"
                        ref={destinInputRef}
                        onClick={() => {
                            showDest ? handleHideDest() : handleShowDest();
                        }}
                        onKeyDown={(e) => e.preventDefault()}
                        defaultValue={city}
                    />

                    <DestinationModal
                        handleCityChange={handleCityChange}
                        handleCountryChange={handleCountryChange}
                        handleShowDest={handleShowDest}
                        handleHideDest={handleHideDest}
                        city={city}
                        country={country}
                        showDest={showDest}
                    />

                    <input
                        className="Dates"
                        type="input"
                        placeholder="&#xf073; Dates"
                        onClick={() => {
                            showCalendar
                                ? handleHideCalendar()
                                : handleShowCalendar();
                        }}
                        onKeyDown={(e) => e.preventDefault()}
                        ref={dateInputRef}
                    />

                    <CalendarModal
                        showCalendar={showCalendar}
                        handleStartChange={handleStartChange}
                        handleEndChange={handleEndChange}
                        startDate={startDate}
                        endDate={endDate}
                        handleHideCalendar={handleHideCalendar}
                    />

                    <input
                        className="Traveller"
                        type="text"
                        placeholder="&#xf007;  Travellers"
                        ref={travInputRef}
                        onClick={() => {
                            showTrav ? handlerHideTrav() : handlerShowTrav();
                        }}
                        onKeyDown={(e) => e.preventDefault()}
                        defaultValue={adults}
                    />

                    <TravelModal
                        handlerShowTrav={handlerShowTrav}
                        handlerHideTrav={handlerHideTrav}
                        showTrav={showTrav}
                        travInputRef={travInputRef}
                        setAdults={setAdults}
                        adults={adults}
                    />

                    <button className="Search">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </div>
    );
};
