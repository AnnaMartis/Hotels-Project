import React from 'react';
import '../css/TravelConfidence.css';

export const TravelConfidence = () => {
    return (
        <div className="Confidence">
            <div className="Container">
                <h3 className="Innerheader">Travel with confidence</h3>
                <p className="Outercontent">
                    Many properties have updated us about their enhanced health
                    and safety measures. So, during your search, you may find
                    details like:
                </p>
                <div className="Inner">
                    <div className="Leftside">
                        <div className="Box">
                            <i className="fas fa-circle-check"></i>
                            <div className="Content">
                                <b>Official halth standarts</b>
                                <p>
                                    Properties adhering to
                                    corporate/organisational sanitisation
                                    guidelines.
                                </p>
                            </div>
                        </div>
                        <div className="Box">
                            <i className="fas fa-pump-medical"></i>
                            <div className="Content">
                                <b>Hygiene and sanitisation</b>
                                <p>
                                    The use of disinfectant and whether
                                    properties enforce a gap period between
                                    stays
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="Rightside">
                        <div className="Box">
                            <i className="fas fa-people-arrows-left-right"></i>
                            <div className="Content">
                                <b>Social distancing</b>
                                <p>
                                    Contactless check-in and check-out along
                                    with other social distancing measures.
                                </p>
                            </div>
                        </div>
                        <div className="Box">
                            <i className="fas fa-hand-holding-droplet"></i>
                            <div className="Content">
                                <b>Essentials at the property</b>
                                <p>
                                    Free hand sanitiser for guests and
                                    individually wrapped food options
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
