
import { useLoaderData } from "react-router-dom";


const UsersDetails = () => {
    const user = useLoaderData();
    const {name} = user
    return (
        <div>
            <div>
                <h2>My details: 
                   <span> Name: {name}</span>
                </h2>
            </div>
        </div>
    );
};

export default UsersDetails;