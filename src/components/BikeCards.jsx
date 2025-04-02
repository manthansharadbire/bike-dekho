import React from 'react';

const BikeCard = ({ thumbnail, modelname, onClick }) => {
    return (
        <div
            className="bg-red-400 w-fit text-center border border-black shadow-lg 
         transform transition duration-500 hover:scale-110"
            onClick={onClick}>
            <img src={thumbnail} alt={modelname} className='h-[140px]' />
            <h1 className='text-xl bg-red-600 text-white p-2'>{modelname}</h1>
        </div>
    )
};

export default BikeCard;
