import React, { useState } from 'react';

function UserProfile(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let content;
  if (isLoggedIn) {
    content = (
      <div>
        <p>Welcome, {props.username}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <p>Please log in to view your profile.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>User Profile</h2>
      {content}
    </div>
  );
}

export default UserProfile;
