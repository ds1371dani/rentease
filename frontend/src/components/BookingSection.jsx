import React, { useState } from 'react';
// import './BookingSection.css';

function BookingSection() {
    const [formData, setFormData] = useState({ item: '', startDate: '', endDate: '' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', formData);
    };

    return (
        <div className="booking-section">
            <h2>Book an Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="item"
                    placeholder="Item Name"
                    value={formData.item}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
}

export default BookingSection;
