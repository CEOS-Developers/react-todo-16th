import React, { useState } from 'react';
import styled from 'styled-components';

const Input = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');

  //input 값 가져오기
  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handlePlusButton = (e) => {
    e.preventDefault();

    //todoList에 input 값 추가
    const newTodoList = todoList.concat({
      id: Date.now(),
      text,
      Checked: false,
    });
    setTodoList(newTodoList);
    setText('');
  };

  return (
    <InputForm onSubmit={handlePlusButton}>
      <InputBox
        type="text"
        value={text}
        placeholder="  할 일을 입력하고 ➕ or ↵(Enter)"
        onChange={handleInput}
      />
      <button type="submit">➕</button>
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input.attrs({ required: true })`
  width: 400px;
  height: 50px;
  border: 4px solid pink;
  border-radius: 20px;
  font-size: 20px;
`;

export default Input;
