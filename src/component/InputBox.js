import React from "react";
import "../style.css";

const InputBox = ({ children }) => {
  return (
    <div className="box">
      <form id="todo-form">
        <h2>☑️ 투두리스트 ☑️ </h2>
        <input
          type="text"
          placeholder="할 일을 작성하세요"
          required
          maxLength={30}
        />
      </form>
    </div>
  );
};

export default InputBox;
