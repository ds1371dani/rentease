import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import CalendarView from './components/CalendarView';
import BookingSection from './components/BookingSection';
import SubscriptionPanel from './components/SubscriptionPanel';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <header className="top-bar">
                    <input type="text" placeholder="Search rentals..." className="search-bar" />
                    <div className="user-profile">
                        <img src="/user-icon.png" alt="User Profile" />
                    </div>
                </header>
                <div className="content">
                    <CalendarView />
                    <BookingSection />
                    <SubscriptionPanel />
                </div>
            </div>
        </div>
    );
}

export default App;
