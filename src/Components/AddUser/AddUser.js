import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { email, name };
        //send data to server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
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
            <h2>Please add a new user:</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" required placeholder='Enter your name' /> <br />
                <input type="text" name="email" required placeholder='Enter your email' /> <br />
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;