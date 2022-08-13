import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Detail } from './pages/Detail';
import { Results } from './pages/Results';
import { AddHotel } from './pages/AddHotel';

export const FavouritesContext = React.createContext(null);
const App = () => {
    const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
    return (
        <FavouritesContext.Provider
            value={{ isFavoritesVisible, setIsFavoritesVisible }}
        >
            <Header />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/search/" element={<Results />} />
                <Route path="/hotels/:id" element={<Detail />} />
                <Route path="/addhotel/" element={<AddHotel />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </FavouritesContext.Provider>
    );
};

export default App;
