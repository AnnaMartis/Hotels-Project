import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Gallery } from '../components/Detail/Gallery';
import { BackLink } from '../components/Detail/BackLink';
import { Overview } from '../components/Detail/Overview';
import { Rooms } from '../components/Detail/Rooms';
import { getHotelById, getRoomsById } from '../api';

export const Detail = () => {
    const [hotel, setHotel] = useState();
    const [rooms, setRooms] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getHotelById(id).then((hotel) => {
            setHotel(hotel);
        });

        if (id > 20) {
            getRoomsById().then((rooms) => {
                setRooms(rooms);
            });
        } else {
            getRoomsById(id).then((rooms) => {
                setRooms(rooms);
            });
        }
    }, [id]);

    return (
        <div>
            <BackLink />
            <Gallery hotel={hotel} />
            <Overview hotel={hotel} />
            <Rooms {...rooms} />
        </div>
    );
};
