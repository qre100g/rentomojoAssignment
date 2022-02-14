import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage (props) {

    var [userData, setUserData] = useState();
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    var [userDataBeforeFilters, setdata] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            return res.json();
        }).then ((res) => {
            setUserData(res);
            setdata(res);
        })
    }, []);

    useEffect( () => {
        if(userData) {
            setUserData(userDataBeforeFilters.filter((e) => {
                if(e.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 && 
                e.company.name.toLowerCase().indexOf(companyName.toLowerCase()) >= 0) {
                    return e;
                }
            }))
        }
    },[name, companyName])

    return(
        <div>
            <h1> User Data </h1>
            <div className='flex'>

                <div className='filters'>
                    <div className='filtersField'>
                        <span>Name: </span> 
                        <input value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}></input>
                    </div>

                    <div className='filtersField'>
                        <span>Company: </span> 
                        <input value = {companyName}
                            onChange= {(e) => {
                                setCompanyName(e.target.value)
                            }}></input>
                    </div>
                </div>

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
                                    state={{
                                        userId: e.id,
                                        userName: e.name,
                                    }}
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
        </div>
    );
}

export default HomePage;