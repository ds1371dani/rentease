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

import React from 'react';
import axios from 'axios';

function App() {
  const handleClick = async () => {
    try {
      // Send a GET request to the Django backend
      const response = await axios.get('https://rentease-back.liara.run/api/');
      // Log the response data
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data from the server.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React-Django Integration</h1>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
}

export default App;
