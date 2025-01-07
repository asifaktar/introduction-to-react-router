import { useLoaderData } from "react-router-dom";
import "./PostDetail.css";


const PostDetail = () => {
    const postDetail = useLoaderData();
    const {id, title, albumId} = postDetail;
    console.log(postDetail);

    
    return (
        <div>
            <div className="postDetail">
                <h2>Hi im post detail!!</h2>
                <h3>Title:</h3>
                <h4>{title}</h4>
                <h5>AlbumId:{albumId} Id:{id}</h5>
            </div>
        </div>
    );
};

export default PostDetail;