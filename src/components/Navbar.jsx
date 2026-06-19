import { useNavigate } from "react-router-dom"
function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="navbar">

            <div className="nav-right">
                <select>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="mr">Marathi</option>
                </select>
                <button onClick={() => navigate("/signin")}>Sign In</button>
            </div>
        </nav>
    );
}

export default Navbar;