import React, {useState} from 'react';
import './navbar.scss';
import LessonInfo from "../lessonInfo/LessonInfo";

const Navbar = () => {
    const [language, setLanguage] = useState('UZ');
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (a) => {
        setLanguage(a);
    };

    return (
        <div className="bg-yellow-50 pt-8 navbar">
            <ul className="flex items-center z-50 relative mb-16 w-10/12 mx-auto">
                <li className="block mr-16">
                    <a href="#">
                        <img src="./images/logo.png" alt=""/>
                    </a>
                </li>
                <li className="block ml-20 mr-12">
                    <a className="leading-loose" href="#">Tariflar</a>
                </li>
                <li className="block mx-12">
                    <a className="leading-loose" href="#">Kurs haqida</a>
                </li>
                <li className="block mx-12">
                    <a className="leading-loose" href="#">Blog</a>
                </li>
                <li className="block mx-12">
                    <a className="leading-loose" href="#">Blim ulashish</a>
                </li>
                <li className="ml-auto relative flex items-center mx-12">
                    <a className="leading-loose mr-3" href="#">{language}</a>
                    <span onClick={()=>setIsOpen(!isOpen)} className={`icon ${isOpen?'icon-arrow-up':'icon-arrow-down'} cursor-pointer`}/>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'} absolute dropdown-menu bottom-0 right-0 bg-white h-auto w-16 p-1 border rounded-md`}>
                        <div onClick={() => {
                            changeLanguage('UZ');
                            setIsOpen(false)
                        }} className="cursor-pointer text-xs text-center hover:bg-yellow-100 py-1 rounded-md w-full">
                            <a href="#">UZ</a></div>
                        <div onClick={() => {
                            changeLanguage('RU');
                            setIsOpen(false)
                        }} className="cursor-pointer text-xs text-center hover:bg-yellow-100 py-1 rounded-md w-full">
                            <a href="#">RU</a></div>
                        <div onClick={() => {
                            changeLanguage('EN');
                            setIsOpen(false)
                        }} className="cursor-pointer text-xs text-center hover:bg-yellow-100 py-1 rounded-md w-full">
                            <a href="#">EN</a></div>
                    </div>
                </li>
                <li className="block">
                    <a href="#" className="rounded-md transition-all duration-200 leading-loose px-4 py-2 bg-yellow-300 hover:bg-yellow-400 hover:text-white">Ro'yxatdan o'tish</a>
                </li>
            </ul>

            <LessonInfo/>

        </div>
    );
};

export default Navbar;