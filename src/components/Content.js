import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';

const Content = () => {
  // todo item, todo 배열, done 배열
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  // 로컬스토리지에서 값 있으면 불러오기
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    const localDones = JSON.parse(localStorage.getItem('dones'));
    if (localTodos) {
      setTodos(localTodos);
    }
    if (localDones) {
      setDones(localDones);
    }
  }, []);

  // todo item의 id값 정해주기
  const todoId = useRef(0);

  // input으로 받은 값 todo에 넣어주기
  const insertTodo = (e) => {
    setTodo(e.target.value);
  };

  const createTodo = (e) => {
    e.preventDefault();
    // input값이 없으면 경고창
    if (todo === '') {
      alert('할 일을 입력해 주세요!');
      return;
    }

    // todo에 id값 부여
    const newTodo = {
      id: todoId.current,
      type: 'TODO',
      todo,
    };

    // id값 1 증가
    todoId.current += 1;

    // todos 배열에 새로운 todo 담기
    setTodos((curArr) => [newTodo, ...curArr]);

    // input값을 저장하는 todo 초기화
    setTodo('');
  };

  // todo 삭제 이후 todos 배열 다시 만들기
  const deleteTodo = (delItem) => {
    const newTodos = todos.filter((item) => item.id !== delItem.id);
    setTodos(newTodos);
  };

  // done 삭제 이후 dones 배열 다시 만들기
  const deleteDone = (delItem) => {
    const newDones = dones.filter((item) => item.id !== delItem.id);
    setDones(newDones);
  };

  // todo <-> done 토글
  const toggleTodo = (item) => {
    if (item.type === 'TODO') {
      item.type = 'DONE';
      setDones((curArr) => [item, ...curArr]);
      deleteTodo(item);
    } else {
      item.type = 'TODO';
      setTodos((curArr) => [item, ...curArr]);
      deleteDone(item);
    }
  };

  // 로컬스토리지에 todos, dones 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem('dones', JSON.stringify(dones));
  }, [dones]);

  return (
    <TodoList
      todo={todo}
      todos={todos}
      dones={dones}
      insertTodo={insertTodo}
      createTodo={createTodo}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      deleteDone={deleteDone}
    />
  );
};

export default React.memo(Content);
