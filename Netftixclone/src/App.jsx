import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ";

import './App.css';

function App() {
  return (
    <>
      <div className="hero">
        <img src="/netflix-logo.png" alt="Netflix" className="logo-img" />
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

export default App;
