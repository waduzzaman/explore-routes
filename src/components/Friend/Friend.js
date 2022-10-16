import React from 'react';
import { Link } from 'react-router-dom';
import ('./Friend.css')

const Friend = ( { friend } ) =>
{
    const {id, name, email, username} = friend;
    return (
        <div class="friend">

            <h3>Name : { name}</h3>
            <h5>Email: { email}</h5>
            <p><small>User Name: <Link to={`/friend/${id}`}>{username}</Link></small></p>
            
        </div>
    );
};

export default Friend;