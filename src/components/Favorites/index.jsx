import React from 'react';
import { FavoriteItem } from './FavoriteItem';
import '../../css/Results.css';

export const Favorites = ({
    removeFromFavorites,
    getFavourites,
    handleModalClose
}) => {
    const favorites = getFavourites();
    return (
        <div>
            <div className="FavoritesPart">
                <div className="Container">
                    <div className="HeadPart">
                        <h3 className="Heading">
                            Favorite Hotels{' '}
                            {getFavourites().length === 0 && 'List Is Empty'}
                        </h3>
                        <h3
                            className="Heading Close"
                            onClick={handleModalClose}
                        >
                            X
                        </h3>
                    </div>
                    <div className="FavHotelsPart">
                        {favorites.map((hotel) => {
                            return (
                                <FavoriteItem
                                    hotel={hotel}
                                    key={hotel.id}
                                    removeFromFavorites={removeFromFavorites}
                                    getFavourites={getFavourites}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
