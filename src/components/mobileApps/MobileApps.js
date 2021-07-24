import React from 'react';
import './mobile-app.scss';

const MobileApps = () => {
    return (
        <div className="bg-gray-200 mobile-app mb-24 pt-16">
            <div className="flex w-10/12 mx-auto">
                <div className="flex relative w-1/3">
                    <img src="./images/iPhone-11-pro-Max-2.png" className="z-10" alt=""/>
                    <img src="./images/iPhone-11-pro-Max.png" className="z-50 absolute right-16 bottom-0" alt=""/>
                </div>
                <div className="flex w-2/3">
                    <div className="ml-auto mt-12">
                        <h1 className="font-bold text-4xl w-3/4 mb-8">Endilikda <span className="text-red-600">birzoom</span> bilan darslar
                            oson va qulay</h1>
                        <p className="text-gray-600 w-3/4 text-lg leading-6">Birzoom ilovasidan foydalanib o’z bonuslaringizga
                            ega bo’ling. Bonuslar kunlik qo’shilib boriladi.</p>
                        <div className="mt-12 flex">
                            <button type="button" className="flex mr-4 items-center rounded-lg bg-gray-900 hover:bg-gray-800 py-3 px-6 text-white">
                                <div className="mr-4">
                                    <span className="icon block icon-app-store"/>
                                </div>
                                <div>
                                    <p className="text-xs leading-3 tracking-wider">Download now</p>
                                    <h1 className="font-bold leading-6 tracking-wider">App Store</h1>
                                </div>

                            </button>
                            <button type="button" className="flex ml-4 items-center rounded-lg bg-gray-900 hover:bg-gray-800 py-3 px-6 text-white">
                                <div className="mr-4">
                                    <span className="icon block icon-play-market"/>
                                </div>
                                <div>
                                    <p className="text-xs leading-3 tracking-wider">Download now</p>
                                    <h1 className="font-bold leading-6 tracking-wider">Google Play</h1>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MobileApps;