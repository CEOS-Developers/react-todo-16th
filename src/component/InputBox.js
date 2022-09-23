import React, { useCallback, useState } from "react";
import "../style.css";

const InputBox = ({ onConcat }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onConcat(value);
      setValue("");
      e.preventDefault();
    },
    [onConcat, value]
  );

  return (
    <div className="box">
      <form id="todo-form" onSubmit={onSubmit}>
        <h2>☑️ 투두리스트 ☑️ </h2>
        <input
          type="text"
          placeholder="할 일을 작성하세요"
          required
          maxLength={30}
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default InputBox;
