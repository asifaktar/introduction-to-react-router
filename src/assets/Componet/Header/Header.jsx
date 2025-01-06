
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div>
            <h1>NavBer</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Service">Service</Link>
                <Link to="/User">User</Link>
                <Link to="/About">AboutUs</Link>
            </ul>
        </div>
    );
};

export default Header;