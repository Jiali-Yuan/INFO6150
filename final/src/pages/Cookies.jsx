import React from 'react';
import casseroleImg from '../img/Casserole-Cookies.jpeg';
import '../css/cakes.css';
import hopkinsImg from '../img/Hopkins-cookies.jpg';
import gingerImg from '../img/ginger-cookies.jpeg';
import oatmealImg from '../img/Oatmeal-cookies.jpeg';
import rumImg from '../img/Rum-Sundae.jpeg';
import strawberryImg from '../img/strawberry-sundae.jpeg';
// import '../css/cheesecake.css';

function Cookies() {

    return (
        <div className="cakes-page">
            <h1>Cookies | Bars | Sundaes</h1>
            <p>If you are going to splurge for a dessert, you should choose one that contains real sugar instead of artificial 
                sweeteners.These artificial sweeteners are put in many desserts under the false pretense that they are healthier 
                for you. The chemicals in these additives can lead to health risks down the line. In fact, for 12 days, 
                scientists researched the long term effects of sugar in comparison to aspartame, an artificial sweetener. 
                They found that table sugar -- sucralose, an artificial sweetener -- reduces levels of cortisol, the stress 
                hormone in the body😋</ p>
            <ul className="cakes-list">
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={casseroleImg} />
                            <span>Casserole Cookies</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>2 eggs, 1 cup sugar, 1 cup chopped dates, 1 cup shredded coconut, 1 cup chopped walnuts, 
                                1/4 teaspoon vanilla, 1/4 teaspoon almond extract, 1/2 cup powdered sugar</p>
                            <h3>Instruction</h3>
                            <p>Beat eggs, add sugar and mix well. Incorporate remaining ingredients except for powdered sugar 
                                and mix together. Bake in a buttered 1-quart casserole for 25 to 30 minutes at 350 degrees. 
                                Stir mixture occasionally during baking. Let mixture cool to touch. Shape into balls and roll 
                                in powdered sugar.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={hopkinsImg} />
                            <span>Hopkins Cookies</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>1 3/4 cup flour, 2/3 cup sugar, 2/3 cup margarine or butter, 1 egg, 1/2 cup molasses, 
                                1 1/2 teaspoons baking soda, 1 1/4 cups raisins or currants or both, 1/2 teaspoon ground cinnamon, 
                                1 1/2 teaspoons ground ginger, 1/2 teaspoon salt</p>
                            <h3>Instruction</h3>
                            <p>Melt margarine and add sugar. Combine with all other ingredients and let stand in refrigerator 
                                several hours or overnight. Place by teaspoon onto a greased cookie sheet, smooth with a knife 
                                dipped in milk, and bake at 350 degrees about 10 to 12 minutes. Remove to a rack to cool.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={oatmealImg} />
                            <span>Oatmeal Cookies</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>1 cup butter, 1 cup granulated sugar, 1/2 cup brown sugar, 1 egg, 1 1/2 cups sifted flour, 
                                1 teaspoon baking soda, 1 teaspoon cinnamon, 1 1/2 cups quick-cooking oatmeal, 3/4 cup chopped 
                                walnuts, 1 teaspoon vanilla</p>
                            <h3>Instruction</h3>
                            <p>Cream butter and sugar. Add flour sifted with soda and cinnamon. Add egg. Add oatmeal, 
                                chopped walnuts, and vanilla. Chill thoroughly. Drop by teaspoonful onto greased cookie sheet. 
                                Bake at 350 degrees for 10 minutes.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={gingerImg} />
                            <span>Ginger Cookies</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>2 cups (4 sticks) unsalted butter, 2 cups sugar, 6 large eggs, 3 1/2 cups sifted all-purpose flour, 
                                1 1/2 teaspoons ground nutmeg</p>
                            <h3>Instruction</h3>
                            <p> Preheat the oven to 350°F. Grease a 10-inch Bundt pan with vegetable shortening. In the bowl of an 
                                electric mixer, or in a large bowl, beating by hand, cream the butter until it is light and fluffy. 
                                Add the sugar gradually while continuing to beat. Add the eggs one at a time, beating in each one 
                                thoroughly before adding the next.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={rumImg} />
                            <span>Rum Sundae</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>3 large eggs, separated, 1 cup (2 sticks) unsalted butter, softened, 1 1/4 cups, plus 2 
                                tablespoons sugar, 1 3/4 cups, plus 2 tablespoons all-purpose flour, sifted, 1/2 teaspoon ground nutmeg</p>
                            <h3>Instruction</h3>
                            <p>Preheat the oven to 375°F. Grease five 12-cup mini-muffin pans with vegetable shortening. In the 
                                bowl of an electric mixer, or in a large bowl whisking by hand, whip the egg whites to stiff peaks. 
                                Pour into a separate bowl, and set aside. Put the egg yolks in the same bowl, and whip or whisk 
                                by hand until light and frothy. Set aside.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={strawberryImg} />
                            <span>Strawberry Sundae</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>1 package yellow cake mix, 1 small package instant vanilla pudding mix, 1 teaspoon nutmeg, 
                                4 eggs, 3/4 cup vegetable oil, 3/4 cup cream sherry Sifted powdered sugar to cover cake</p>
                            <h3>Instruction</h3>
                            <p>Combine ingredients and beat with electric mixer for 4 minutes. Pour into well-buttered 10-inch 
                                bundt pan and bake at 325 degrees for 45 to 50 minutes, or until cake tests done. Cool in pan 15 
                                minutes, then turn out and sprinkle with sifted powdered sugar.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Cookies;