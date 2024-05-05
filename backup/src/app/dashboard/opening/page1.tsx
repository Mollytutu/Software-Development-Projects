'use client'

import { FC, useState } from 'react';
import openTime from "../../../assets/images/open hours.png"
import Header from '~/components/Header/Header';


interface OpeningProps {
  days: Date[];
}

const Opening: FC<OpeningProps> = ({ days }) => {
  const [enabled, setEnabled] = useState<boolean>(false);


  return (
    <div className='mx-auto max-w-xl'>
        <Header />
      <div className='mt-6 flex justify-center gap-6'>
        <p className={`${!enabled ? 'font-medium' : ''}`}>Opening times</p>
        <p className={`${enabled ? 'font-medium' : ''}`}>Opening days</p>
      </div>
      <img src={openTime.src}/>

    </div>
  )

     
};

export default Opening;
