import React from 'react';
// import './SubscriptionPanel.css';

function SubscriptionPanel() {
    return (
        <div className="subscription-panel">
            <h2>Subscription Plans</h2>
            <div className="plan">
                <h3>Weekly Plan</h3>
                <p>$10/week</p>
                <button>Subscribe</button>
            </div>
            <div className="plan">
                <h3>Monthly Plan</h3>
                <p>$30/month</p>
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default SubscriptionPanel;
