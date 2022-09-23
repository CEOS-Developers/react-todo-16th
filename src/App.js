import React, { useCallback, useRef, useState } from 'react';
import TodoList from './Component/TodoList';
import AddList from './Component/AddList';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

function App() {
  //useState이용
  const [inputs, setInputs] = useState({
    input: '',
  });
  const [dlist, setDlist] = useState([]);
  const [list, setList] = useState([]);
  const { input } = inputs;

  //input 박스에서 onChange함수 호출 시 일어나는 일
  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //nextId 1부터 사용
  const nextId = useRef(1);

  //input 입력시 만들어지는 배열 요소 함수
  const onCreate = () => {
    const todo = {
      id: Date.now(),
      input,
      toggle: true,
    };

    if (input.trim() === '') {
      setInputs({
        input: '',
        toggle: true,
      });
    } else {
      setList(list.concat(todo));
      setInputs({
        input: '',
        toggle: true,
      });
      nextId.current += 1;
    }
  };

  const onRemove = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  const onDremove = (id) => {
    setDlist(dlist.filter((todo) => todo.id !== id));
  };

  const onToggle = useCallback(
    (input) => {
      const lis = list.find((todo) => todo.input === input);

      if (lis.toggle !== false) {
        setList(
          list.map((todo) =>
            todo.input === input ? { ...todo, toggle: !todo.toggle } : todo
          )
        );

        const moveI = list.find((todo) => todo.input === input);

        setDlist(dlist.concat(moveI));
        setList(list.filter((todo) => todo.input !== input));
      }
    },
    [list, dlist]
  );

  const onDtoggle = useCallback(
    (input) => {
      const dlis = dlist.find((todo) => todo.input === input);

      if (dlis.toggle === true) {
        setDlist(
          dlist.map((todo) =>
            todo.input === input ? { ...todo, toggle: !todo.toggle } : todo
          )
        );

        const moveI = dlist.find((todo) => todo.input === input);

        setList(list.concat(moveI));
        setDlist(dlist.filter((todo) => todo.input !== input));
      }
    },
    [list, dlist]
  );

  return (
    <>
      <GlobalStyle />
      <StyledBody>
        <AllTemp>
          <AddList input={input} onChange={onChange} onCreate={onCreate} />
          <FontCol> 할 일(중복 입력X) {list.length}</FontCol>
          <TodoList todos={list} onRemove={onRemove} onToggle={onToggle} />
          <FontCol> Done {dlist.length}</FontCol>
          <TodoList todos={dlist} onRemove={onDremove} onToggle={onDtoggle} />
        </AllTemp>
      </StyledBody>
    </>
  );
}

const AllTemp = styled.div`
  width: 350px;
  height: 660px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 38%;
  justify-content: center;
  align-items: center;
  font-family: 'Jua', sans-serif;
`;
const FontCol = styled.h3`
  color: pink;
  margin-left: 10px;
`;

const StyledBody = styled.body`
  background-color: #db7093;
`;
export default App;
