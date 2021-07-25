import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className="bg-gray-800 relative z-50 footer">
            <div className="w-10/12 mx-auto text-white">
                <div className="flex pt-12 pb-8 border-b-2 border-gray-700">
                    <div className="w-1/4 tracking-wider">
                        <h3 className="font-semibold text-lg mb-4">Platforma</h3>
                        <a href="#" className="block text-sm mb-2">Biz haqimizda</a>
                        <a href="#" className="block text-sm mb-2">Tariflar</a>
                        <a href="#" className="block text-sm mb-2">Kurslar haqida</a>
                        <a href="#" className="block text-sm mb-2">Blog</a>
                    </div>
                    <div className="w-1/4 tracking-wider">
                        <h3 className="font-semibold text-lg mb-4">Ma'lumotlar</h3>
                        <a href="#" className="block text-sm mb-2">Fikrlar</a>
                        <a href="#" className="block text-sm mb-2">FAQ</a>
                        <a href="#" className="block text-sm mb-2">Конфиденциальность</a>
                    </div>
                    <div className="w-1/4 tracking-wider">
                        <h3 className="font-semibold text-lg mb-4">Ijtimoiy sahifamiz</h3>
                        <a href="#" className="flex items-center text-sm mb-3">
                            <span className="icon icon-instagram mr-2 block"/>
                            <span className="block">Instagram</span>
                        </a>
                        <a href="#" className="flex items-center text-sm mb-3">
                            <span className="icon icon-telegram mr-2 block"/>
                            <span className="block">Telegram</span>
                        </a>
                        <a href="#" className="flex items-center text-sm mb-3">
                            <span className="icon icon-facebook mr-2 block"/>
                            <span className="block">Facebook</span>
                        </a>
                        <a href="#" className="flex items-center text-sm mb-3">
                            <span className="icon icon-twitter mr-2 block"/>
                            <span className="block">Twitter</span>
                        </a>

                    </div>
                    <div className="w-1/4 tracking-wider">
                        <h3 className="font-semibold text-lg mb-4">Dasturni yuklab olish</h3>
                        <a href="#" className="flex w-3/5 items-center rounded-lg bg-white py-3 pl-6 pr-2 text-gray-800">
                            <div className="mr-4">
                                <span className="icon block icon-app-store"/>
                            </div>
                            <div>
                                <p className="text-xs leading-3 tracking-wider">Download now</p>
                                <h1 className="font-bold leading-6 tracking-wider">App Store</h1>
                            </div>

                        </a>
                        <a href="#" className="flex w-3/5 mt-4 items-center rounded-lg bg-white py-3 pl-6 pr-2 text-gray-800">
                            <div className="mr-4">
                                <span className="icon block icon-play-market"/>
                            </div>
                            <div>
                                <p className="text-xs leading-3 tracking-wider">Download now</p>
                                <h1 className="font-bold leading-6 tracking-wider">Google Play</h1>
                            </div>

                        </a>
                    </div>
                </div>
                <div className="py-6">
                    <p className="text-xs">© 2021 Birzoom – Endi ta’lim birzumda!</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;