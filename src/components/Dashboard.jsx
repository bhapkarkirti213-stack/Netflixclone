import MovieRow from "./MovieRow";
import { useState, useEffect } from "react";

function Dashboard() {

    const [shows, setShows] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [myList, setMyList] = useState([]);

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

    const filteredShows = shows.filter((show) =>
        show.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addToMyList = (show) => {

        const alreadyExists = myList.find(
            (item) => item.id === show.id
        );

        if (!alreadyExists) {
            setMyList([...myList, show]);
        }
    };

    return (
        <div className="dashboard">

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Featured Banner */}
            {!searchTerm && (
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
            )}

            {/* Search Results */}
            {searchTerm ? (

                <MovieRow
                    title={`Search Results (${filteredShows.length})`}
                    shows={filteredShows}
                    addToMyList={addToMyList}
                />

            ) : (

                <>
                    {/* My List */}
                    {myList.length > 0 && (
                        <MovieRow
                            title="❤️ My List"
                            shows={myList}
                            addToMyList={addToMyList}
                        />
                    )}

                    <MovieRow
                        title="Trending Now"
                        shows={shows.slice(0, 10)}
                        addToMyList={addToMyList}
                    />

                    <MovieRow
                        title="Popular"
                        shows={shows.slice(10, 20)}
                        addToMyList={addToMyList}
                    />

                    <MovieRow
                        title="Drama"
                        shows={shows.filter(
                            show => show.genres.includes("Drama")
                        )}
                        addToMyList={addToMyList}
                    />

                    <MovieRow
                        title="Comedy"
                        shows={shows.filter(
                            show => show.genres.includes("Comedy")
                        )}
                        addToMyList={addToMyList}
                    />
                </>

            )}

        </div>
    );
}

export default Dashboard;