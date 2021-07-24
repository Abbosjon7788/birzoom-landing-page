import React from 'react';
import PlatformCard from "./PlatformCard";

const AboutPlatform = () => {
    return (
        <div className="w-10/12 mx-auto mt-48 mb-24">
            <h1 className="font-bold text-3xl text-center pb-12">Platforma haqida</h1>
            <div className="flex">
                <PlatformCard/>
                <PlatformCard/>
                <PlatformCard/>
            </div>
        </div>
    );
};

export default AboutPlatform;