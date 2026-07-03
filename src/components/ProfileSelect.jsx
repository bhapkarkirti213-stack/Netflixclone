import { auth } from "../firebase";

function ProfileSelect({ setProfile }) {

    const user = auth.currentUser;

    const userName =
        user?.displayName ||
        user?.email?.split("@")[0] ||
        "Guest";

    return (

        <div className="profile-select">

            <h1>Who's Watching?</h1>

            <div className="profiles">

                {/* Logged-in User */}
                <button
                    className="profile-card"
                    onClick={() => setProfile(userName)}
                >

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Profile"
                        className="profile-image"
                    />

                    <span>{userName}</span>

                </button>

                {/* Guest */}
                <button
                    className="profile-card"
                    onClick={() => setProfile("Guest")}
                >

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Guest"
                        className="profile-image"
                    />

                    <span>Guest</span>

                </button>

            </div>

        </div>

    );
}

export default ProfileSelect;