import React from "react";

function Profile() {
    return (
        <div className="profile-container" style={profileContainerStyle}>
            <h1 className="profile-title" style={profileTitleStyle}>Welcome to Your Profile</h1>
            <p className="profile-description" style={profileDescriptionStyle}>Here, you can manage your personal information, customize your preferences, and explore exciting features.</p>
            <div className="profile-details" style={profileDetailsStyle}>
                <p style={profileDetailItemStyle}><strong>Name:</strong> John Doe</p>
                <p style={profileDetailItemStyle}><strong>Email:</strong> john.doe@example.com</p>
                <p style={profileDetailItemStyle}><strong>Joined:</strong> January 2022</p>
                <p style={profileDetailItemStyle}><strong>Location:</strong> City of Dreams</p>
            </div>
        </div>
    );
}

// Define styles as objects
const profileContainerStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const profileTitleStyle = {
    color: "#333",
};

const profileDescriptionStyle = {
    color: "#666",
};

const profileDetailsStyle = {
    marginTop: "20px",
};

const profileDetailItemStyle = {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
};

export default Profile;
