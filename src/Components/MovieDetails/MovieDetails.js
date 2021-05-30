import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovie } from '../../redux/actions/movieActions';
import Navbar from '../Navbar/Navbar';
import './MovieDetails.css';
import Footer from '../Footer/Footer';

const MovieDetails = () => {
    const movie = useSelector((state) => state.movie);
    const { original_title, poster_path, original_language, overview, release_date, runtime, vote_average, vote_count, status } = movie;

    const { movieId } = useParams();
    const dispatch = useDispatch();

    const imageURL = "https://image.tmdb.org/t/p/w500";

    const fetchMovieDetail = async () => {
        const response = await axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bd5b5e8441d7c01ccc6efe026fd76491`)
            .catch((err) => {
                console.log("Error", err);
            });
        dispatch(selectedMovie(response.data));
    };

    useEffect(() => {
        if (movieId && movieId !== "") fetchMovieDetail();
    }, [movieId]);

    return (
        <section>
            <Navbar />
            {Object.keys(movie).length === 0 ? (
                <div className="text-white text-center"><h1>Loading...</h1></div>
            ) : (
                <div className="d-flex my-5 container detail-container">
                    <div className="text-center detail-image-box">
                        <img className="" src={imageURL + poster_path} alt="..." />
                    </div>
                    <div className="text-part px-4 pt-3">
                        <div className="movie-name pb-2">
                            <h2 className="">{original_title}</h2>
                        </div>
                        <p className="overview-text mt-2"><strong>Movie Overview:</strong> {overview}</p>
                        <p><strong>Movie Language:</strong> {original_language}.</p>
                        <p><strong>Release Date:</strong> {release_date}</p>
                        <p><strong>Movie Runtime:</strong> {runtime} min.</p>
                        <p><strong>Movie Status:</strong> {status}.</p>
                        <p><strong>Rating:</strong> {vote_average}</p>
                        <p><strong>Total Review:</strong> {vote_count}</p>
                    </div>
                </div>
            )}

            <Footer/>
        </section>

    );
};

export default MovieDetails;