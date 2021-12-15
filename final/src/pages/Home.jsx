import React from 'react';
import homeImg from '../img/home-img.jpeg';
import '../css/home.css';

function Home() {
    return (
        <div className="home-page">
            <p className="home-intro">You never know when your sweet tooth is going to kick into high gear. So having a collection of 
                recipes for easy desserts on hand will make those days just a little easier! Having your own personal 
                recipe collection of quick and easy desserts can satisfy any craving! </p>
            <img className="home-img" src={homeImg}/>
        </div>
    );
};

export default Home;