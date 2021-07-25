import React from 'react';
import './lesson-info.scss';

const LessonInfo = () => {

    const data = [
        {icon: 'icon-teacher', number: '500', lastDigit: '', profession: 'spikerlar'},
        {icon: 'icon-student', number: '10', lastDigit: '000', profession: 'oquvchilar'},
        {icon: 'icon-lesson', number: '23', lastDigit: '000', profession: 'darsliklar'},
        {icon: 'icon-exit', number: '134', lastDigit: '000', profession: 'tashriflar'}
    ];

    return (
        <div className="w-10/12 mx-auto relative pb-28 pt-6 lesson-info">
            <div className="flex">
                <div className="flex items-center w-3/5">
                    <div className="z-50 relative">
                        <h1 className="font-bold leading-tight tracking-wider text-5xl">Endi til <span className="text-red-600">o‘rganish</span> <br/> biz bilan yanada <span className="text-red-600">oson!</span></h1>
                        <p className="font-semibold text-lg mt-4 tracking-tight">Til o'rganishning tezkor, qiziqarli va samarali usuli</p>
                        <button type="button" className="rounded-md py-2 mt-8 px-8 bg-yellow-300 transition-all duration-200 hover:bg-yellow-400 hover:text-white">Darsga yozilish</button>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src="./images/landingpage-girl.png" className="w-full z-50 relative" alt=""/>
                </div>
            </div>
            <div className="flex absolute w-full -bottom-16">
                {
                    data.map((element)=>(
                        <div className="w-1/4 z-50 relative p-4">
                            <div className="flex shadow-xl p-6 items-center bg-white rounded-lg">
                                <div className="flex items-center justify-center h-16 w-16 bg-yellow-300 rounded-full mr-5">
                                    <span className={`icon ${element.icon}`}/>
                                </div>
                                <div>
                                    <h1 className="font-bold text-3xl"><span className="mr-2">{element.number}</span>{element.lastDigit}</h1>
                                    <p className="font-semibold text-lg">{element.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default LessonInfo;