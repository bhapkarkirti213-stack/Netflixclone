function Navbar() {
    return (
        <nav className="navbar">

            <div className="nav-right">
                <select>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="mr">Marathi</option>
                </select>
                <button>Sign In</button>
            </div>
        </nav>
    );
}

export default Navbar;