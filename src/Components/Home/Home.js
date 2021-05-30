import React from 'react';
import Navbar from '../Navbar/Navbar';
import MovieListing from '../MovieListing/MovieListing';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <MovieListing/>
            <Footer/>
        </div>
    );
};

export default Home;