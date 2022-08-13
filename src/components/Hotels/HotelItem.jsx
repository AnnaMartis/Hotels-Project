import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

const HotelItem = ({
    hotel,
    addToFavorites,
    removeFromFavorites,
    getFavourites
}) => {
    const [searchparams] = useSearchParams();
    const adults = searchparams.get('adults');

    let rating;

    if (hotel.rating > 9) {
        rating = 'Wonderful';
    } else if (hotel.rating > 8) {
        rating = 'Very Good';
    } else if (hotel.rating > 7) {
        rating = 'Good';
    }

    const favorites = getFavourites();
    const findIndex = favorites.findIndex((fav) => {
        return fav.id === hotel.id;
    });

    const handleFavorites = () => {
        if (findIndex === -1) {
            addToFavorites(hotel);
        } else {
            removeFromFavorites(hotel.id);
        }
    };

    return (
        <div className="Hotel">
            <div className="Imgpart">
                <img src={hotel.imgUrl1} alt="hotelpic" />

                <FontAwesomeIcon
                    icon={faHeart}
                    onClick={handleFavorites}
                    className={findIndex !== -1 ? 'Selected' : 'UnSelected'}
                />
            </div>
            <div className="Content">
                <div className="Innercontent">
                    <div className="Name">
                        <Link
                            to={'/hotels/' + hotel.id}
                            type="submit"
                            className="Hotelname"
                        >
                            {hotel.title}
                        </Link>
                        <span className="Hotelplace">{hotel.quartier}</span>
                    </div>
                    <div className="Type">
                        <span className="Refundable">{hotel.paymentType}</span>
                    </div>
                </div>

                <div className="FooterContent">
                    <div className="ReviewPart">
                        <span className="Bold">{hotel.rating}/10</span>
                        <span> {rating}</span>
                    </div>
                    <div className="PricePart">
                        <span className="Prom">
                            {hotel.propClass} <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span className="Realprice">
                            USD {hotel.price * adults}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelItem;
