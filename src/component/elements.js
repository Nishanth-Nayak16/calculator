import React from 'react';

const elements = (props) => {
    var inputElement;
    switch(props.type) {
        case ('button'):
            inputElement = <button onClick={props.clicked} value={props.value}>{props.children}</button>;
            break;
        case ('text'):
            inputElement = <input type="text" readOnly value={props.value} />
            break;
        default :
            inputElement = <input type="text" readOnly value={props.value} />
            break;
    }
    return (
        <div>
            {inputElement}
        </div>
    );
};

export default elements;