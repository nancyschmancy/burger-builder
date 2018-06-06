import React from 'react';
import Aux from './Aux'

import Burger from './Burger'

class BurgerBuilder extends React.Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;