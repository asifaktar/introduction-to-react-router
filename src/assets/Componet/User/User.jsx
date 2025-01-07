import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";
import "./User.css";

const User = () => {
    const user = useLoaderData();
    
    return (
        <div>
            <h4>Hi im user page!!</h4>
            <h3>Total length of ({user.length})</h3>
            <div className="user">
                {
                    user.map(user => <Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default User;