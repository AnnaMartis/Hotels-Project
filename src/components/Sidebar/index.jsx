import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams, createSearchParams } from 'react-router-dom';
import MultiRangeSlider from 'multi-range-slider-react';

const debounce = (fn, wait) => {
    let timeout;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), wait);
    };
};

const budjgetRangeDebounce = debounce((fn) => fn(), 600);

export const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search') ?? '';

    const rating = searchParams.get('rating');
    const rating1 = rating === 'rating1';
    const rating2 = rating === 'rating2';
    const rating3 = rating === 'rating3';
    const rating4 = rating === 'rating4';

    const star1 = searchParams.get('star1');
    const star2 = searchParams.get('star2');
    const star3 = searchParams.get('star3');
    const star4 = searchParams.get('star4');
    const star5 = searchParams.get('star5');

    const payment1 = searchParams.get('payment1');
    const payment2 = searchParams.get('payment2');

    const meal1 = searchParams.get('meal1');
    const meal2 = searchParams.get('meal2');
    const meal3 = searchParams.get('meal3');

    const setFilters = (data) => {
        searchParams.set('page', 1);
        const prevParams = Object.fromEntries(searchParams);
        const [firstElement] = Object.keys(data);

        if (!data[firstElement]) {
            delete prevParams[firstElement];
            delete data[firstElement];
        }
        setSearchParams(createSearchParams({ ...prevParams, ...data }));
    };

    const onChangeCheckbox = ({ target }) => {
        setFilters({ [target.name]: target.checked });
    };

    const onChangeRadio = ({ target }) => {
        setFilters({ [target.name]: target.value });
    };

    const onChangeInput = ({ target }) => {
        setFilters({ [target.name]: target.value });
    };

    let timerId;

    const handleRefreshInput = (e, callback) => {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => callback(e), 600);
    };

    // BUDGET PART

    const [minValue, setMinValue] = useState(
        searchParams.get('minValue') ?? 80
    );
    const [maxValue, setMaxValue] = useState(
        searchParams.get('maxValue') ?? 500
    );

    const handleRefreshSlider = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);

        budjgetRangeDebounce(() => {
            searchParams.set('maxValue', e.maxValue);
            searchParams.set('minValue', e.minValue);
            setSearchParams(searchParams);
        });
    };

    return (
        <div className="LeftSide">
            <div className="PropsearchPart">
                <h5 className="Innerheader">Search by Property Name</h5>
                <input
                    type="text"
                    placeholder="&#xF002; Search"
                    name="search"
                    onChange={(e) => handleRefreshInput(e, onChangeInput)}
                    defaultValue={search}
                />
            </div>

            <div className="FilterPart">
                <h5 className="Heading">Filter by</h5>
                <h6 className="Innerheader">Your budget / USD</h6>
                <MultiRangeSlider
                    min={80}
                    max={500}
                    step={20}
                    ruler={false}
                    label={true}
                    preventWheel={false}
                    minValue={minValue}
                    maxValue={maxValue}
                    baseClassName="multi-range-slider custom-range-slider"
                    onInput={(e) => {
                        handleRefreshSlider(e);
                    }}
                />

                <div className="Rating">
                    <h6 className="Innerheader">Guest rating</h6>
                    <form action="#" className="Radio" onChange={onChangeRadio}>
                        <input
                            type="radio"
                            id="rating1"
                            name="rating"
                            value="rating1"
                            defaultChecked={rating1}
                        />
                        <label htmlFor="rating1">Any</label>
                        <br />
                        <input
                            type="radio"
                            id="rating2"
                            name="rating"
                            value="rating2"
                            defaultChecked={rating2}
                        />
                        <label htmlFor="rating2">Wonderful 9+</label>
                        <br />
                        <input
                            type="radio"
                            id="rating3"
                            name="rating"
                            value="rating3"
                            defaultChecked={rating3}
                        />
                        <label htmlFor="rating3">Very good 8+</label>
                        <br />
                        <input
                            type="radio"
                            id="rating4"
                            name="rating"
                            value="rating4"
                            defaultChecked={rating4}
                        />
                        <label htmlFor="rating4">Good 7+</label>
                        <br />
                    </form>
                </div>

                <div className="Propclass">
                    <h6 className="Innerheader">Property class</h6>
                    <form
                        action="#"
                        className="Stars"
                        onChange={onChangeCheckbox}
                    >
                        <input
                            type="checkbox"
                            className="Starcheck"
                            id="star1"
                            name="star1"
                            defaultChecked={star1}
                        />
                        <label htmlFor="star1">
                            <div>
                                <span>1</span>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </label>
                        <br />

                        <input
                            type="checkbox"
                            className="Starcheck"
                            id="star2"
                            name="star2"
                            defaultChecked={star2}
                        />
                        <label htmlFor="star2">
                            <div>
                                <span>2</span>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </label>
                        <br />

                        <input
                            type="checkbox"
                            className="Starcheck"
                            id="star3"
                            name="star3"
                            defaultChecked={star3}
                        />
                        <label htmlFor="star3">
                            <div>
                                <span>3</span>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </label>
                        <br />

                        <input
                            type="checkbox"
                            className="Starcheck"
                            id="star4"
                            name="star4"
                            defaultChecked={star4}
                        />
                        <label htmlFor="star4">
                            <div>
                                <span>4</span>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </label>
                        <br />

                        <input
                            type="checkbox"
                            className="Starcheck"
                            id="star5"
                            name="star5"
                            defaultChecked={star5}
                        />
                        <label htmlFor="star5">
                            <div>
                                <span>5</span>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </label>
                        <br />
                    </form>
                </div>

                <div className="Payment">
                    <h6 className="Innerheader">Payment type</h6>
                    <form
                        action="#"
                        className="Checkbox"
                        onChange={onChangeCheckbox}
                    >
                        <input
                            type="checkbox"
                            id="payment1"
                            name="payment1"
                            value="payment1"
                            defaultChecked={payment1}
                        />
                        <label htmlFor="payment1">Fully refundable</label>
                        <br />
                        <input
                            type="checkbox"
                            id="payment2"
                            name="payment2"
                            value="payment2"
                            defaultChecked={payment2}
                        />
                        <label htmlFor="payment2">Reserve now, pay later</label>
                        <br />
                    </form>
                </div>

                <div className="Meal">
                    <h6 className="Innerheader">Meal plans available</h6>
                    <form
                        action="#"
                        className="Checkbox"
                        onChange={onChangeCheckbox}
                    >
                        <input
                            type="checkbox"
                            id="meal1"
                            name="meal1"
                            value="meal1"
                            defaultChecked={meal1}
                        />
                        <label htmlFor="meal1">Breakfast included</label>
                        <br />
                        <input
                            type="checkbox"
                            id="meal2"
                            name="meal2"
                            value="meal2"
                            defaultChecked={meal2}
                        />
                        <label htmlFor="meal2">Lunch included</label>
                        <br />
                        <input
                            type="checkbox"
                            id="meal3"
                            name="meal3"
                            value="meal2"
                            defaultChecked={meal3}
                        />
                        <label htmlFor="meal3">Dinner included</label>
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};
