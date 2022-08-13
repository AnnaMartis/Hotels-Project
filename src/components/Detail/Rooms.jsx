import React from 'react';
import '../../css/Detail.css';

export const Rooms = (props) => {
    const roomArr = [0, 1, 2];

    const rooms = roomArr.map((ind) => {
        return (
            <div className="Box" key={ind}>
                <div className="ImgPart">
                    <img src={props[ind]?.imgUrl1} alt="hotel" />
                </div>
                <div className="ContentPart">
                    <h3 className="Innerheader"></h3>
                    <ul>
                        <li>Sleeps 2</li>
                        <li>Free WiFi</li>
                    </ul>
                </div>
                <div className="PricePart">
                    <p>108 USD</p>
                    <button className="Register">Reserve</button>
                </div>
            </div>
        );
    });

    return (
        <div className="Rooms">
            <div className="Container">
                <h2 className="Heading">Choose your room</h2>
                <div className="Inner">{rooms}</div>
            </div>
        </div>
    );
};
