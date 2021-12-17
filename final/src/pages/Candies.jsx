import React from 'react';
import liquorImg from '../img/liquor-ball.jpeg';
import oldImg from '../img/old-candy.jpeg';
import butterImg from '../img/butterscotch-candy.jpeg';
import chocolateImg from '../img/chocolate-leaves.jpeg';
import christmasImg from '../img/christmas-candy.jpeg';
import congoImg from '../img/congo-candy.jpeg';
import '../css/cakes.css';

function Candies() {

    return (
        <div className="cakes-page">
            <h1>Candies | Icecreem</h1>
            <p>Everyone loves to enjoy a sweet -- or savory!-- treat that will instantly boost their mood and make them feel better. 
                Ice cream seems to be one of the most enjoyed treats in the nation, considering that 40% of Americans will eat ice 
                cream at least once in a two week period, a number that’s just below our nation’s coffee consumption😉</ p>
            <ul className="cakes-list">
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={butterImg} />
                            <span>Butterscotch Goodies</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>4 medium eggs, 2 cups firmly-packed brown sugar, 1 tablespoon butter, 1 1/2 cups sifted all-purpose 
                                flour, 1 1/2 teaspoons double-acting baking powder, 1 1/2 cups black walnuts, 1 teaspoon vanilla 
                                Powdered sugar</p>
                            <h3>Instruction</h3>
                            <p>Mix ingredients and beat for 2 minutes with an electric beater or 300 quick beats by hand. Put ingredients 
                                in a well-greased and floured tubular cake pan, 10x4 inches. Bake 45 to 50 minutes in 350 degree oven. 
                                Remove from oven and let stand for 10 minutes. While still warm, make holes with ice pick or knitting 
                                needle on top and glaze.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={liquorImg} />
                            <span>Hard Liquor Balls</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>3/4 cup butter, 1 1/2 cups sugar, 3 eggs, beaten, 1 teaspoon ground cloves, 
                                1 teaspoon allspice, 1 teaspoon nutmeg</p>
                            <h3>Instruction</h3>
                            <p>Cream the butter and sugar. Add the eggs beaten well with the spices. Add the sour milk 
                                alternately with the flour and when well blended, add the jam, raisins, pecans, and citron. 
                                Fold in gently. Pour into a greased 10-inch tube pan. Bake in moderate oven (350 degrees) 
                                for 50 to 60 minutes or until toothpick tested in center comes out clean. Unmold and while 
                                still warm, pour brandy over the top.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={chocolateImg} />
                            <span>Chocolate Leaves</span>
                        </div>
                        <div className="item-back">
                            <h3>Ingredients</h3>
                            <p>3 (8 ounce) packages cream cheese, softened, 5 eggs, 1 cup sugar, 1 1/2 teaspoon vanilla or amaretto</p>
                            <h3>Instruction</h3>
                            <p>Beat cheese and add eggs one at a time, beating well after each addition. Add sugar and vanilla or 
                                amaretto and blend well. Fill very small paper baking cups 3/4 full. Bake at 300 degrees for 20 to 25 
                                minutes. The cakes will fall slightly when removed from the oven. Cover each cake with 1/2 teaspoon of 
                                topping and bake 5 minutes longer. Decorate with a bit of candied fruit or ground toffee.</p>
                        </div>
                    </div>
                </li>
                <li className="cakes-item">
                    <div className="item-inner">
                        <div className="item-front">
                            <img className="sundae-img" src={oldImg} />
                            <span>Old Fashioned Divinity</span>
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
                            <img className="sundae-img" src={christmasImg} />
                            <span>Christmas Fudge</span>
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
                            <img className="sundae-img" src={congoImg} />
                            <span>Congo Squares</span>
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

export default Candies;