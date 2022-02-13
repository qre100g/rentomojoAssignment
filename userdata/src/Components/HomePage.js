import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage (props) {

    const [userData, setUserData] = useState();

    const nextPage = `<Sample/>`

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            return res.json();
        }).then ((res) => {
            setUserData(res);
        })
    }, []);

    return(
        <div>
            {console.log(userData)};
            <h1> Assignment </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {userData? userData.map((e) => {
                        return <tr>
                            <td>{e.name}</td>
                            <td>{e.company.name}</td>
                            <td>
                                <Link 
                                to = "/postspage"
                                state={{userId: `${e.id}`}}
                                style= {{textDecoration: 'none', color: 'black'}} 
                                >
                                    <span className='nodecoration'>See Posts</span>
                                </Link>
                            </td>
                        </tr>
                    }) : <h3>no dara</h3> }
                </tbody>
            </table>
        </div>
    );
}

export default HomePage;