import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AddHotel.css';
import { Input } from '../components/Input';
import { addNewHotel } from '../api';

export const AddHotel = () => {
    const [hotel, setHotel] = useState({
        title: '',
        area: '',
        country: '',
        address: '',
        price: 80,
        propClass: '',
        imgUrl1: '',
        imgUrl2: '',
        imgUrl3: '',
        imgUrl4: '',
        imgUrl5: '',
        imgUrl6: '',
        rating: 8,
        propertyHighlights: [
            'Free Breakfast',
            'Airport transfer',
            'Air conditioning',
            'Free Wifi',
            'Gym ',
            'Bar'
        ],

        mainAmeneties: [
            'Daily Housekeeping',
            'Restaurant and bar/lounge',
            'Rooftop terrace',
            'Fitnes center',
            'Coofe shop/cafe',
            '24-hour business center',
            'Airport shuttle',
            'Terrace',
            '24-hour front-desk',
            'Front desk safe'
        ],
        forFamilies: [
            'Children stay free',
            'Free cribs/infant',
            'Terrace',
            'DailyHousekeeping',
            'Laundry facilites',
            'Coffee/tea maker'
        ],
        cleaning: ['Personal', 'Protective', 'Equipment'],
        checkIn: '2022-09-01',
        checkOut: '2022-09-05'
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const isValid = Object.values(hotel).every((valid) => !!valid);

    const onInputChange = (e) => {
        if (isFinite(e.target.value) && e.target.value != '') {
            setHotel({ ...hotel, [e.target.name]: +e.target.value });
        } else {
            setHotel({ ...hotel, [e.target.name]: e.target.value });
        }

        if (!e.target.value) {
            setErrors({ ...errors, [e.target.name]: true });
        } else {
            setErrors({ ...errors, [e.target.name]: false });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await addNewHotel(hotel);
        navigate(`/hotels/${response.id}`);
    };
    // xamrac
    return (
        <div className="AddUser">
            <div className="Container">
                <h2>Add Your Hotel</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Input
                        placeholder="Enter the Title of the Hotel"
                        type="text"
                        value={hotel.title}
                        onChange={onInputChange}
                        error={errors.title}
                        name="title"
                        id="title"
                        label="Title"
                    />
                    <Input
                        placeholder="Choose the Country"
                        type="text"
                        value={hotel.country}
                        onChange={onInputChange}
                        error={errors.country}
                        name="country"
                        id="country"
                        label="Country"
                    />
                    <Input
                        placeholder="Choose the City"
                        type="text"
                        value={hotel.area}
                        onChange={onInputChange}
                        error={errors.area}
                        name="area"
                        id="area"
                        label="Area"
                    />
                    <Input
                        placeholder="Enter the Address"
                        type="text"
                        value={hotel.address}
                        onChange={onInputChange}
                        error={errors.address}
                        name="address"
                        id="address"
                        label="Address"
                    />
                    <Input
                        placeholder="Enter the Price"
                        type="number"
                        value={hotel.price}
                        onChange={onInputChange}
                        error={errors.price}
                        name="price"
                        id="price"
                        label="Price"
                    />
                    <Input
                        placeholder="/5"
                        type="number"
                        value={hotel.propClass}
                        onChange={onInputChange}
                        error={errors.propClass}
                        name="propClass"
                        id="propClass"
                        label="Property Class"
                    />
                    <Input
                        placeholder="Put your image link"
                        type="text"
                        value={hotel.imgUrl1}
                        onChange={onInputChange}
                        error={errors.imgUrl1}
                        name="imgUrl1"
                        id="imgUrl1"
                        label="Hotel Image"
                    />
                    <Input
                        placeholder="Put your image link"
                        type="text"
                        value={hotel.imgUrl2}
                        onChange={onInputChange}
                        error={errors.imgUrl2}
                        name="imgUrl2"
                        id="imgUrl2"
                        label="Hotel Image"
                    />
                    <Input
                        placeholder="Put your image link"
                        type="text"
                        value={hotel.imgUrl3}
                        onChange={onInputChange}
                        error={errors.imgUrl3}
                        name="imgUrl3"
                        id="imgUrl3"
                        label="Hotel Image"
                    />
                    <Input
                        placeholder="Put your image link"
                        type="text"
                        value={hotel.imgUrl4}
                        onChange={onInputChange}
                        error={errors.imgUrl4}
                        name="imgUrl4"
                        id="imgUrl4"
                        label="Hotel Image"
                    />
                    <Input
                        placeholder="Put your image link"
                        type="text"
                        value={hotel.imgUrl5}
                        onChange={onInputChange}
                        error={errors.imgUrl5}
                        name="imgUrl5"
                        id="imgUrl5"
                        label="Hotel Image"
                    />

                    <Input
                        placeholder="Put your image link"
                        type="text"
                        value={hotel.imgUrl6}
                        onChange={onInputChange}
                        error={errors.imgUrl6}
                        name="imgUrl6"
                        id="imgUrl6"
                        label="Hotel Image"
                    />
                    <div className="Buttons">
                        <button onClick={() => navigate('/')}>Go Back</button>
                        <button className="Submit" disabled={!isValid}>
                            Add Hotel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
