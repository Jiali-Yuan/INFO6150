import React from "react";
import cheesecakeImg from '../img/cheesecake-img.jpeg';
import '../css/cheesecake.css';

function Cheesecake() {
    return (
        <div className="cheesecake-page">
            <h1>apple streusel cheesecake</h1>
            <p>Here’s an easy way to add fall flavors without drastically changing your dessert menu.</p>
            <div className="content">
            <img className="cheesecake-img" src={cheesecakeImg} />
                <p>Recipe Yield: 1 serving
                    <br />
                    Prep Time: 5 minutes
                    <br />
                    Total Time: 5 minutes
                </p>
            </div>
            <h3>Ingredients</h3>
            <div className="ingredients">
                <p>1 slice Sweet Street NY Cheesecake
                    <br />
                    1 cup FAV R PAC Roasted Fiji Apples
                    <br />
                    1 Tbsp Ocean Spray Craisins
                    <br />
                    2 Tbsp Blueberry Almond Crumb Topping (see  recipe)
                </p>
            </div>
            <div className="directions">
                <h3>Directions</h3>
                <p>
                Beat cheese and add eggs one at a time, beating well after each addition. Add sugar and vanilla or amaretto 
                and blend well. Fill very small paper baking cups 3/4 full. Bake at 300 degrees for 20 to 25 minutes. The cakes 
                will fall slightly when removed from the oven. Cover each cake with 1/2 teaspoon of topping and bake 5 minutes longer. 
                Decorate with a bit of candied fruit or ground toffee.
                </p>
            </div>
        </div>
    );
}

export default Cheesecake;