import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MovieComponent.css';
import starIcon from '../../images/star.jpg';

const MovieComponent = () => {
    const movies = useSelector((state) => state.allMovies.movies.results);

    const renderedMovieList = movies?.map((movie) => {
        const { id, title, vote_average, original_title, poster_path } = movie;
        const imgUrl = "https://image.tmdb.org/t/p/w500";

        return (
            <div className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card my-4 bg-white">
                <Link to={`/movie/${id}`}>
                    <div className="card custom-card">
                        <img src={imgUrl + poster_path} className="card-img-top" alt={title} />
                        <div className="d-flex justify-content-between align-items-center mx-2 mt-2">
                            <div>
                                <h5 className="card-title m-0">{original_title}</h5>
                            </div>
                            <div className="rating d-flex align-items-center">
                                <img src={starIcon} alt="" />
                                <p className="m-0">{vote_average}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <>
            {renderedMovieList}
        </>
    );
};

export default MovieComponent;