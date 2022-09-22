import React from 'react';

const DoneItem = (props) => {
    const {done, id, handleToToDo} = props;

    const func = (e) => {
        handleToToDo(done.text,done.id);
    }

    return (
        <div>
            {done.id}
            {done.text}
            <button onClick={func}>⬆️</button>
        </div>
    );
};

export default DoneItem;