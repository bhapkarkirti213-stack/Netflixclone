function Trending() {
    const movies = [
        "/movie1.jpg",
        "/movie2.jpg",
        "/movie3.jpg",
        "/movie4.jpg",
        "/movie5.jpg",
        "/movie6.jpg",
        "/movie7.jpg",
        "/movie8.jpg",
        "/movie9.jpg",
        "/movie10.jpg"
    ];
    return (
        <div className="trending">
            <h2>Trending Now</h2>
            <br />
            <div className="movie-slider">
                {movies.map((movie, index) => (
                    <div className="movie-card" key={index}>
                        <span className="movie-rank">{index + 1}</span>
                        <img src={movie} alt="movie" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Trending;