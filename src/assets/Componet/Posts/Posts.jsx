
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css"

const Posts = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <div>
                <h2>Hi im posts page</h2>
                <h4>Post length {posts.length}</h4>
                <div className="posts">
                    {
                        posts.map(post => <Post key={posts.id} post={post}></Post>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Posts;