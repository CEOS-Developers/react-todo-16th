import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/todoProvider";

const Item = (props) => {
  return (
    <ItemSection>
      <h2>{props.title}</h2>
      <ItemList>
        <TodoItem done={props.done} />
      </ItemList>
    </ItemSection>
  );
};

const TodoItem = (props) => {
  const context = useContext(TodoContext);
  const todoList = context.itemList.filter((item) => {
    return item.isDone === props.done;
  });
  return todoList.map((item) => <li key={item.id}>{item.text}</li>);
};

const ItemSection = styled.section`
  flex: 0.5;
  border-top: 1px solid rgb(213, 213, 213);
`;

const ItemList = styled.ul`
  cursor: pointer;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  overflow: auto;
`;

export default Item;
