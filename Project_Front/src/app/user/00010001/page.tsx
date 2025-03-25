'use client'
import React from 'react';
import Header from '~/components/Header/Header'; // Import the Header component
import Calendar from '~/components/Calendar/page';
import {useState} from 'react'
import { DateTime} from '~/utils/types';
import pic from '../../../assets/images/it/software-developer/sd1.png'
import servicePic3 from '~/assets/images/service1.jpeg'
import servicePic2 from '~/assets/images/service2.jpeg'
import servicePic1 from '~/assets/images/service3.png'
import Footer from '~/components/footer/footer';



const Personal: React.FC = () => {
const[date, setDate] = useState<DateTime>({
    justDate:null,
    dateTime:null,
})

  return (
    <>
      <Header /> 
      <div className=" text-gray-600 px-4 font-sans bg-blue-300 w-full">
        <h1 className="py-8 text-3xl font-bold mt-8 text-center text-gray-600">Hi, I'm John Smith</h1>
        
        <img src={pic.src} className="mb-8 w-80 m-auto rounded-2xl"/>

        <p className='text-pretty mx-12'>Hey there, future space explorers! I'm Tony, and I get to work at NASA, where we make rockets and 
          spaceships! 🚀 My job is like being a super-cool inventor, but for space stuff. I help build things that fly
           really, really high and explore planets far, far away. It's like being in a space adventure every day! I
            love sharing my love for space with kids like you because who knows, maybe one day you'll be exploring the
             stars too! Keep dreaming big and reach for the stars! 🌟</p>

        <h2 className='font-bold text-gray-600 my-6 ml-4'>What John Offers</h2>
       
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto">
            {/* Card 1 */}
            <div className="mx-auto max-w-[300px] text-center border border-gray-300 rounded-lg overflow-hidden mb-6 bg-white w-full sm:w-98 mx-4">
              <img src={servicePic1.src} alt="Offer 1" className="w-full" />
              <div className="p-4">
                <p>Amazing bedtime story</p>
                <p className='text-xs'>15 minutes zoom call</p>
                <p className='font-bold'>$25</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border mx-auto max-w-[300px] border-gray-300 text-center rounded-lg overflow-hidden mb-6 bg-white w-full sm:w-98 mx-4">
              <img src={servicePic2.src} alt="Offer 2" className="w-full" />
              <div className="p-4">
                <p>Consultant section for any space engineering related question</p>
                <p className='text-xs'>15 minutes zoom call</p>
                <p className='font-bold'> $45</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border mx-auto max-w-[300px] border-gray-300 text-center rounded-lg overflow-hidden mb-6 bg-white w-full sm:w-98 mx-4">
              <img src={servicePic3.src} alt="Offer 3" className="w-full" />
              <div className="p-4">
                <p>Consultant section for any space engineering related question</p>
                <p className='text-xs'>30 minutes zoom call</p>
                <p className='font-bold'>$60</p>
              </div>
            </div>
          </div>
        {!date.dateTime && <Calendar setDate={setDate} date={date}/>}
        {date.dateTime && true ? (
        <menu />
        ):(
          <div role="status">
          
          </div>)}
      </div>
      <Footer />
    </>
  );
};

export default Personal;
