import { useState, useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import { FavouritesContext } from '../App';
import '../css/Header.css';

export const Header = () => {
    const { isFavoritesVisible, setIsFavoritesVisible } =
        useContext(FavouritesContext);
    const navigate = useNavigate();

    const [_, setFavorites] = useState([]);
    const { pathname } = useLocation();
    const isSearchPage = pathname === '/search';

    const handleFavorites = () => setIsFavoritesVisible((prev) => !prev);
    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <div className="Header">
            <div className="Container">
                <div className="Logo">
                    <img src={logo} alt="logo" onClick={handleNavigation} />
                </div>
                <div className="Navbar">
                    <FontAwesomeIcon icon={faGlobe} />
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/addhotel">List your property</NavLink>
                    <span onClick={handleFavorites}>
                        {isSearchPage ? 'Favorites' : ''}
                    </span>
                </div>
            </div>
        </div>
    );
};
