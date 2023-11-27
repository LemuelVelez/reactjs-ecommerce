import React, { useEffect, useState } from "react";

function Dashboard() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchContactMessages() {
            try {
                const response = await fetch('http://127.0.0.1:8000/admin/contact-messages');
                if (response.ok) {
                    const data = await response.json();
                    setMessages(data.data);
                } else {
                    console.error('Failed to fetch contact messages');
                }
            } catch (error) {
                console.error('Error fetching contact messages:', error);
            }
        }

        fetchContactMessages();
    }, []);

    return (
        <div>
            <div className="dashboard-container" style={dashboardContainerStyle}>
                <h1 className="dashboard-title" style={dashboardTitleStyle}>Dashboard Overview</h1>
                <p className="dashboard-description" style={dashboardDescriptionStyle}>Explore the insights and analytics of your activities. Stay up-to-date with the latest trends and make informed decisions.</p>
                <div className="dashboard-stats" style={dashboardStatsStyle}>
                    <div className="stat-box" style={statBoxStyle}>
                        <h3>Total Orders</h3>
                        <p className="stat-count" style={statCountStyle}>256</p>
                    </div>
                    <div className="stat-box" style={statBoxStyle}>
                        <h3>Revenue</h3>
                        <p className="stat-count" style={statCountStyle}>₱15,000</p>
                    </div>
                    <div className="stat-box" style={statBoxStyle}>
                        <h3>Active Users</h3>
                        <p className="stat-count" style={statCountStyle}>120</p>
                    </div>
                </div>
                <div className="dashboard-activities" style={dashboardActivitiesStyle}>
                    <h2>Recent Activities</h2>
                    <ul style={recentActivitiesListStyle}>
                        <li style={recentActivityStyle}>Added new product: Awesome Widget</li>
                        <li style={recentActivityStyle}>Received payment from VIP customer</li>
                        <li style={recentActivityStyle}>Shipped orders to various locations</li>
                    </ul>
                </div>
            </div>
            <h2>Contact Messages</h2>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <strong>{message.name}</strong> - {message.email}: {message.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Define styles as objects
const dashboardContainerStyle = {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const dashboardTitleStyle = {
    color: "#333",
};

const dashboardDescriptionStyle = {
    color: "#666",
};

const dashboardStatsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
};

const statBoxStyle = {
    flex: "1",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
};

const statCountStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#007bff",
};

const dashboardActivitiesStyle = {
    marginTop: "40px",
};

const recentActivitiesListStyle = {
    listStyleType: "none",
    padding: "0",
};

const recentActivityStyle = {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
};

export default Dashboard;
