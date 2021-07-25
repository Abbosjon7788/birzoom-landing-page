import React from 'react';

const LessonOrder = () => {
    return (
        <div className="w-10/12 mx-auto z-50 relative mb-24">
            <h1 className="font-bold text-3xl text-center pb-12">Darslar o’tish tartibi</h1>
            <div className="flex">
                <div className="w-2/5">
                    <img src="./images/landingpage-girl.png" className="w-full" alt=""/>
                </div>
                <div className="flex items-center pl-16 w-3/5">
                    <div>
                        <h1 className="font-bold text-xl mb-4">Lorem ipsum</h1>
                        <p className="leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, mus ut curabitur vel. Ac mauris
                            vel ultrices facilisi iaculis. Lobortis quis odio vulputate hac id eu purus. Netus non quam
                            scelerisque at ut tristique purus et tincidunt. Morbi molestie justo, facilisis libero
                            elementum, risus. Maecenas aliquam bibendum enim pulvinar turpis cursus ac feugiat. Nisi,
                            pharetra mauris est leo eget sit tellus</p>
                        <button type="button" className="rounded-md py-2 mt-8 px-8 bg-yellow-300 transition-all duration-200 hover:bg-yellow-400 hover:text-white">Darsga yozilish</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonOrder;