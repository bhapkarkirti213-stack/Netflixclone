function DashboardNavbar() {
    return (
        <div className="dashboard-nav">

            <img
                src="/netflix-logo.png"
                alt="Netflix"
                className="dashboard-logo"
            />

            <div className="nav-links">

                <span>Home</span>

                <span>TV Shows</span>

                <span>Movies</span>

                <span>My List</span>

            </div>

            <div className="nav-icons">

                <button className="nav-icon-btn">
                    🔍
                </button>

                <button className="nav-icon-btn">
                    👤
                </button>

            </div>

        </div>
    );
}

export default DashboardNavbar;