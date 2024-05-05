"use client"

import { Dispatch, FC, SetStateAction, useState } from 'react';
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';
import { AVAILIABLE_OPENING_TIME, AVAILIABLE_CLOSING_TIME, OPENING_HOURS_INTERVAL} from '../../constants/config';
import { DateTime } from '~/utils/types';
import { useRouter } from 'next/router';

interface indexProps {
    setDate: Dispatch<SetStateAction<DateTime>>;
    date: DateTime;
}

const Calendar: FC<indexProps> = ({ setDate, date }) => {
    // const router= useRouter()

    // const today=days.fing((d) => d.dayOfWeek===now.getDay())
    // const rounded=roundToNearestMinutes(now, OPENING_HOURS_INTERVAL)
    // const closing=parse(today! closeTime,'kk.mm',now)
    // const tooLate =!isBefore(rounded,closing)
    // if (tooLate)closedDays.push(formatISO(new Date().setHourse(0,0,0,0)))



    const getTimes = () => {
        if (!date.justDate) return [];

        const { justDate } = date;

        const beginning = add(justDate, { hours: AVAILIABLE_OPENING_TIME });
        const end = add(justDate, { hours: AVAILIABLE_CLOSING_TIME });
        const interval = OPENING_HOURS_INTERVAL;

        const time = [];
        for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
            time.push(i);
        }

        return time;
    };

    const times = getTimes();

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            {date.justDate ? (
                <div className="flex gap-4">
                    {times.map((time, i) => (
                        <div key={`time-${i}`} className="rounded-sm bg-gray-200 p-2">
                            <button type="button" onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}>
                                {format(time, 'kk:mm')}
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <ReactCalendar
                    minDate={new Date()}
                    className="REACT-CALENDAR p-2"
                    view="month"
                    onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
                />
            )}
        </div>
    );
};

export default Calendar;