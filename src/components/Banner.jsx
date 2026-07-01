import { useNavigate } from "react-router-dom";

function Banner() {

    const navigate = useNavigate();

    return (
        <div className="banner">

            <h1>
                Unlimited movies, shows,
                <br />
                and more
            </h1>

            <h3>
                Watch anywhere. Cancel at any time.
            </h3>

            <p className="banner-description">
                Ready to watch? Enter your email to create or restart
                your membership.
            </p>

            <div className="Banner-form">

                <input
                    type="email"
                    placeholder="Email address"
                />

                <button
                    className="get-started-btn"
                    onClick={() => navigate("/signin")}
                >
                    Get Started →
                </button>

            </div>

        </div>
    );
}

export default Banner;