import React from 'react';

const validation = (props) => {
    return (
        <div>
            {props.length < 12 ?
                <p>Text too short!</p> :
                <p>Text is long dude</p>}
        </div>
    );
}

export default validation;