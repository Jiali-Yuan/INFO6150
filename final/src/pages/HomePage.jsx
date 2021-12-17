import React from 'react';
import '../css/homepage.css';
import Menubar from './MenuBar';
import { useState } from 'react';
import About from './About';
import Home from './Home';
import Cakes from './Cakes';
import Cookies from './Cookies';
import Candies from './Candies';
import Privacy from './Privacy';
import Cheesecake from './Cheesecake';
import Sundae from './Sundae';

function HomePage( {user}) {
    const [page, setPage] = useState('Home');
    return (
        <div className="home-page">
            <header>
                <h1 className="head-title"> Sweet Station - {user.city}</h1>
                <span className="subheader">Welcome {user.username}! Let's make your dessert!</span>
                <Menubar page={page} setPage={setPage} />
                {page === 'About' && <About />}
                {page === 'Home' && <Home />}
                {page === 'Cakes' && <Cakes />}
                {page === 'Candies' && <Candies />}
                {page === 'Cookies' && <Cookies />}
                {page === 'Cheesecake' && <Cheesecake />}
                {page === 'Sundae' && <Sundae />}
                {page === 'Privacy' && <Privacy />}
            </header>
            <footer className="homepage-footer">
                <span>sweet station</span><br/><span className="location">401 Terry Ave N #103, Seattle, WA 98109</span>
            </footer>
        </div>
    );
};

export default HomePage;