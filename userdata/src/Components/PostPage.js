import { useEffect, useState } from "react";
import { useLocation , Link} from "react-router-dom";
import '../App.css';

function PostPage(props) {

    const [posts, setPostsdata] = useState();
    const location = useLocation();
    const {userId} = location.state;

    useEffect(() => {
        console.log(props);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => {
            return res.json()
        }).then((res) => {
            setPostsdata(res);
        })
    }, [])

    return (
        <div>
            <h3>Posts By Mukesh</h3>
            {posts ? <div className="flex"> 
                {console.log(posts)}
                {posts.map((e) => {
                    return <div className="post"> 
                        <Link to= "/postdetails" className="nodec" state = {{
                            userId: userId,
                            postId: e.id,
                            postdata : e
                        }}>
                            <h3>{e.title}</h3>
                        </Link>
                    </div>
                })}
            </div> : <h1>loading</h1>}
        </div>
    )
}

export default PostPage;