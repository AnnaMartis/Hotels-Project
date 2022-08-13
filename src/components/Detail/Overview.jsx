import React from 'react';
import '../../css/Detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    faMugHot,
    faWifi,
    faMartiniGlass,
    faFan
} from '@fortawesome/free-solid-svg-icons';

export const Overview = ({ hotel }) => {
    const stars = hotel?.[0].propClass;
    const starArr = [];

    for (let i = 0; i < stars; i++) {
        starArr.push(i);
    }

    let rating;

    if (hotel?.[0].rating > 9) {
        rating = 'Wonderful';
    } else if (hotel?.[0].rating > 8) {
        rating = 'Very Good';
    } else if (hotel?.[0].rating > 7) {
        rating = 'Good';
    }

    const propertyHighlights = hotel?.[0].propertyHighlights;
    const amenities = hotel?.[0].mainAmeneties;
    const families = hotel?.[0].forFamilies;
    const cleanings = hotel?.[0].cleaning;

    return (
        <div className="Overview">
            <div className="Container">
                <div className="HeadPart">
                    <div className="Inner">
                        <div className="DescripPart">
                            <h2 className="Heading">{hotel?.[0].title}</h2>
                            <div className="Stars">
                                {starArr.map((star) => {
                                    return (
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            key={star}
                                        />
                                    );
                                })}
                            </div>
                            <div className="Review">
                                <h4>
                                    {hotel?.[0].rating}/10 {rating}
                                </h4>
                            </div>
                        </div>
                        <div className="PropPart">
                            <h3 className="Innerheader">Property Highlights</h3>
                            <div className="Content">
                                <div className="Box">
                                    <div className="Property">
                                        <FontAwesomeIcon icon={faMugHot} />
                                        <span>{propertyHighlights?.[0]}</span>
                                    </div>
                                    <div className="Property">
                                        <FontAwesomeIcon
                                            icon={faMartiniGlass}
                                        />
                                        <span>{propertyHighlights?.[5]}</span>
                                    </div>
                                </div>
                                <div className="Box">
                                    <div className="Property">
                                        <FontAwesomeIcon icon={faWifi} />
                                        <span>{propertyHighlights?.[3]}</span>
                                    </div>
                                    <div className="Property">
                                        <FontAwesomeIcon icon={faFan} />
                                        <span>{propertyHighlights?.[2]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FooterPart">
                    <div className="Box">
                        <h3>Main amenities</h3>
                        {amenities?.map((amenity, ind) => {
                            return <p key={ind}>{amenity}</p>;
                        })}
                    </div>
                    <div className="Box">
                        <h3>For families</h3>
                        {families?.map((family, ind) => {
                            return <p key={ind}>{family}</p>;
                        })}
                    </div>
                    <div className="Box">
                        <h3>Cleaning & safety</h3>
                        {cleanings?.map((cleaning, ind) => {
                            return <p key={ind}>{cleaning}</p>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
