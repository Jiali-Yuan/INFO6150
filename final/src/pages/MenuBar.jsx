import React from 'react';
import '../css/menubar.css';

function Menubar({ setPage }) {
    function navTo(e, target) {
        setPage(target);
    }

    return (
        <div className="menubar">
            <ul className="menu">
                <li><a href="#home" onClick={(e) => navTo(e, 'Home')}>HOME</a></li>
                <li><a href="#about" onClick={(e) => navTo(e, 'About')}>ABOUT US</a></li>
                <li><button type="button">CLASSIFICATION</button>
                    <ul className="submenu">
                        <li><a href="#classification/cookies" onClick={(e) => navTo(e, 'Cookies')}>cookies | bars | sundaes</a></li>
                        <li><a href="#classification/cakes" onClick={(e) => navTo(e, 'Cakes')}>cakes | plating</a></li>
                        <li><a href="#classification/candies" onClick={(e) => navTo(e, 'Candies')}>candies | icecreem</a></li>
                    </ul>
                </li>
                <li><button type="button">HOT RECIPES</button>
                    <ul className="submenu">
                        <li><a href="#hot-recipes/cheesecake" onClick={(e) => navTo(e, 'Cheesecake')}>apple streusel cheesecake</a></li>
                        <li><a href="#hot-recipes/sundae" onClick={(e) => navTo(e, 'Sundae')}>brownie sundae</a></li>
                    </ul>
                </li>
                <li><a href="#privacy" onClick={(e) => navTo(e, 'Privacy')}>PRIVACY</a></li>
            </ul>
        </div>
    );
};

export default Menubar;