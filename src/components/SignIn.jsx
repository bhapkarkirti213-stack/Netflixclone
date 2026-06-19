import { useNavigate } from "react-router-dom";
function SignIn() {
    const navigate = useNavigate();
    return (
        <div className="signIn">
            <img
                src="/netflix-logo.png"
                alt="Netflix"
                className="logo-img signin-logo"
            />

            <h1>Enter your info to sign in</h1>

            <input
                type="text"
                placeholder="Email or phone number"
            />

            <input
                type="password"
                placeholder="Password"
            />

            <button className="continue-btn" onClick={() => navigate("/dashboard")}>
                Continue
            </button>
        </div>
    );
}

export default SignIn;