import HotelItem from './HotelItem';
import { Pagination } from '../Pagination';

export const Hotels = ({
    hotels,
    countHotel,
    getFavourites,
    addToFavorites,
    removeFromFavorites,
    favorites
}) => {
    return (
        <div className="HotelsPart">
            {hotels.map((hotel) => {
                return (
                    <HotelItem
                        hotel={hotel}
                        key={hotel.id}
                        getFavourites={getFavourites}
                        addToFavorites={addToFavorites}
                        removeFromFavorites={removeFromFavorites}
                        favorites={favorites}
                    />
                );
            })}
            <Pagination hotels={hotels} countHotel={countHotel} />
        </div>
    );
};
