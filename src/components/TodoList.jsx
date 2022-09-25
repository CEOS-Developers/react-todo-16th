import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = ({ todoList, setTodoList, Delete, Toggle }) => {
  const todosList = todoList.filter((todo) => todo.Checked === false);
  const donesList = todoList.filter((todo) => todo.Checked === true);

  return (
    <AllList>
      <Line />
      <ListTitle>To Do ({todosList.length})</ListTitle>
      <List done={false}>
        {todosList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
            Delete={Delete}
            Toggle={Toggle}
          />
        ))}
      </List>
      <Line />
      <ListTitle>Done ({donesList.length})</ListTitle>
      <List done={true}>
        {donesList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
            Delete={Delete}
            Toggle={Toggle}
          />
        ))}
      </List>
    </AllList>
  );
};

const AllList = styled.div`
  margin-top: 20px;
`;

const ListTitle = styled.span`
  font-size: 20px;
  background-color: pink;
  border-radius: 15px;
  margin-top: 20px;
  padding: 10px;
`;

const List = styled.ul`
  height: 150px;
  overflow: auto;

  ${(props) =>
    props.done &&
    `
      text-decoration: line-through;
      color: gray;
    `}
`;

const Line = styled.hr`
  border: 0px;
  border-top: 4px dashed pink;
  margin-bottom: 25px;
`;

export default TodoList;
