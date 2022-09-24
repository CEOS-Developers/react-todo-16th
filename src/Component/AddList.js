import React from 'react';
import styled from 'styled-components';

//인풋 박스 함수
function AddList({ input, onChange, onCreate }) {
  return (
    <StyledAddList>
      <Styledh2> ToDo List</Styledh2>
      <StyledInput
        className="input"
        name="input"
        placeholder="할 일 입력하시오"
        onChange={onChange}
        value={input}
      />
      <StyledButton onClick={onCreate}>+</StyledButton>
    </StyledAddList>
  );
}
//styled컴포넌트
const StyledAddList = styled.div`
  text-align: center;
  font-weight: bolder;
  font-family: 'Jua', sans-serif;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
`;

const StyledInput = styled.input`
  border: 1px solid lightgrey;
  border-radius: 10px;
  font-family: 'Jua', sans-serif;
  padding: 15px;
  width: 230px;
`;

const StyledButton = styled.button`
  margin-left: 5px;
  background: none;
  border-radius: 60%;
  font-size: 23px;
  border-color: pink;
`;

const Styledh2 = styled.h2`
  margin-left: 130px;
  display: flex;
  flex-direction: row;
  text-align: center;
  color: pink;
`;

export default AddList;
