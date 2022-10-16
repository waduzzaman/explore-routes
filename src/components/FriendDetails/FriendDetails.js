import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () =>
{
    
    const friend = useLoaderData();

    return (
        <div>
            <h1>Details About: { friend.name }</h1>
            <h2>Call him/her: { friend.phone }</h2>
            <h2>Everything you need to know about this person</h2>
            
        </div>
    );
};

export default FriendDetails;