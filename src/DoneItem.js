import React from 'react';

const DoneItem = (props) => {
    const {done, onChangeTodo,onRemove} = props;

    const handleChange = (e) => {
        onChangeTodo(done.text,done.id);
    }

    const handleRemove = (e) => {
        onRemove(done.id);
    }

    return (
        <div>
            {done.text}
            <button onClick={handleChange}>⬆️</button>
            <button onClick={handleRemove}>Del</button>
        </div>
    );
};

export default DoneItem;