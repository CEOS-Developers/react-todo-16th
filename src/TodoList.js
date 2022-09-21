import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    padding:3%;
    border-bottom-style: dashed;
`
const TodoList = () => {
    return (
        <div>
            <TodoListBlock>
                TodoList
            </TodoListBlock>
        </div>
    );
};

export default TodoList;