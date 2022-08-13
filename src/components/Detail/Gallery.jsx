import React from 'react';
import '../../css/Detail.css';

export const Gallery = ({ hotel }) => {
    return (
        <div className="GalleryPart">
            <div className="Container">
                <div className="PicPart">
                    <div className="ImgPart">
                        <img src={hotel?.[0].imgUrl2} alt="hotel" />
                    </div>
                    <div className="Inner">
                        <div className="box">
                            <img src={hotel?.[0].imgUrl3} alt="hotel" />
                            <img src={hotel?.[0].imgUrl4} alt="hotel" />
                        </div>
                        <div className="box">
                            <img src={hotel?.[0].imgUrl5} alt="hotel" />
                            <img src={hotel?.[0].imgUrl6} alt="hotel" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
