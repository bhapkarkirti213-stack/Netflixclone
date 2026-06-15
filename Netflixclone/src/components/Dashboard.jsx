import MovieRow from "./MovieRow";
import { useState, useEffect } from "react";

function Dashboard() {

    const [shows, setShows] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(0);

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then((response) => response.json())
            .then((data) => {
                setShows(data);
            });
    }, []);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentMovie((prev) => {

                if (shows.length === 0) return 0;

                return (prev + 1) % 10;

            });

        }, 5000);

        return () => clearInterval(interval);

    }, [shows]);

    return (
        <div className="dashboard">

            <div className="featured-banner">

                {shows[currentMovie] && (
                    <>
                        <img
                            key={shows[currentMovie].id}
                            src={shows[currentMovie].image?.original}
                            alt={shows[currentMovie].name}
                        />

                        <div className="banner-info">

                            <h1>
                                {shows[currentMovie].name}
                            </h1>

                            <p>
                                {shows[currentMovie].summary
                                    ?.replace(/<[^>]*>/g, "")
                                    .slice(0, 150)}
                                ...
                            </p>



                        </div>
                    </>
                )}

            </div>

            <MovieRow
                title="Trending Now"
                shows={shows.slice(0, 10)}
            />

            <MovieRow
                title="Popular"
                shows={shows.slice(10, 20)}
            />

            <MovieRow
                title="Drama"
                shows={shows.filter(
                    show => show.genres.includes("Drama")
                )}
            />

            <MovieRow
                title="Comedy"
                shows={shows.filter(
                    show => show.genres.includes("Comedy")
                )}
            />

        </div>
    );
}

export default Dashboard;