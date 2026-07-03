import { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);

    const user = auth.currentUser;

    // Use Full Name if available, otherwise email username
    const userName =
        user?.displayName ||
        user?.email?.split("@")[0] ||
        "Guest";

    const logout = async () => {

        try {

            await signOut(auth);

            navigate("/signin");

        } catch (error) {

            alert(error.message);

        }

    };

    return (

        <nav className="dashboard-navbar">

            {/* Netflix Logo */}
            <img
                src="/netflix-logo.png"
                alt="Netflix"
                className="dashboard-logo"
            />

            {/* Right Side */}
            <div className="nav-right">

                <div
                    className="profile-container"
                    onClick={() => setShowMenu(!showMenu)}
                >

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Profile"
                        className="profile-avatar"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    {showMenu && (

                        <div className="profile-menu">

                            <div className="menu-item">
                                👤 {userName}
                            </div>

                            <div className="menu-item">
                                ✏ Manage Profiles
                            </div>

                            <div className="menu-item">
                                👤 Account
                            </div>

                            <div className="menu-item">
                                ❤️ My List
                            </div>

                            <div className="menu-item">
                                ⚙ Settings
                            </div>

                            <div className="menu-item">
                                ❓ Help Center
                            </div>

                            <hr />

                            <div
                                className="menu-item logout"
                                onClick={logout}
                            >
                                🚪 Sign Out
                            </div>

                        </div>

                    )}

                </div>

            </div>

        </nav>

    );

}

export default DashboardNavbar;