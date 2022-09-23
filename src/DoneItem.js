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
const DoneItem = (props) => {
    const {done, onChangeTodo,onRemove} = props;

    // done -> todo
    const handleChange = (e) => {
        onChangeTodo(done.text,done.id);
    }

    // 항목 삭제
    const handleRemove = (e) => {
        onRemove(done.id);
    }

    return (
        <ItemStyle>
            <ButtonStyle onClick={handleChange}>{done.text}</ButtonStyle>
            <ButtonStyle onClick={handleRemove}>✖</ButtonStyle>
        </ItemStyle>
    );
};

export default DoneItem;