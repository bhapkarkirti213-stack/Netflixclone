import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function DashboardNavbar() {

    const user = auth.currentUser;

    const logout = async () => {

        await signOut(auth);

        window.location.href = "/signin";
    };

    return (
        <nav className="dashboard-navbar">

            <h1 className="netflix-logo">
                NETFLIX
            </h1>

            <div className="nav-right">

                <span className="user-email">
                    👤 {user?.email}
                </span>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default DashboardNavbar;