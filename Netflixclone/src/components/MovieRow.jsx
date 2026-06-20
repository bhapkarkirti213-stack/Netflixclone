function MovieRow({ title, shows }) {

    return (
        <div className="movie-row">

            <h2>{title}</h2>

            <div className="row-posters">

                {shows.slice(0, 10).map(show => (

                    <img
                        key={show.id}
                        src={show.image?.medium}
                        alt={show.name}
                    />

                ))}

            </div>

        </div>
    );
}

export default MovieRow;