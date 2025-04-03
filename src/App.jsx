import React, { useState } from 'react';
import continentalgt650 from './assets/continentalgt650.webp';
import interceptor650 from './assets/interceptor650.webp';
import supermeteor650 from './assets/supermeteor650.webp';
import shotgun650 from './assets/shotgun650.webp';
import classic650 from './assets/classic650.webp';
import BikeCard from './components/BikeCards';
import { Info } from 'lucide-react';

const BIKES = [
  {
    thumbnail: continentalgt650,
    modelname: "Continental GT",
    year: "2022",
    engine: "650cc",
    mileage: "17kmpl",
    weight: "220kg",
    price: "4,50,000/-",
    shortInfo: "Classic cafe racer with premium styling."
  },
  {
    thumbnail: supermeteor650,
    modelname: "Super Meteor ",
    year: "2023",
    engine: "650cc",
    mileage: "21kmpl",
    weight: "239kg",
    price: "3,80,000/-",
    shortInfo: "Cruiser designed for long-distance touring."
  },
  {
    thumbnail: interceptor650,
    modelname: "Interceptor 650",
    year: "2022",
    engine: "650cc",
    mileage: "19kmpl",
    weight: "210kg",
    price: "4,00,000/-",
    shortInfo: "A versatile retro bike with modern performance."
  },
  {
    thumbnail: shotgun650,
    modelname: "Shotgun 650",
    year: "2022",
    engine: "650cc",
    mileage: "22kmpl",
    weight: "240kg",
    price: "4,61,000/-",
    shortInfo: "Aggressive design with high performance."
  },
  {
    thumbnail: classic650,
    modelname: "Classic 650",
    year: "2022",
    engine: "650cc",
    mileage: "24kmpl",
    weight: "230kg",
    price: "4,00,000/-",
    shortInfo: "Timeless design with vintage appeal."
  }
]

function App() {

  const [bikeDetails1, setBikeDetails1] = useState(null)
  const [bikeDetails2, setBikeDetails2] = useState(null)
  const [previewState, setPreviewState] = useState(1)

  const resetBikes = () => {
    setBikeDetails1(null);
    setBikeDetails2(null);
  };

  const setSelectedBike = (index) => {
    if (previewState == 1) {
      setBikeDetails1(BIKES[index])
      setPreviewState(2);
    }
    else {
      setBikeDetails2(BIKES[index])
      setPreviewState(1);
    }
  }


  return (
    <div>
      <div className='text-center bg-black'>
        <h1 className='text-xl md:text-2xl pt-1 md:pt-3 pb-1 md:pb-3 border-b shadow-md text-white'>BIKE DEKHO 650</h1>
      </div>
      <div className='flex justify-evenly m-5 cursor-pointer'>
        {BIKES.map((obj, index) => {
          return (
            <BikeCard
              key={index}
              thumbnail={obj.thumbnail}
              modelname={obj.modelname}
              onClick={() => {
                setSelectedBike(index)
              }}/>
          )
        })}


      </div>

      <div className='md:flex md:justify-center'>
        {bikeDetails1 && (
          <div className='bg-blue-300 text-center md:mr-5 md:mb-3 w-full'>
            <img src={bikeDetails1.thumbnail} alt={bikeDetails1.modelname} className='h-[300px]  w-full' />
            <h1 className='bg-red-600 text-white text-2xl p-2 '>{bikeDetails1.modelname} </h1>
            <h2 className='bg-black text-white  pt-1'>Engine : {bikeDetails1.engine}</h2>
            <p className='bg-black text-white'>Mileage : {bikeDetails1.mileage}</p>
            <p className='bg-black text-white'>Weight : {bikeDetails1.weight}</p>
            <p className='bg-black text-white'>On-Road price : {bikeDetails1.price}</p>
           <p className='bg-black text-white pb-3'>{bikeDetails1.shortInfo}</p>
          </div>
        )}

        {bikeDetails2 && (
          <div  className='bg-blue-300 text-center mr-5 mb-3 w-full'>
            <img src={bikeDetails2.thumbnail} alt={bikeDetails2.modelname} className='h-[300px] w-full'/>
            <h1 className='bg-red-600 text-white text-2xl p-2'>{bikeDetails2.modelname}</h1>
            <h2 className='bg-black text-white pt-1'>Engine : {bikeDetails2.engine}</h2>
            <p className='bg-black text-white'>Mileage : {bikeDetails2.mileage}</p>
            <p className='bg-black text-white'>Weight : {bikeDetails2.weight}</p>
            <p className='bg-black text-white'>On-Road price : {bikeDetails2.price}</p>
            <p className='bg-black text-white pb-3'>{bikeDetails2.shortInfo}</p>
          </div>
        )}
      </div>

      <div className='justify-center flex'>
        {(bikeDetails1 && bikeDetails2) && (
          <button
            onClick={resetBikes}
            className=" px-3 md:px-4 py-1 md:py-2 bg-red-500 text-white hover:bg-red-600 text-xs md:text-xl"
          >
            Reset Comparison
          </button>
        )}
      </div>
    </div>
  )
}

export default App;






