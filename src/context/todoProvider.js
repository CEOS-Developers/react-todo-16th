import React, { useReducer } from "react";

export const TodoContext = React.createContext();

const initialState = {
  item: {
    id: new Date().toString,
    text: "",
    isDone: false,
  },
  itemList: JSON.parse(localStorage.getItem("itemList")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TODO":
      return {
        item: action.value,
        itemList: [...state.itemList, action.value],
      };
    case "REMOVE":
      return {
        ...state,
        itemList: state.itemList.filter((item) => item.id !== action.value),
      };
    case "TOGGLE":
      const reaminList = state.itemList.filter(
        (item) => item.id !== action.value
      );
      const toggleItem = state.itemList.find(
        (item) => item.id === action.value
      );
      toggleItem.isDone = toggleItem.isDone ? false : true;
      return {
        ...state,
        itemList: [...reaminList, toggleItem],
      };
    default:
      throw new Error();
  }
};

const TodoProvider = ({ children }) => {
  const [state, todoDispatch] = useReducer(reducer, initialState);
  localStorage.setItem("itemList", JSON.stringify(state.itemList));
  console.log("provider", state.itemList);

  return (
    <TodoContext.Provider
      value={{
        itemList: state.itemList,
        todoDispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const TodoConsumer = TodoContext.Consumer;

export default TodoProvider;
