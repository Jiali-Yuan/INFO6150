import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import React, { useState } from 'react';


function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false, username: "", password: "", city: "" });

  const login = (username, password, city) => {
    setUserState({
      isLoggedIn: true,
      username: username,
      password: password,
      city: city
    });
  };

  return (
      <div className="App">{userState.isLoggedIn ?
        <HomePage user={userState}/> :
        <Login user={userState} onLogin={login} />}
      </div>
  );
}

export default App;
