import React, { useRef, useState } from 'react';
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
    const [todos,setTodos] = useState([]);

    const Id = useRef(0);

    const handleSubmit = (text) => {
        const todo = {
            id: Id.current,
            text
        };
        setTodos([...todos,todo]);
        Id.current++;
    }
    
    return (
        <div>
            <ListTemplateBlock>
                <ListTitle onSubmit = {handleSubmit}/>
                <TodoList todos = {todos}/>
                <DoneList/>
            </ListTemplateBlock>
        </div>
    );
};

export default ListTemplate;