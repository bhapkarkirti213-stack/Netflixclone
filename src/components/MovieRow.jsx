import { useState } from "react";
import MovieModal from "./MovieModal";

function MovieRow({ title, shows, addToMyList }) {

    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <>
            <div className="movie-row">

                <h2>{title}</h2>

                <div className="row-posters">

                    {shows.slice(0, 10).map((show) => (

                        <div
                            className="movie-card"
                            key={show.id}
                            onClick={() => setSelectedMovie(show)}
                        >

                            <img
                                src={show.image?.medium}
                                alt={show.name}
                            />

                            <div className="hover-content">

                                <h4>{show.name}</h4>

                                <p>
                                    ⭐ {show.rating?.average || "N/A"}
                                </p>



                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    closeModal={() => setSelectedMovie(null)}
                    addToMyList={addToMyList}
                />
            )}

        </>
    );
}

export default MovieRow;