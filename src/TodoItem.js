import React from 'react';
import styled from 'styled-components';

const ItemStyle = styled.div`
    border-radius: 5px;
    margin: 5px;
`
const ButtonStyle = styled.button`
    background: white;
    border: 0;
`
const TodoItem = (props) => {
    const {todo, onChangeDone, onRemove} = props;

    // todo -> done
    const handleChange = (e) => {
        onChangeDone(todo.text, todo.id);
    }

    // 항목 삭제
    const handleRemove = (e) => {
        onRemove(todo.id);
    }

    return (
        <ItemStyle>
            <ButtonStyle onClick={handleChange}>{todo.text}</ButtonStyle>
            <ButtonStyle onClick={handleRemove}>✖</ButtonStyle>
        </ItemStyle>
    );
};

export default TodoItem;