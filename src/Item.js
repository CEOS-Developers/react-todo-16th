import React from 'react';

const Item = (props) => {
    const {todo, onChangeDone, onRemove} = props;

    const handleChange = (e) => {
        onChangeDone(todo.text, todo.id);
    }

    const handleRemove = (e) => {
        onRemove(todo.id);
    }

    return (
        <div>
            {todo.text}
            <button onClick={handleChange}>⬇️</button>
            <button onClick={handleRemove}>Del</button>
        </div>
    );
};

export default Item;