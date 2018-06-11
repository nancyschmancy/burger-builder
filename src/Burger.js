import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {
    // The ingredients prop is an object - Object.keys() turns it to:
    // ["lettuce", "bacon", "cheese", "patty"]
    // .map is called to add additional components representing ingredient qty
    // Array() method creates an array with an integer passed in and creates that many items
    // reduce() turns array into something else or something?
    let ingredientsArray = Object.keys(props.ingredients);
    let layeredIngredients = ingredientsArray.map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
            return <BurgerIngredient key={ingredient + i} type={ingredient} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (layeredIngredients.length === 0) {
        layeredIngredients = <p>Add something bitch</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bun-top"/>
            {layeredIngredients}
            <BurgerIngredient type="bun-bottom"/>
        </div>
    );
};

export default burger;
