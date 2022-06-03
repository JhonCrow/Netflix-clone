import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_URL = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        },
    };

    function handleClick(m) {
        console.log(m)
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(m?.name || m?.title || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error))
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((m) =>
                    ((isLargeRow && m.poster_path) ||
                        (!isLargeRow && m.backdrop_path)) && (
                        <img
                            key={m.id}
                            onClick={() => handleClick(m)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_URL}${isLargeRow ? m.poster_path : m.backdrop_path}`}
                            alt={m.title}
                        />
                    )
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}
