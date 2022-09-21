import React, { useState } from 'react';
import styled from "styled-components"
import ListTitle from './ListTitle';
import TodoList from './TodoList';
import DoneList from './DoneList';

const ListTemplateBlock = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: yellow;
    justify-content: center;
    align-items: center;
`
const ListTemplate = () => {
    return (
        <div>
            <ListTemplateBlock>
                <ListTitle/>
                <TodoList/>
                <DoneList/>
            </ListTemplateBlock>
        </div>
    );
};

export default ListTemplate;