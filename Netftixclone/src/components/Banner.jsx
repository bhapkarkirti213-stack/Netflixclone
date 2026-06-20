function Banner() {
    return (
        <div className="banner">
            <h1 >Unlimited movies,show,
                <br />
                and more
            </h1>
            <h3>watch anywhere.cancel at any time</h3>
            <p className="banner-description">Ready to watch? Enter your email to create or restart
                your membership..</p>
            <div className="Banner-form">
                <input type="email" placeholder="Email address" />
                <button className="get-started-btn">Get Started </button>

            </div>
        </div>
    );
}

export default Banner;