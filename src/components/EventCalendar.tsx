"use client"
import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div>
            <Calendar onChange={onChange} value={value}/>
        </div>
    );
};

export default EventCalendar;