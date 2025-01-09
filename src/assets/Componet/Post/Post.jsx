
import { Link } from 'react-router-dom';
import './post.css'
const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div className="post">
                <h2>Id: {id}</h2>
                <h3>Title:</h3>
                <h4>{title}</h4>
                <Link to ={`/post/${id}`}><button>Post Detail</button></Link>
            </div>
        </div>
    );
};

export default Post;