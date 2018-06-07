import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    {label: "Lettuce", type: 'lettuce'},
    {label: "Bacon", type: 'bacon'},
    {label: "Cheese", type: 'cheese'},
    {label: "Patty", type: 'patty'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl add={() => props.add(ctrl.type)}
                          delete={() => props.delete(ctrl.type)}
                          key={ctrl.label}
                          label={ctrl.label}/>
        ))}
    </div>

);

export default buildControls;