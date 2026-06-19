import { useState, useEffect } from "react";
import MovieModal from "./MovieModal";
import { useNavigate } from "react-router-dom";

function Trending() {

    const navigate = useNavigate();
    const [selectedMovie, setSelectedMovie] = useState(null);


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.slice(0, 10));
            });
    }, []);

    return (
        <>
            <div className="trending">

                <h2>Trending Now</h2>

                <br />

                <div className="movie-slider">

                    {movies.map((movie, index) => (

                        <div
                            className="movie-card"
                            key={movie.id}
                            onClick={() => setSelectedMovie(movie)}
                        >
                            <span className="movie-rank">
                                {index + 1}
                            </span>

                            <img
                                src={movie.image?.medium}
                                alt={movie.name}
                            />
                        </div>

                    ))}

                </div>

            </div>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    closeModal={() => setSelectedMovie(null)}
                />
            )}
        </>
    );
}

export default Trending;