import React from "react";
import sundaeImg from '../img/sundae-img.jpeg';
import '../css/sundae.css';

function Sundae() {
    return (
        <div className="sundae-page">
            <h1>brownie sundae</h1>
            <p>Italian coffee-based dessert made with our Gluten-free Honduran Chocolate Manifesto Brownie and Sandy’s
                Amazing Chocolate Chunk Manifesto Cookie, vanilla ice cream, dalgona coffee cream and chocolate chip chunk
                cookie crumbles. What a mouth full!</p>
            <div className="content">
                <img className="sundae-img" src={sundaeImg} />
                <p>Recipe Yield: 1 serving
                    <br />
                    Prep Time: 5 minutes
                    <br />
                    Total Time: 5 minutes
                </p>
            </div>
            <h3>Ingredients</h3>
            <div className="ingredients">
                <p>Gluten-Free Honduran Chocolate Manifesto Brownie
                    <br />
                    Sandy’s Amazing Chocolate Chunk Cookie
                    <br />
                    Vanilla Ice Cream – Haagen dazs
                    <br />
                    Dalgona – see recipe
                    <br />
                    Pretty Mug 🙂
                </p>
            </div>
            <div className="directions">
                <h3>Directions</h3>
                <p>step 1: Cut brownie into bite-size pieces and place at the bottom of the mug.
                    <br />
                    step 2: Layer a scoop or two of vanilla ice cream on top of brownie.
                    <br />
                    step 3: Repeat steps 1 & 2.
                    <br />
                    step 4: Scoop dalgona on top of the brownies and ice cream layers.
                    <br />
                    step 5: Top with a sprinkle of cookie crumbles and cookie wedge.</p>
            </div>
        </div>
    );
}

export default Sundae;