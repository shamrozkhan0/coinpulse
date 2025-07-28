import { useRef } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from 'react-fast-marquee'
import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Thumbs,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Your component
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
  {
    "_id": "6863aeba880e10760331a63f",
    "symbol": "bitcoin",
    "name": "btc",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
    "priceChange": 2.5,
    "__v": 0
  },
  {
    "_id": "6863aeba880e10760331a63f",
    "symbol": "bitcoin",
    "name": "btc",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
    "priceChange": 0.00,
    "__v": 0
  },
  {
    "_id": "6863aeba880e10760331a640",
    "symbol": "ethereum",
    "name": "eth",
    "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
    "priceChange": 1.8,
    "__v": 0
  },
  {
    "_id": "6863aeba880e10760331a640",
    "symbol": "ethereum",
    "name": "eth",
    "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
    "priceChange": 1.8,
    "__v": 0
  }
]


const SearchBar = () => {
  const inputRef = useRef(null)
  return (
    <div
      className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 w-full max-w-270 rounded-full grid grid-cols-12 overflow-hidden shadow-2xl shadow-black/20 relative group transition-all duration-300 hover:bg-white/15 hover:border-white/30">

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <input
        ref={inputRef}
        type="text"
        placeholder='Type coin name eg:- bitcoin'
        className='col-span-10 sm:col-span-11 text-xl sm:text-2xl font-medium font-roboto outline-0 cursor-pointer ps-6 py-3 text-white placeholder:text-white/60 bg-transparent relative z-10'
      />

      <div className="col-span-2 sm:col-span-1 flex items-center justify-center transition-all duration-500 ease-in-out bg-gradient-to-r from-red-500 to-orange-500 rounded-full hover:from-red-600 hover:to-orange-600 hover:shadow-lg hover:shadow-red-500/25 relative z-10">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl text-white' />
      </div>
    </div>
  )
}


const CryptoCoins = ({ data }) => {
  const priceChangeColor = data.priceChange >= 0 ? 'text-green-400' : 'text-red-400'
  const priceChangeSymbol = data.priceChange >= 0 ? '+' : ''

  return (
    <div className="flex items-center justify-center rounded-full w-full px-2 mx-3 group">
      <div className="flex items-center justify-center w-full gap-2 p-3 rounded-full cursor-grab bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 relative overflow-hidden">

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
          <h3 className='text-white font-semibold text-lg capitalize drop-shadow-sm'>{data.name}</h3>
          <div className={`${priceChangeColor} font-medium drop-shadow-sm`}>
            {priceChangeSymbol}{data.priceChange.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  )
}

const Marquees = ()=>{
  return(
        <div className="relative w-full flex flex-col gap-5 py-10">
          {/* Enhanced left blur effect */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 z-30 bg-gradient-to-r from-black/30 via-black/15 to-transparent backdrop-blur-md rounded-r-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-r-3xl" />
          </div>

          {/* Enhanced right blur effect */}
          {/* <div className="pointer-events-none absolute top-0 right-0 h-full w-24 z-30 bg-gradient-to-l from-black/30 via-black/15 to-transparent backdrop-blur-md rounded-l-3xl">
            <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent rounded-l-3xl" />
          </div> */}

          {/* Marquees with enhanced styling */}
          <Marquee pauseOnHover={true} direction="right" loop={false} className="py-2">
            {coinsData.map((data) => (
              <div key={data._id} className="mx-4">
                <CryptoCoins data={data} />
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover={true} direction="left" loop={false} className="py-2">
            {coinsData.map((data) => (
              <div key={data._id} className="mx-4">
                <CryptoCoins data={data} />
              </div>
            ))}
          </Marquee>
        </div>

  )
}


const Banner = () => {
  return (
    <section className=''>

      {/* Floating background blobs */}
      {/* <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" /> */}
      {/* <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-2s' }} /> */}

      <div className='container mx-auto flex flex-col items-center justify-center px-3 sm:px-10 xl:px-50 py-20 gap-15 sm:gap-30 relative z-20'>

        <div className="flex flex-col gap-7 sm:gap-10">
          <h1 className='text-white text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-roboto font-semibold text-start leading-snug drop-shadow-2xl'>
            Get AI-powered forecast - Just type a <span className='text-gradient bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent'>coin name</span> and unlock insight
          </h1>
          <p className='text-gray-300/80 font-roboto text-lg xl:text-2xl text-start w-full drop-shadow-lg'>
            Search any crypto to see real-time market trend predictions powered by AI.
          </p>
        </div>

        <SearchBar />

    


      </div>



    </section>
  )
}

export default Banner;