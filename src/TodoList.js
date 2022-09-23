import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const TodoListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    padding:3%;
    border-bottom-style: dashed;
    overflow-x: scroll;
`
const TodoList = (props) => {
    const {onChangeDone, onRemove, todos} = props;
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