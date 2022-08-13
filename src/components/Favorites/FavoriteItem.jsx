import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const FavoriteItem = ({ hotel, removeFromFavorites }) => {
    let rating;

    if (hotel.rating > 9) {
        rating = 'Wonderful';
    } else if (hotel.rating > 8) {
        rating = 'Very Good';
    } else if (hotel.rating > 7) {
        rating = 'Good';
    }

    return (
        <div>
            <div className="HotelFavorite">
                <div className="Imgpart">
                    <img src={hotel.imgUrl1} alt="hotelpic" />
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
                            <span className="Refundable">
                                {hotel.paymentType}
                            </span>
                        </div>
                    </div>

                    <div className="FooterContent">
                        <div className="ReviewPart">
                            <span className="Bold">{hotel.rating}/10</span>
                            <span> {rating}</span>
                        </div>
                        <div className="PricePart">
                            <span className="Prom">
                                {hotel.propClass}{' '}
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="Realprice">USD {hotel.price}</span>
                            <button
                                className="Remove"
                                onClick={() => removeFromFavorites(hotel.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
