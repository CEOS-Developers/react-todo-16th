import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Box } from "./StyleComponent";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  height: 50px;
  width: 250px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: none;
`;

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
    <Box>
      <Form onSubmit={onSubmit}>
        <h2>☑️ 투두리스트 ☑️ </h2>
        <Input
          type="text"
          placeholder="할 일을 작성하세요"
          required
          maxLength={30}
          value={value}
          onChange={onChange}
        />
      </Form>
    </Box>
  );
};

export default InputBox;
