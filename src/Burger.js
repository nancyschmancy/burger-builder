import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {
    // The ingredients prop is an object - Object.keys() turns it to:
    // ["salad", "bacon", "cheese", "meat"]
    // .map is called to add additional components representing ingredient qty
    const ingredientsArray = Object.keys(props.ingredients);
    const layeredIngredients = ingredientsArray.map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
            return <BurgerIngredient key={ingredient + i} type={ingredient} />
        })
    });
    console.log(layeredIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {layeredIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
