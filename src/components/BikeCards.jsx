import React from 'react';

const BikeCard = ({ thumbnail, modelname, year, engine, mileage, onClick }) => {
  return (
    <div
      className="bg-red-400 w-fit text-center border border-black shadow-md rounded-b-md
         transform transition duration-500 hover:scale-110"
      onClick={() => onClick({ thumbnail, modelname, year, engine, mileage })}
    >
      <img src={thumbnail} alt={modelname} className="h-[140px]" />
      <h1 className="text-xl bg-black text-white p-2">{modelname}</h1>
    </div>
  );
};

export default BikeCard;
