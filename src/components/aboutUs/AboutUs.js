import React from 'react';
import Slider from 'react-slick';
import './about-us.scss';
import InfoCard from "./InfoCard";

const AboutUs = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className="w-10/12 z-50 relative mx-auto about-us mb-24">
            <h1 className="font-bold text-3xl text-center pb-12">Biz haqimizda ijobiy fikrlar</h1>

            <Slider {...settings} className="mx-12">
                <InfoCard name="Sevara Ismoilova" url="./images/Muqaddasxon.png"/>
                <InfoCard name="Muqaddasxon Karimova" url="./images/Nargiza.png"/>
                <InfoCard name="Nargiza Rashidova" url="./images/Muqaddasxon.png"/>
                <InfoCard name="Timur Abduhoshimov" url="./images/Temur.png"/>
            </Slider>
        </div>
    );
};

export default AboutUs;