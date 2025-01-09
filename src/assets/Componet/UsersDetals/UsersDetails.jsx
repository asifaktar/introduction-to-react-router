
import { useLoaderData, useNavigate } from "react-router-dom";
import "./Users-Detail.css"

const UsersDetails = () => {
    const user = useLoaderData();
    const {name, phone, website, id, company} = user
    console.log(user);
    const navigate = useNavigate()
    const handelGoBackUser = () =>{
        navigate(-1)
    }
    return (
        <div>
            <div className="userDetail">
                <h2>My details: 
                </h2>
                <span> Name: {name}</span>
                <h4>Phone: {phone}</h4>
                <h5>Website: { website}</h5>
                <p>Id: {id}</p>
                <p>Bs: {company.bs}</p>
                <div className="goBack">
                    <button onClick={handelGoBackUser}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default UsersDetails;