
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div>
            <h1>NavBer</h1>
            <ul>
                {/* <Link to="/">Home</Link> */}
                <NavLink to ="/">Home</NavLink>
                {/* <Link to="/Contact">Contact</Link> */}
                <NavLink to ="/Contact">Contact</NavLink>
                {/* <Link to ="/posts">Posts</Link> */} 
                <NavLink to ="/posts">Posts</NavLink>
                {/* <Link to="/User">User</Link> */}
                <NavLink to ="/User">User</NavLink>
                {/* <Link to="/About">AboutUs</Link> */}
                <NavLink to ="/About">About</NavLink>
            </ul>
        </div>
    );
};

export default Header;