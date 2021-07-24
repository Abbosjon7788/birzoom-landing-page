import React from 'react';

const TeamCard = (props) => {
    return (
        <div className="w-full p-4">
            <div className="bg-gray-300 rounded-lg p-6">
                <img src={props.src} className="mx-auto mt-4" alt=""/>
                <h1 className="text-center leading-normal w-1/2 block mx-auto font-bold text-lg my-3">{props.name}</h1>
                <p className="text-center text-sm text-gray-600">{props.defination} </p>
            </div>
        </div>
    );
};

export default TeamCard;