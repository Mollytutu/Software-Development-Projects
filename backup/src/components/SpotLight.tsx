'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PrismaClient} from '@prisma/client';
import sportlightData from '../data/Spotlight.json';


const prisma= new PrismaClient();



const SpotLight: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const importPromises = Array.from({ length: 16 }, (_, i) => import(`../assets/images/profile${i + 1}.png`));
      const resolvedImages = await Promise.all(importPromises);
      const imageSrcs = resolvedImages.map(module => module.default.src);
      setImages(imageSrcs);
    };

    fetchImages();
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

    return (
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-violet-300 to-fuchsia-300 px-4 sm:px-8 md:px-12 pb-20 pt-9"> 
          <h2 className="text-md font-semibold mb-4 rounded-3xl bg-gray-400 text-white text-center px-7 py-2 w-auto">Welcome to Open Your Circle</h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            This website provides a platform for professionals to showcase their expertise and availability. Users can browse profiles of local professionals and book paid services such as scheduled quick calls, request quotes, or schedule consulting sessions directly.
          </p>
          <h1 className="text-xl pb-6 font-bold text-purple-600 mt-8">Spot Light</h1>
          <div className="flex flex-wrap justify-around gap-4">
            {sportlightData.slice(0, showMore ? sportlightData.length : 8).map((user, index) => (
              <Link key={index} href={`/user/${user.id}`}>
               
                  <div className="w-32 h-46 border border-gray-300 rounded-lg overflow-hidden mb-6 bg-white">
                    <div className="h-36 overflow-hidden">
                      <img src={images[index]} alt={`profile picture ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <hr className="border-t border-gray-900" />
                    <div className="p-4 bg-gray-100 text-center h-full">
                      <h2 className="font-semibold text-xs">{user.name}</h2>
                      <p className="text-xs font-semibold mb-2">{user.position}</p>
                    </div>
                  </div>
             
              </Link>
            ))}
          </div>
          {!showMore && (
            <div className="flex justify-center mt-8">
              <button className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 rounded-3xl cursor-pointer" onClick={toggleShowMore}>View More</button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default SpotLight;