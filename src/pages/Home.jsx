import React from 'react';
import { Search } from '../components/Search';
import { TravelConfidence } from '../components/TravelConfidence';

export const Home = () => {
    return (
        <div className="Home">
            <Search />
            <TravelConfidence />
        </div>
    );
};
