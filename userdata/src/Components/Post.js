import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../App.css';

function Post(props) {
    const location = useLocation()
    const {userId, postId, postdata} = location.state;

    const [userData, setUserData] = useState();
    const [commentsFlag, setCommentsFlag] = useState(false);
    const [commentsData, setCommentsData] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => {
            return res.json();
        }).then((res) => {
            setUserData(res);
        })
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => {
            return res.json();
        }).then(res => {
            setCommentsData(res);
        })
    }, [])

    return (<div>
        {postdata && userData? 
        <div className="singlePost">
            <h1>{postdata.title}</h1>
            <p>{postdata.body}</p>

            <div className="flex"> 
                <span>Post By {userData.name}</span>
                <span onClick={
                    (e) => {
                        console.log('clicked')
                        setCommentsFlag(!commentsFlag);
                    }
                }>{commentsFlag? <span>Hide Comments </span> : <span> Show Comments </span> }</span>
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