import "./Users.css";

const Users = ({user}) => {
    const {name, email, phone} = user;
    return (
        <div className="users">
            <h3>Name: {name}.</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Users;