import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error("There was an error adding the user!")
        })
    }, [])
        

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AddUser;