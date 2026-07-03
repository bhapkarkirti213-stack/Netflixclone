import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { auth } from "../firebase";

function SignIn() {

    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {

        if (isRegister && !fullName.trim()) {
            alert("Please enter your Full Name");
            return;
        }

        if (!email.trim()) {
            alert("Please enter your Email");
            return;
        }

        if (!password) {
            alert("Please enter your Password");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (isRegister && password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            if (isRegister) {

                const userCredential =
                    await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );

                await updateProfile(userCredential.user, {
                    displayName: fullName
                });

                alert("Account Created Successfully!");

            } else {

                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                alert("Login Successful!");

            }

            navigate("/dashboard");

        } catch (error) {

            switch (error.code) {

                case "auth/email-already-in-use":
                    alert("Email is already registered.");
                    break;

                case "auth/invalid-email":
                    alert("Invalid Email Address.");
                    break;

                case "auth/user-not-found":
                    alert("No account found with this email.");
                    break;

                case "auth/wrong-password":
                    alert("Incorrect Password.");
                    break;

                case "auth/invalid-credential":
                    alert("Invalid Email or Password.");
                    break;

                case "auth/weak-password":
                    alert("Password should be at least 6 characters.");
                    break;

                default:
                    alert(error.message);
            }
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

            {isRegister && (

                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) =>
                        setFullName(e.target.value)
                    }
                />

            )}

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
                {isRegister ? "Register" : "Sign In"}
            </button>

            <p className="auth-switch">

                {isRegister
                    ? "Already have an account?"
                    : "New to Netflix?"}

                <span
                    onClick={() =>
                        setIsRegister(!isRegister)
                    }
                    style={{
                        color: "#E50914",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
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