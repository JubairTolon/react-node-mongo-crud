import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedUser = { email, name };
        //send data to server

        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('user added sussessfully');
                event.target.reset();
            })
    }

    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" required placeholder='Enter your name' /> <br />
                <input type="text" name="email" required placeholder='Enter your email' /> <br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};
export default UpdateUser;