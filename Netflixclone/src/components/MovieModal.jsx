import { useNavigate } from "react-router-dom";
function MovieModal({ movie, closeModal }) {
    const navigate = useNavigate();
    return (
        <div className="modal-overlay">

            <div className="modal-content">

                <button
                    className="close-btn"
                    onClick={closeModal}
                >
                    ✖
                </button>

                <img
                    src={movie.image?.original}
                    alt={movie.name}
                />

                <h2>{movie.name}</h2>

                <p>
                    ⭐ {movie.rating?.average || "N/A"}
                </p>

                <p
                    dangerouslySetInnerHTML={{
                        __html: movie.summary
                    }}
                />

                <div className="modal-buttons">

                    <button className="play-btn"
                        onClick={() => navigate("/signIn")}
                    >
                        ▶ Play
                    </button>

                    <button className="list-btn">
                        + My List
                    </button>

                </div>

            </div>

        </div>
    );
}

export default MovieModal;