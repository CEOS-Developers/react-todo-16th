import React from 'react';

const Item = (props) => {
    const {todo, id, handleToDone} = props;

    const handleSubmit = (e) => {
        handleToDone(todo.text, todo.id);
    }

    return (
        <div>
            {id}
            {todo.text}
            <button onClick={handleSubmit}>⬇️</button>
        </div>
    );
};

export default Item;