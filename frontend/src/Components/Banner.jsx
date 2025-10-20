import { useEffect, useRef, useState } from 'react';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Marquee from 'react-fast-marquee'

import MarqueeData from '../assets/Data/Data.json'

const createTag = (val) => {
  console.log(val)
}


const SearchBar = () => {
  const inputRef = useRef(null)
  return (
    <>
   <div className="w-full flex align-center justify-center flex-col gap-2">
     <div
      className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 w-full max-w-270 rounded-full grid grid-cols-12 overflow-hidden shadow-2xl shadow-black/20 relative group transition-all duration-300 hover:bg-white/15 hover:border-white/30">

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <input
        ref={inputRef}
        type="text"
        placeholder='Type coin name eg:- bitcoin'
        onKeyDown={(e)=>{if (e.code === "Enter"){createTag(inputRef.current.value)}}}
        className='col-span-10 sm:col-span-11 text-xl sm:text-2xl font-medium font-roboto outline-0 cursor-pointer ps-6 py-3  placeholder:text-black/60 bg-transparent relative z-10'
      />

      <button 
        className="col-span-2 sm:col-span-1 flex items-center justify-center transition-all duration-500 ease-in-out bg-gradient-to-r from-red-500 to-orange-500 rounded-full hover:from-red-600 hover:to-orange-600 hover:shadow-lg hover:shadow-red-500/25 relative z-10">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl text-white' />
      </button>
    </div>
    <div className="">
      waiodw
    </div>
   </div>
  </>
  )
}


const CryptoCoins = ({ data }) => {
  const priceChangeColor = data.priceChange >= 0 ? 'text-green-400' : 'text-red-400'
  const priceChangeSymbol = data.priceChange >= 0 ? '+' : ''

  return (
    <div className="flex items-center justify-center rounded-full w-full px-2 mx-3 group">
      <div className="flex items-center justify-center w-full gap-2 p-3 rounded-full cursor-grab bg-black/10 backdrop-blur-xl border border-black/20 hover:bg-black/15 hover:border-black/30
                   transition-all duration-300 hover:shadow-xl hover:shadow-black/20 relative overflow-hidden">

        {/* Animated shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <img
          src={data.image}
          alt={data.name}
          className='w-10 h-10 rounded-full relative z-10 ring-2 ring-white/20'
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/40x40/374151/ffffff?text=' + data.name.charAt(0).toUpperCase()
          }}
        />
        <div className='w-full flex items-center justify-between relative z-10'>
          <h3 className='text-black font-semibold text-lg capitalize drop-shadow-sm'>{data.name}</h3>
          <div className={`${priceChangeColor} font-medium drop-shadow-sm`}>
            {priceChangeSymbol}{data.priceChange.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  )
}



const Marquees = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/coins");
        const data = await response.json();
        setCoins(data.coinsData);
      } catch (err) {
        console.error("You're viewing old data because I forgot to pay the backend, so he left me 😅");
      }
    };

    fetchData();
  }, []);


  return (
    <div className="relative container mx-auto flex flex-col gap-5 py-10">
      <Marquee
        pauseOnHover
        direction="right"
        loop={0}
        gradient={false}  
        speed={50}        
        delay={0}         
      >

        {(coins && coins.length > 0 ? coins : MarqueeData).map((data) => (
          <div key={data._id} className="mx-4">
            <CryptoCoins data={data} />
          </div>
        ))}
      </Marquee>

    </div>
  );
};


const Banner = () => {
  return (
    <section className=''>
      <div className="absolute hidden md:block top-20 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute hidden ms:block bottom-20 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '-2s' }} />

      <div className='container mx-0 md:mx-auto flex flex-col items-center justify-center px-3 sm:px-10 xl:px-50 py-20 gap-15 sm:gap-30 relative z-20'>

        <div className="flex flex-col gap-7 sm:gap-10">
          <h1 className='text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-roboto font-semibold text-start leading-snug drop-shadow-2xl'>
            Get AI-powered forecast - Just type a <span className='text-gradient bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent'>coin name</span> and unlock insight
          </h1>
          <p className='text-black font-roboto text-lg xl:text-2xl text-start w-full drop-shadow-lg'>
            Search any crypto to see real-time market trend predictions powered by AI.
          </p>
        </div>

        <SearchBar />



      </div>
      <Marquees />



    </section>
  )
}

export default Banner;