import React, { useRef, useState } from 'react';
import styled from "styled-components"
import ListTitle from './ListTitle';
import TodoList from './TodoList';
import DoneList from './DoneList';

const ListTemplateBlock = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: black;
    justify-content: center;
    align-items: center;
`
const ListTemplate = () => {
    const [todos,setTodos] = useState([]);
    const [dones,setDones] = useState([]);

    const id = useRef(0);

    const handleSubmit = (text) => {
        const todo = {
            id: id.current,
            text
        };
        setTodos([...todos,todo]);
        id.current++;
    }

    const handleChangeDone = (text,num) => {
        const done = {
            id: num,
            text
        };
        setDones([...dones,done]);
        const result = todos.filter(todo => todo.id !== num);
        setTodos([...result]);
    }

    const handleChangeTodo = (text,num) => {
        const todo = {
            id: num,
            text
        };
        setTodos([...todos,todo]);
        const result = dones.filter(done => done.id !== num);
        setDones([...result]);
    }

    const handleRemove = (num) => {
        const resultTodo = todos.filter(todo => todo.id !== num);
        const resultDone = dones.filter(done => done.id !== num);
        setTodos([...resultTodo]);
        setDones([...resultDone]);
    }

    
    return (
        <div>
            <ListTemplateBlock>
                <ListTitle onSubmit = {handleSubmit}/>
                <TodoList onChangeDone={handleChangeDone} onRemove={handleRemove} todos={todos}/>
                <DoneList onChangeTodo={handleChangeTodo} onRemove={handleRemove} dones={dones}/>
            </ListTemplateBlock>
        </div>
    );
};

export default ListTemplate;