import React, { useRef } from 'react'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Swiper, SwiperSlide } from 'swiper/react';

    const coinsData = [
        {
            "_id": "6863aeba880e10760331a63d",
            "symbol": "bybit-staked-sol",
            "name": "bbsol",
            "image": "https://coin-images.coingecko.com/coins/images/40095/large/400x400.png?1725628094",
            "priceChange": -1.1561,
            "__v": 0
        },
        {
            "_id": "6863aeba880e10760331a63e",
            "symbol": "zksync",
            "name": "zk",
            "image": "https://coin-images.coingecko.com/coins/images/38043/large/ZKTokenBlack.png?1718614502",
            "priceChange": -4.59816,
            "__v": 0
        },      
]

function test(data){
  let num = 0
  for (const coin of data) {
    // console.log(coin)
    console.log(num += 1 , coin.image)
  }

}

test(coinsData)

// console.log(coinsData[0].name)

const SearchBar = () => {
  const inputRef = useRef(null)
  return (
    <div
      // onClick={() => inputRef.current.focus()}
      className="cursor-pointer border-2 border-gray-500 w-full max-w-270  rounded-full grid grid-cols-12 overflow-hidden">
      <input ref={inputRef} type="text" placeholder='Type coin name eg:- bitcoin' className='col-span-10 sm:col-span-11 text-xl sm:text-2xl font-medium font-roboto outline-0 cursor-pointer ps-6 py-3 text-white placeholder:text-[#9c9c9c]' />
      <div className="col-span-2 sm:col-span-1 flex items-center justify-center transition-all duration-500 ease-in-out bg-gradient-to-r from-red-500 to-orange-500 rounded-full  hover:from-red-600 hover:to-orange-600">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl text-white ' />
      </div>
    </div>
  )
}

// const CryptoCoins = (data) => {
//   // console.log(props.name)
//   console.log(data.map((coin)=> console.log(coin)))
//   return (
//     // <div className="">
//     //   {
        
//     //   }
//     // </div>
//   )
// }


const Banner = () => {
  return (
    <section className=''>
      <div className='container mx-auto flex flex-col items-center justify-center px-3 sm:px-10 xl:px-50 py-20  gap-15 sm:gap-20 '>
        <div className="flex flex-col gap-7 sm:gap-10">
          <h1 className='text-white text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-roboto font-semibold text-start leading-snug '>Get AI-powered forecast - Just type a <span className='text-gradient'>coin name</span> and unlock insight</h1>
          <p className='text-gray-500 font-roboto text-lg xl:text-2xl text-start w-full'>Search any crypto to see real-time market trend predictions powered by AI.</p>
        </div>

        <SearchBar />

        <Swiper>
          {/* <SwiperSlide><CryptoCoins props={coinsData} /></SwiperSlide> */}
        </Swiper>


      </div>
    </section>
  )
}

export default Banner;