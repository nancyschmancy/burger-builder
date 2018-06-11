import React from 'react';
import Aux from './Aux';

import Burger from './Burger';
import BuildControls from './BuildControls';

const PRICES = {
    base: 4,
    lettuce: 0,
    cheese: 1,
    patty: 3,
    bacon: .75,
}

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                patty: 0,
                lettuce: 0,
                bacon: 0,
                cheese: 0,
            },
            totalPrice: PRICES.base,
            canOrder: false,
        };
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
    }

    canTheyOrderTheBurger = (updatedIngredients) => {
        const copyIngredients = Object.values(updatedIngredients);
        const ugh = copyIngredients.reduce((sum, el) => sum + el);
        this.setState({canOrder: ugh > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.canTheyOrderTheBurger(updatedIngredients);
    }

    deleteIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceSubtraction = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.canTheyOrderTheBurger(updatedIngredients);

    }

    render() {
        const hasQty = {
            ...this.state.ingredients // copy ingredients state
        }
        for (let key in hasQty) {
            hasQty[key] = hasQty[key] > 0 // returns bool for each ingredientm replace the qty
        }
        return (
            <Aux>
                <div onClick={this.canTheyOrderTheBurger}>GHH</div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls add={this.addIngredientHandler}
                               delete={this.deleteIngredientHandler}
                               total={this.state.totalPrice}
                               hasQty={hasQty} disabled={this.canTheyOrderTheBurger}
                               canOrder={this.state.canOrder}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;