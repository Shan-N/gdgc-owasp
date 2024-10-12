import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import vid from '../../public/hack.mp4'
export default function PageThree() {
  const [isAlert,setAlert] = useState('true');
  const location = useLocation();
  

  const query = new URLSearchParams(location.search);
  const name = query.get('name');
  const mobile = query.get('phone');
  const email = query.get('email');

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isAlert ? <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <video src={vid} className='w-screen h-screen object-cover' alt='hack' autoPlay muted/>
    </div> : 
      <div className="h-screen flex justify-center items-center flex-col bg-[#161313]">
         <div className="absolute top-0 right-0 h-24 rounded-full aspect-square green-500 sm:bg-green-500 blur-[110px] sm:blur-[250px]"  style={{height: "100px"}}/>
            <div className="absolute top-0 left-0 h-24 rounded-full aspect-square bg-pink-500 sm:bg-pink-500 blur-[110px] sm:blur-[250px]"  style={{height: "100px"}}/>
            <div className="absolute bottom-0 left-0 h-24 rounded-full aspect-square bg-blue-500 sm:bg-blue-600 blur-[110px] sm:blur-[280px]"  style={{height: "100px"}}/>
            <div className="absolute bottom-0 right-0 h-24 rounded-full aspect-square bg-yellow-500 sm:bg-yellow-600 blur-[110px] sm:blur-[280px]"  style={{height: "100px"}}/>
        {/* Logo Section */}
        <main className="flex flex-col items-center">
          <div className="my-7 md:my-5">
            <img
              aria-hidden="true"
              src="https://www.dscvit.com/newlogo.svg"
              width={150}
              height={150}
              alt="logo-gdgc"
            />
          </div>
          
          {/* Header */}
          <h1 className="text-white text-4xl md: md:my-8 font-extrabold font-silkscreen my-8 text-center w-[90%]">
            YOU'VE BEEN <span className="text-[#838de9]">PAWNED!</span>
          </h1>
        </main>

        {/* Subheading */}
        <h2 className="font-chakra font-semibold text-lg lg:text-2xl text-blue-100 mt-6 mx-6 text-center">
          Oops, looks like you fell for it. <span className="text-red-500">REMEMBER</span>, not everything online is what it seems.
        </h2>

        <section className={`transform transition-all duration-500 ease-in-out ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} bg-[#161313] flex flex-col justify-start items-center mt-8 md: w-full px-4 `}>
          <div className="border-[#6e6e6e] border shadow-custom rounded-xl text-left px-6 py-4 text-blue-100 w-full max-w-lg sm:max-w-sm lg:max-w-lg">
            <p className="text-lg sm:text-base lg:text-lg font-chakra"><strong>Name:</strong> {name}</p>
            <p className="text-lg sm:text-base lg:text-lg font-chakra"><strong>Mobile Number:</strong> {mobile}</p>
            <p className="text-lg sm:text-base lg:text-lg font-chakra"><strong>Email ID:</strong> {email}</p>
          </div>
        </section>

        {/* Warning Message */}
        <h1 className="font-silkscreen text-xl lg:text-3xl text-blue-100 mt-8 text-center">
          <span className="text-red-500">BEWARE:</span> YOUR INFO IS A <span className="text-blue-500">TREASURE</span>, PROTECT IT
        </h1>
      </div>
}
    </>

  );
}
