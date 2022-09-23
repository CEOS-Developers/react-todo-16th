import React, { useState } from 'react';
import styled from 'styled-components';

const ListTitleBlock = styled.div`
    background: white;
    width: 300px;
    height: 70px;
    border-bottom-style: dashed;
`

const InputStyle = styled.input`
    width: 230px;
    height: 30px;
`

const ButtonStyle = styled.button`
    background-color:white;
    border: 0;
`
const ListTitle = (props) => {
    const [todo, setTodo] = useState("");

    // input 값 todo에 반영
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    // todo 값 위 컴포넌트로 보내서 todo list에 저장하기
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo || todo.trim()===""){
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
                    <InputStyle
                    type="text"
                    placeholder='할 일을 입력하세요'
                    value={todo}
                    onChange={handleChange}
                    />
                    <ButtonStyle 
                    type='submit'
                    onClick={handleSubmit}
                    >➕</ButtonStyle>
                </form>
            </ListTitleBlock>
        </div>
    );
};

export default ListTitle;