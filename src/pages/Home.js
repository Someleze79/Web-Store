// src/pages/Home.js

import React, { useState } from 'react';

function Home() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    if (loggedIn) {
      setLoggedIn(false);
      setUsername('');
    } else {
      if (username.trim() !== '') {
        setLoggedIn(true);
      } else {
        alert('Please enter your name.');
      }
    }
  };

  return (
    <div className="container mt-5">
      {!loggedIn ? (
        <>
          <input
            type="text"
            value={username}
            placeholder="Enter your name"
            className="form-control mb-3"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleLoginLogout}>Login</button>
        </>
      ) : (
        <>
          <h1>Welcome, {username}!</h1>
          <button className="btn btn-danger" onClick={handleLoginLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Home;