function MovieRow({ title, shows, addToMyList }) {

    return (
        <div className="movie-row">

            <h2>{title}</h2>

            <div className="row-posters">

                {shows.slice(0, 10).map((show) => (

                    <div
                        className="movie-card"
                        key={show.id}
                    >

                        <img
                            src={show.image?.medium}
                            alt={show.name}
                        />

                        {addToMyList && (
                            <button
                                className="my-list-btn"
                                onClick={() => addToMyList(show)}
                            >
                                + My List
                            </button>
                        )}

                    </div>

                ))}

            </div>

        </div>
    );
}

export default MovieRow;