import React from 'react';

const DoneItem = (props) => {
    const {done, id, handleToToDo,handleRemove} = props;

    const func = (e) => {
        handleToToDo(done.text,done.id);
    }

    const func2 = (e) => {
        handleRemove(done.id);
    }

    return (
        <div>
            {done.text}
            <button onClick={func}>⬆️</button>
            <button onClick={func2}>Del</button>
        </div>
    );
};

export default DoneItem;