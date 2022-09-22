import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const TodoListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    padding:3%;
    border-bottom-style: dashed;
`
const TodoList = (props) => {
    const {handleToDone, handleRemove, todos} = props;
    console.log(todos);
    return (
        <div>
            <TodoListBlock>
                TODO
                ({todos.length})
                {
                    todos.map((todo) => (
                        <Item
                        todo={todo}
                        key={todo.id}
                        handleToDone={handleToDone}
                        handleRemove={handleRemove}
                        />
                    ))
                }
            </TodoListBlock>
        </div>
    );
};

export default TodoList;