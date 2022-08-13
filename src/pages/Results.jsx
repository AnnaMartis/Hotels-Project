import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sort } from '../components/Sort';
import { Search } from '../components/Search';
import { Sidebar } from '../components/Sidebar';
import { Hotels } from '../components/Hotels';
import { Favorites } from '../components/Favorites';
import { FavouritesContext } from '../App';
import { getResults } from '../api';
import '../css/Results.css';

export const Results = () => {
    const [searchParams] = useSearchParams();
    const [hotels, setHotels] = useState([]);
    const [countHotel, setCountHotel] = useState(0);

    const [_, setFavorites] = useState([]);

    const { isFavoritesVisible, setIsFavoritesVisible } =
        useContext(FavouritesContext);

    const handleModalClose = () => {
        setIsFavoritesVisible(false);
    };

    const getFavourites = (key = 'favourites') => {
        return JSON.parse(localStorage.getItem(key) || '[]');
    };

    const addToFavorites = (hotel, key = 'favourites') => {
        setFavorites([]);
        const fav = getFavourites();
        fav.unshift(hotel);
        localStorage.setItem(key, JSON.stringify(fav));
    };

    const removeFromFavorites = (id, key = 'favourites') => {
        setFavorites([]);
        const fav = getFavourites().filter((hotel) => hotel.id !== id);
        localStorage.setItem(key, JSON.stringify(fav));
    };

    useEffect(() => {
        getResults(searchParams).then(({ hotels, count }) => {
            setHotels(hotels);
            setCountHotel(count);
        });
    }, [searchParams]);

    return (
        <div className="Results">
            <Search />
            {isFavoritesVisible && (
                <Favorites
                    removeFromFavorites={removeFromFavorites}
                    getFavourites={getFavourites}
                    handleModalClose={handleModalClose}
                />
            )}

            <div className="MainBody">
                <div className="Container">
                    <div className="Leftside">
                        <Sidebar />
                    </div>
                    <div className="Rightside">
                        <Sort hotels={[...hotels]} countHotel={countHotel} />
                        <Hotels
                            hotels={[...hotels]}
                            countHotel={countHotel}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                            getFavourites={getFavourites}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
