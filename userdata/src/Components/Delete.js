import { useState } from "react"
import { Link, useLocation } from "react-router-dom";

function Delete (props) {
    const [flagDelete, setFlagDelete] = useState(true);
    const {userId, userName, postId} = props;
    //checking for type
    var val = 5;

    useState (() => {
        console.log(typeof(val));

        if(flagDelete) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            }).then ((res) => {
                return res.json();
            }).then (res => {
                val = res;
                console.log(typeof(val));
            })
        }
    }, [flagDelete])
    return (
        <div>
            <Link to='/postspage' state={{
                userId: userId,
                userName: userName
            }}>Delete Post</Link>
        </div>
    )
}

export default Delete;