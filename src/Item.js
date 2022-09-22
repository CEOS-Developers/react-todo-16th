import React from 'react';

const Item = (props) => {
    const {todo, id, handleToDone, handleRemove} = props;

    const handleSubmit = (e) => {
        handleToDone(todo.text, todo.id);
    }

    const func = (e) => {
        handleRemove(todo.id);
    }

    return (
        <div>
            {id}
            {todo.text}
            <button onClick={handleSubmit}>⬇️</button>
            <button onClick={func}>Del</button>
        </div>
    );
};

export default Item;