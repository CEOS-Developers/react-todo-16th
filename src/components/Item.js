import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/todoProvider";

const Item = (props) => {
  const { itemList } = useContext(TodoContext);
  const renderList = itemList.filter((item) => item.isDone === props.done);
  console.log(renderList);

  return (
    <ItemSection>
      <h2>{props.title}</h2>
      <ItemList>
        {renderList.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ItemList>
    </ItemSection>
  );
};

const TodoItem = (props) => {
  const { todoDispatch } = useContext(TodoContext);

  const handleTodoItemClick = (item) => {
    item.isDone = item.isDone ? false : true;
    todoDispatch({ type: "TOGGLE", value: item.id });
  };

  return (
    <li>
      <span onClick={() => handleTodoItemClick(props.item)}>
        {props.item.text}
      </span>
      <button
        onClick={() => todoDispatch({ type: "REMOVE", value: props.item.id })}
      >
        🧹
      </button>
    </li>
  );
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
