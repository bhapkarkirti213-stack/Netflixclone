function ProfileSelect({ setProfile }) {

    return (
        <div className="profile-select">

            <h1>Who's Watching?</h1>

            <div className="profiles">

                <button
                    className="profile-card"
                    onClick={() => setProfile("Kirti")}
                >
                    👤
                    <span>Kirti</span>
                </button>

                <button
                    className="profile-card"
                    onClick={() => setProfile("Guest")}
                >
                    👤
                    <span>Guest</span>
                </button>

            </div>

        </div>
    );
}

export default ProfileSelect;