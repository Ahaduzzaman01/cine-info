import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setMovies} from "../../redux/actions/movieActions";
import axios from "axios";
import MovieComponent from '../MovieComponent/MovieComponent';

const MovieListing = () => {
    const dispatch = useDispatch();
    
    const fetchMovies = async () => {
        const response = await axios
        .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd5b5e8441d7c01ccc6efe026fd76491")
        .catch((err) => {
            console.log("Error", err);
        });
        dispatch(setMovies(response.data));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-3 custom-card-container justify-content-center container m-auto my-5">
            <MovieComponent/>
        </div>
    );
};

export default MovieListing;