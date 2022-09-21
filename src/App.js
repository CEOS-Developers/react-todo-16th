import React, { useCallback, useRef, useState } from 'react';
import TodoList from './Component/TodoList';
import AddList from './Component/AddList';
import styled from 'styled-components';
import { computeHeadingLevel } from '@testing-library/react';

const AllTemp = styled.div``;

function App() {
  const [inputs, setInputs] = useState({
    input: '',
  });
  const { input } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [list, setList] = useState([]);

  const nextId = useRef(1);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      input,
      toggle: true,
    };
    setList(list.concat(todo));
    setInputs({
      input: '',
      toggle: true,
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };
  const [dlist, setDlist] = useState([]);

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
        console.log(moveI.input);

        setDlist(dlist.concat(moveI));
        setList(list.filter((todo) => todo.input !== input));
      } else {
        console.log('오류');
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
        console.log(moveI);

        setList(list.concat(moveI));
        setDlist(dlist.filter((todo) => todo.input !== input));
      } else {
        console.log('오류');
      }
    },
    [list, dlist]
  );

  return (
    <AllTemp>
      <AddList input={input} onChange={onChange} onCreate={onCreate} />
      <h3>할 일 {list.length}</h3>
      <TodoList todos={list} onRemove={onRemove} onToggle={onToggle} />
      <h3>끝난 일 {dlist.length}</h3>
      <TodoList todos={dlist} onRemove={onDremove} onToggle={onDtoggle} />
    </AllTemp>
  );
}

export default App;
