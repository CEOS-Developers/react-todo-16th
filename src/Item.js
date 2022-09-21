import React from 'react';

const Item = (props) => {
    const {todo, id} = props;

    return (
        <div>
            {todo.text}
        </div>
    );
};

export default Item;