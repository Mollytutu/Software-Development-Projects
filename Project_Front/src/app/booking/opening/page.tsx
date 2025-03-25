'use client'

import React, { useState } from 'react';

interface OpeningHours {
  day: string;
  openTime: string;
  closeTime: string;
}

const OpeningHours: React.FC = () => {
  // Initialize the opening hours state
  const [openingHours, setOpeningHours] = useState<OpeningHours[]>([
    { day: 'Monday', openTime: '09:00 AM', closeTime: '06:00 PM' },
    { day: 'Tuesday', openTime: '09:00 AM', closeTime: '06:00 PM' },
    { day: 'Wednesday', openTime: '09:00 AM', closeTime: '06:00 PM' },
    { day: 'Thursday', openTime: '09:00 AM', closeTime: '06:00 PM' },
    { day: 'Friday', openTime: '09:00 AM', closeTime: '06:00 PM' },
    { day: 'Saturday', openTime: '10:00 AM', closeTime: '04:00 PM' },
    { day: 'Sunday', openTime: 'Closed', closeTime: 'Closed' },
  ]);

  // Function to handle changes in opening hours
  const handleChange = (index: number, field: string, value: string) => {
    const updatedOpeningHours = [...openingHours];
    updatedOpeningHours[index][field] = value;
    setOpeningHours(updatedOpeningHours);
  };

  return (
    <div>
      <h2>Opening Hours</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Open Time</th>
            <th>Close Time</th>
          </tr>
        </thead>
        <tbody>
          {openingHours.map((hour, index) => (
            <tr key={index}>
              <td>{hour.day}</td>
              <td>
                <input
                  type="text"
                  value={hour.openTime}
                  onChange={(e) => handleChange(index, 'openTime', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={hour.closeTime}
                  onChange={(e) => handleChange(index, 'closeTime', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpeningHours;
