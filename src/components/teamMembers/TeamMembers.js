import React from 'react';
import Slider from 'react-slick';
import TeamCard from "./TeamCard";

const TeamMembers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };

    return (
        <div className="w-10/12 mx-auto mb-32">
            <h1 className="font-bold text-3xl text-center pb-8">Jamoa a'zolari</h1>

            <Slider {...settings}>
                <TeamCard src="./images/Muqaddasxon.png" name="Muqaddasxon Karimova" defination="Ingliz tili o’qituvchisi 7 yillik tajribaga ega. INHA talabasi"/>
                <TeamCard src="./images/Temur.png" name="Timur Abduhoshimov" defination="Ingliz tili o’qituvchisi 7 yillik tajribaga ega. INHA talabasi"/>
                <TeamCard src="./images/Muqaddasxon.png" name="Muqaddasxon Karimova" defination="Ingliz tili o’qituvchisi 7 yillik tajribaga ega. INHA talabasi"/>
                <TeamCard src="./images/Nargiza.png" name="Nargiza Rashidova" defination="Ingliz tili o’qituvchisi 7 yillik tajribaga ega. INHA talabasi"/>
                <TeamCard src="./images/Muqaddasxon.png" name="Muqaddasxon Karimova" defination="Ingliz tili o’qituvchisi 7 yillik tajribaga ega. INHA talabasi"/>
            </Slider>
        </div>
    );
};

export default TeamMembers;