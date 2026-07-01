import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

function SignIn() {

    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {

        if (!email) {
            alert("Please enter your email");
            return;
        }

        if (!password) {
            alert("Please enter your password");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        try {

            if (isRegister) {

                if (password !== confirmPassword) {
                    alert("Passwords do not match");
                    return;
                }

                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                alert("Account created successfully!");

            } else {

                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                alert("Login successful!");

            }

            navigate("/dashboard");

        } catch (error) {

            alert(error.message);

        }
    };

    return (

        <div className="signIn">

            <img
                src="/netflix-logo.png"
                alt="Netflix"
                className="logo-img signin-logo"
            />

            <h1>
                {isRegister ? "Create Account" : "Sign In"}
            </h1>

            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            {isRegister && (

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmPassword(e.target.value)
                    }
                />

            )}

            <button
                className="continue-btn"
                onClick={handleSubmit}
            >
                {isRegister ? "Register" : "Continue"}
            </button>

            <p className="auth-switch">

                {isRegister
                    ? "Already have an account?"
                    : "New to Netflix?"}

                <span
                    onClick={() =>
                        setIsRegister(!isRegister)
                    }
                >
                    {isRegister
                        ? " Sign In"
                        : " Sign Up Now"}
                </span>

            </p>

        </div>

    );
}

export default SignIn;