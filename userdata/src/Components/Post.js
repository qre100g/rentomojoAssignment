import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../App.css';
import Delete from "./Delete";

function Post(props) {
    const location = useLocation()
    const {userId, userName, postId, postdata} = location.state;

    const [commentsFlag, setCommentsFlag] = useState(false);
    const [commentsData, setCommentsData] = useState();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => {
            return res.json();
        }).then(res => {
            setCommentsData(res);
        })
    }, [])

    return (<div>
        {postdata ? 
        <div className="singlePost">
            <h1>{postdata.title}</h1>
            <p>{postdata.body}</p>

            <div className="post"> 
                <span>Post By {userName}</span>

                <span onClick={
                    (e) => {
                        console.log('clicked')
                        setCommentsFlag(!commentsFlag);
                    }
                }>{commentsFlag? <span>Hide Comments </span> : <span> Show Comments </span> }</span>

                <Delete userId = {userId} userName = {userName} postId = {postId}/>
            </div>

            {commentsFlag? <div style={{
                marginTop: "30px",
                textAlign:"start"
            }}>
                <h3>Comments</h3>
                {commentsData.map((e) => {
                    return <div>
                        <h5>{e.name}</h5>
                        <p>{e.body}</p>
                    </div>
                })}
            </div>:<></>}
        </div>
        
        : <h3>Post is loading</h3>}
    </div>)
}

export default Post;