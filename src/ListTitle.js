import React, { useState } from 'react';
import styled from 'styled-components';

const ListTitleBlock = styled.div`
    background: white;
    width: 300px;
    height: 70px;
    padding:3%;
    border-bottom-style: dashed;
`
const ListTitle = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo){
            return;
        }
        props.onSubmit(todo);
        setTodo("");
    }

    return (
        <div>
            <ListTitleBlock>
                투두리스트
                <form>
                    <input
                    type="text"
                    placeholder='할 일을 입력하세요'
                    value={todo}
                    onChange={handleChange}
                    />
                    <button 
                    type='submit'
                    onClick={handleSubmit}
                    >+</button>
                </form>
            </ListTitleBlock>
        </div>
    );
};

export default ListTitle;