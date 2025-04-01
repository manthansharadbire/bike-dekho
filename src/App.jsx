import React, { useState } from 'react';
import continentalgt650 from './assets/continentalgt650.webp';
import interceptor650 from './assets/interceptor650.webp';
import supermeteor650 from './assets/supermeteor650.webp';
import shotgun650 from './assets/shotgun650.webp';
import classic650 from './assets/classic650.webp';
import BikeCard from './components/BikeCards';

function App() {

  const [bikeDetails, setBikeDetails] = useState([])

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
        <BikeCard
          thumbnail={continentalgt650}
          modelname="Continental GT"
          onClick={() => handleBikeDetails({
            modelname: "Continental GT",
            year: "2022",
            engine: "650cc",
            mileage: "17kmpl"

          })}
        />
        <BikeCard
          thumbnail={supermeteor650}
          modelname="Super Meteor"
          onClick={() => handleBikeDetails({
            modelname: "Super Meteor",
            year: "2022",
            engine: "650cc",
            mileage: "17kmpl"
          })}
        />
        <BikeCard
          thumbnail={interceptor650}
          modelname="Interceptor 650"
          onClick={() => handleBikeDetails({
            modelname: "Interceptor 650",
            year: "2022",
            engine: "650cc",
            mileage: "17kmpl"
          })}
        />
        <BikeCard
          thumbnail={shotgun650}
          modelname="Shotgun 650"
          onClick={() => handleBikeDetails({
            modelname: "Shotgun 650",
            year: "2022",
            engine: "650cc",
            mileage: "17kmpl"
          })}
        />
        <BikeCard
          thumbnail={classic650}
          modelname="Classic 650"
          onClick={() => handleBikeDetails({
            modelname: "Classic 650",
            year: "2022",
            engine: "650cc",
            mileage: "24kmpl"
          })}
        />
      </div>
      <div>
        <div>
          {bikeDetails.map((object, i) => (
            <div key={i} className='bg-blue-500'>
              <h1>{object.modelname}</h1>
              <p>{object.year}</p>
              <p>{object.engine}</p>
              <p>{object.mileage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
