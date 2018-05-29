import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        textAlign: 'center',
        padding: '16px',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div onClick={props.delete} style={style}>
            {props.char}
        </div>
    );
}

export default charComponent