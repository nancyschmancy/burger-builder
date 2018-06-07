import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';


// NOTE: This was once a dumb component but changed it to stateful
// to allow use of prop validation. Still not managing state here.
class BurgerIngredient extends React.Component {
    render() {

        let ingredient = null;

        switch (this.props.type) {
            case ('bun-top'):
                ingredient = (<div className={classes.BunTop}>
                                <div className={classes.Seeds1} />
                                <div className={classes.Seeds2} />
                              </div>);``
                break;
            case ('bun-bottom'):
                ingredient = <div className={classes.BunBottom} />;
                break;
            case ('patty'):
                ingredient = <div className={classes.Patty} />;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese} />;
                break;
            case ('lettuce'):
                ingredient = <div className={classes.Lettuce} />;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon} />;
                break;
            default:
                ingredient: null;
            }
        return ingredient;
    }
};

BurgerIngredient.propType = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
