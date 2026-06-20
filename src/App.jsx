import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import ProfileSelect from "./components/ProfileSelect";

import "./App.css";

function HomePage() {
  return (
    <>
      <div className="hero">
        <img
          src="/netflix-logo.png"
          alt="Netflix"
          className="logo-img"
        />

        <Navbar />
        <Banner />
      </div>

      <div className="content">
        <Trending />
        <Reasons />
        <FAQ />
      </div>
    </>
  );
}

function App() {

  const [profile, setProfile] = useState(null);

  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/signin"
        element={<SignIn />}
      />

      <Route
        path="/dashboard"
        element={
          profile ? (
            <Dashboard profile={profile} />
          ) : (
            <ProfileSelect setProfile={setProfile} />
          )
        }
      />

    </Routes>
  );
}

export default App;