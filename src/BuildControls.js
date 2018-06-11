import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';
import OrderSummary from './OrderSummary';

const controls = [
    {label: "Lettuce", type: 'lettuce'},
    {label: "Bacon", type: 'bacon'},
    {label: "Cheese", type: 'cheese'},
    {label: "Patty", type: 'patty'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <OrderSummary total={props.total}/>
        {controls.map(ctrl => (
            <BuildControl add={() => props.add(ctrl.type)}
                          delete={() => props.delete(ctrl.type)}
                          key={ctrl.label}
                          label={ctrl.label} hasQty={props.hasQty[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.canOrder}>ORDER NOW</button>

    </div>

);

export default buildControls;