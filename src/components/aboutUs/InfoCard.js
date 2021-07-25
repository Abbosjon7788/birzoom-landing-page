import React from 'react';

const InfoCard = (props) => {
    return (
        <div className="w-full px-36">
            <img src={props.url} className="mx-auto rounded-full border-2 border-yellow-400" alt=""/>
            <h1 className="font-semibold text-xl text-center tracking-wider my-6">{props.name}</h1>
            <p className="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Id venenatis condimentum sit gravida fermentum diam a. Tortor fringilla massa urna, cursus. Aliquam amet
                eu sem libero consequat xkihdparturient. Amet amet pulvinaccId venenatis condimentum sit gravida
                fermentum diam a. Tortor fringilla massa urna, cursus. Aliquam amet eu sem libero consequat
                xkihdparturient. Amet amet pulvinacc</p>
        </div>
    );
};

export default InfoCard;