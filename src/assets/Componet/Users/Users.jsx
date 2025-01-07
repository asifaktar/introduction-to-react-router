import { Link } from "react-router-dom";
import "./Users.css";

const Users = ({user}) => {
    const {name, id, email, phone} = user;
    return (
        <div className="users">
            <h3>Name: {name}.</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link className="dark" to ={`/users/${id}`}><button className="show">Show Details</button></Link>
        </div>
    );
};

export default Users;