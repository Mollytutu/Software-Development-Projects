'use client'

import React, { useState } from 'react';
import { Clock, ChevronUp, ChevronDown } from 'react-feather';
import Header from '~/components/Header/Header';
import Footer from '~/components/footer/footer';

interface OpeningHours {
  day: string;
  openTime: string;
  closeTime: string;
}

const OpeningHours: React.FC = () => {
  const [openingHours, setOpeningHours] = useState<OpeningHours[]>([
    { day: 'Monday', openTime: '2:00 PM', closeTime: '8:00 PM' },
    { day: 'Tuesday', openTime: '2:00 PM', closeTime: '8:00 PM' },
    { day: 'Wednesday', openTime: '2:00 PM', closeTime: '8:00 PM' },
    { day: 'Thursday', openTime: '2:00 PM', closeTime: '8:00 PM' },
    { day: 'Friday', openTime: '2:00 PM', closeTime: '8:00 PM' },
    { day: 'Saturday', openTime: '10:00 AM', closeTime: '4:00 PM' },
    { day: 'Sunday', openTime: 'Closed', closeTime: 'Closed' },
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedOpeningHours = [...openingHours];
    updatedOpeningHours[index][field] = value;
    setOpeningHours(updatedOpeningHours);
  };

  const incrementTime = (index: number, field: string) => {
    const timeRegex = /(\d+):(\d+)\s([AP]M)/;
    const hourOffset = field === 'openTime' ? 2 : 8;
    const updatedOpeningHours = [...openingHours];
    const currentTime = updatedOpeningHours[index][field];

    const match = timeRegex.exec(currentTime);
    if (match) {
      let hour = parseInt(match[1]);
      let minute = parseInt(match[2]);
      let period = match[3];

      minute += 15;
      if (minute >= 60) {
        minute -= 60;
        hour = (hour + 1) % 12;
        if (hour === 0) {
          hour = 12;
        }
      }

      updatedOpeningHours[index][field] = `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
      setOpeningHours(updatedOpeningHours);
    }
  };

  const handleConfirm = () => {
    alert('Opening hours confirmed!');
    // Redirect to the user page
    window.location.href = '/user/99990001'; // Replace '/user-page' with the actual URL of your user page
  };

  return (
    <>
    <Header />
    <div className='bg-blue-200 py-8'>
    <h2 className="text-md mb-8 w-80 my-8 font-semibold mb-12 rounded-3xl bg-gray-400 text-white text-center px-7 py-2 max-w-screen-lg mx-auto">
        Opening Hours</h2>
      <table className='mx-auto'>
        <thead>
          <tr>
            <th>Day</th>
            <th>Open Time</th>
            <th>Close Time</th>
          </tr>
        </thead>
        <tbody >
          {openingHours.map((hour, index) => (
            <tr key={index}>
              <td>{hour.day}</td>
              <td>
                <div className="time-input pl-14">
                  <input type="text" value={hour.openTime} readOnly />
                  <button onClick={() => incrementTime(index, 'openTime')}>
                    <Clock  className="ml-[-70px] pt-2"/>
                  </button>
                </div>
              </td>
              <td>
                <div className="time-input pl-12">
                  <input type="text" value={hour.closeTime} readOnly />
                  <button onClick={() => incrementTime(index, 'closeTime')}>
                    <Clock className="ml-[-70px] pt-2 "/>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-8">
    <div className="confirm-button border rounded-3xl bg-blue-600 text-white p-2 w-40  ">
        <button className="confirm flex items-center justify-center pl-10" onClick={handleConfirm}>
        Confirm
        </button>
    </div>
  </div>
    </div>
    <Footer />
    </>
  );
};

export default OpeningHours;
