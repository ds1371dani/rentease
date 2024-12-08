import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './CalendarView.css';

function CalendarView() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="calendar-view">
            <h2>Availability Calendar</h2>
            <Calendar
                onChange={setDate}
                value={date}
                tileClassName={({ date, view }) => {
                    // Example: Highlight booked and available dates
                    if (date.getDate() === 15) return 'booked';
                    if (date.getDate() === 20) return 'available';
                }}
            />
            <div className="legend">
                <span className="legend-item booked">Booked</span>
                <span className="legend-item available">Available</span>
                <span className="legend-item pending">Pending</span>
            </div>
        </div>
    );
}

export default CalendarView;
