import { useEffect, useState } from "react";
import { useLocation , Link} from "react-router-dom";
import '../App.css';

function PostPage(props) {
    const [postsBeforeFilter, setdata] = useState();
    const [posts, setPostsdata] = useState();
    const [title, setTitle] = useState('');
    const location = useLocation();
    const {userId, userName} = location.state;
    const mark = <mark>.....</mark>

    useEffect(() => {
        console.log(props);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => {
            return res.json()
        }).then((res) => {
            setPostsdata(res);
            setdata(res);
        })
    }, [])

    useEffect(() => {
        if(posts) {
            setPostsdata(postsBeforeFilter.filter((e) => {
                if(e.title.toLowerCase().indexOf(title.toLowerCase()) >= 0) {
                    return e.title.replace(title, `<h5>title</h5>`);
                } 
            }))
        }
    }, [title])

    return (
        <div>
            <h3>Posts By {userName}</h3>

            <div className="filtersField" style={{
                justifyContent: 'center'
            }}>
                <span>Title: </span> 
                <input
                    placeholder="Enter Title"
                    value = {title}
                    onChange = {(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </div>

            {posts ? <div className="postContainer"> 
                {console.log(posts)}
                {posts.map((e) => {
                    return <div className="post"> 
                        <h3>{e.title}</h3>
                        <Link to= "/postdetails" className="nodec" state = {{
                            userId: userId,
                            userName: userName,
                            postId: e.id,
                            postdata : e
                        }}>
                            <h5>Post Details</h5>
                        </Link>
                    </div>
                })}
            </div> : <h1>loading</h1>}
        </div>
    )
}

export default PostPage;