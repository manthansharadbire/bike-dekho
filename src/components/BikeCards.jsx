import React from 'react';

const BikeCard = ({ thumbnail, modelname, onClick }) => {
    return (
        <div
            className='bg-red-400 w-fit text-center border border-black shadow-lg md:flex-row m-0.5'
            onClick={onClick}>
            <img src={thumbnail} alt={modelname} className='h-[30px] md:h-[140px] w-[70px] md:w-[250px]' />
            <h1 className='text-[5px]  md:text-sm lg:text-xl
             bg-red-600 text-white p-1 md:p-3'>{modelname}</h1>
        </div>
    )
};

export default BikeCard;
