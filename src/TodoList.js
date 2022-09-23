import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    border-bottom-style: dashed;
    overflow-x: scroll;
`
const TodoList = (props) => {
    const {onChangeDone, onRemove, todos} = props;
    return (
        <div>
            <TodoListBlock>
                ✔️TODO
                ({todos.length})
                {
                    todos.map((todo) => (
                        <TodoItem
                        todo={todo}
                        key={todo.id}
                        onChangeDone={onChangeDone}
                        onRemove={onRemove}
                        />
                    ))
                }
            </TodoListBlock>
        </div>
    );
};

export default TodoList;