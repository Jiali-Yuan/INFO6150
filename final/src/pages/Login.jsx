import React, { useState } from 'react';
import { fetchLogin } from '../services';
import '../css/login.css';

const Login = ({ user, onLogin }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState(0);
    const [error, setError] = useState("");

    const performLogin = () => {
        if (!username || !password || !city) {
            setError("Please fill in all the input field!");
            return;
        }
        setError('');
        setIsLoading(true);
        fetchLogin(username, password, city)
            .then(() => onLogin(username, password, city))
            .catch((err) => {
                setError("invalid username");
                setIsLoading(false);
            });
    };

    return (
        <div className="login">
            <p className="error">{error}</p>
            {isLoading ? <span className="loader"></span> :
                <div className="login-panel">
                    <h3>Welcome to Sweet Station</h3>
                    <form className="input-username">
                        <label>Username </label>
                        <input  onChange={(e) => setUsername(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' ? performLogin(e) : null} required />
                        <label>Password </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" className="password" required />
                        <label>City </label>
                        <input onChange={(e) => setCity(e.target.value)} type="text" required />
                        <button onClick={performLogin} >Login</button>
                    </form>
                </div>}
        </div>
    );
};

export default Login;