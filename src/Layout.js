import React from 'react';
import Aux from './Aux'
import classes from './Layout.css'

// need adjacent elements to be side by side so will create a high order component Aux
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
