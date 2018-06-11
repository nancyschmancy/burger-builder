import React from 'react';

const orderSummary = (props) => {
    return (
        <div>Total Price: {props.total.toFixed(2)}</div>
    )
}

export default orderSummary;