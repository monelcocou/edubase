import React from 'react';
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const StudentPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col xl:flex-row'>
            <div className="w-full xl:w-2/3 flex flex-col gap-8">
                <div className="h-full bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Schedule (A4)</h1>
                    <BigCalendar/>
                </div>
            </div>


            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <EventCalendar/>
                <Announcements/>
            </div>
        </div>
    );
};

export default StudentPage;