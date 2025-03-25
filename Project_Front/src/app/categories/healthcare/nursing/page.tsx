"use client"

import Header from "~/components/Header/Header";
import nurseData from "~/data/healthcare/nurse.json"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Footer from "~/components/footer/footer";


const NursingPage: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const importPromises = Array.from({ length: 16 }, (_, i) => import(`~/assets/images/nursing/nurse${i + 1}.png`));
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
    <>
      <Header />
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-violet-300 to-fuchsia-300 px-4 sm:px-8 md:px-12 pb-20 pt-9"> 
          <h2 className="text-md font-semibold mb-8 r mx-auto rounded-3xl bg-gray-400 text-white text-center px-7 py-2 w-28">Nurse</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {nurseData.slice(0, showMore ? nurseData.length : 8).map((user, index) => (
              <Link key={index} href={`/user/${user.id}`}>
                <div className="max-w-[200px] h-[300px] mx-auto border border-gray-300 rounded-lg overflow-hidden mb-6 bg-white">
                  <div className="h-[230px] overflow-hidden">
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
      <Footer />
    </>
  );
  };
  
export default NursingPage;