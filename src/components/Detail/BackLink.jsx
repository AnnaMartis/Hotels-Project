import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../css/Detail.css';

export const BackLink = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    };

    return (
        <div className="BackLink">
            <div className="Container">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span onClick={handleNavigate}> Back</span>
            </div>
        </div>
    );
};
