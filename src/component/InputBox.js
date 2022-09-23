import React from "react";

const InputBox = ({ children }) => {
  return (
    <div class="box">
      <form id="todo-form">
        <h2>☑️ 투두리스트 ☑️ </h2>
        <input
          type="text"
          placeholder="할 일을 작성하세요"
          required
          maxlength="30"
        />
        <button type="submit">➕</button>
      </form>
    </div>
  );
};

export default InputBox;
