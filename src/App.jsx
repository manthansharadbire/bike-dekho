import React, { useState } from 'react';
import continentalgt650 from './assets/continentalgt650.webp';
import interceptor650 from './assets/interceptor650.webp';
import supermeteor650 from './assets/supermeteor650.webp';
import shotgun650 from './assets/shotgun650.webp';
import classic650 from './assets/classic650.webp';
import BikeCard from './components/BikeCards';

const BIKES = [
  {
    thumbnail: continentalgt650,
    modelname: "Continental GT",
    year: "2022",
    engine: "650cc",
    mileage: "17kmpl",
  },
  {
    thumbnail: supermeteor650,
    modelname: "Super Meteor",
    year: "2023",
    engine: "650cc",
    mileage: "21kmpl"
  },
  {
    thumbnail: interceptor650,
    modelname: "Interceptor 650",
    year: "2022",
    engine: "650cc",
    mileage: "19kmpl"
  },
  {
    thumbnail: shotgun650,
    modelname: "Shotgun 650",
    year: "2022",
    engine: "650cc",
    mileage: "22kmpl"
  },
  {
    thumbnail: classic650,
    modelname: "Classic 650",
    year: "2022",
    engine: "650cc",
    mileage: "24kmpl"
  }
];

function App() {

  const [bikeDetails, setBikeDetails] = useState([]);

  const handleBikeDetails = (bike) => {
    if (bikeDetails.length >= 2) return;
    setBikeDetails([...bikeDetails, bike])
  };


  return (
    <div>
      <div className='text-center bg-black'>
        <h1 className='text-2xl pt-3 pb-3 border-b shadow-md text-white'>Bike Dekho</h1>
      </div>
      <div className='flex justify-evenly m-5 cursor-pointer'>
        {BIKES.map((obj, index) => {
          return (
            <BikeCard
              key={index}
              thumbnail={obj.thumbnail}
              modelname={obj.modelname}
              year= {obj.year}
              engine={obj.engine}
              mileage={obj.mileage}
        onClick={handleBikeDetails}
          />
        );
        })};


      </div>
      <div>
        <div className='flex justify-between'>
          {bikeDetails.map((object, i) => (
            <div key={i} className='bg-blue-500 text-center m-5 p-4'>
              <img src={object.thumbnail} alt={"Royal Enfield"} className='h-[350px]' />
              <h1 className='text-2xl font-extrabold pt-3'>{object.modelname}</h1>
              <p className='text-2xl'>{object.year}</p>
              <p className='text-2xl'>{object.engine}</p>
              <p className='text-2xl'>{object.mileage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
