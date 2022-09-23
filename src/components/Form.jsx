import styled from 'styled-components';
import { useState } from 'react';

const Post = styled.form`
  flex: 5;
  align-self: center;

  #addInput {
    width: 300px;
    height: 40px;
  }

  #addBtn {
    width: 40px;
    height: 40px;
  }
`;

const Form = () => {
  return (
    <Post>
      <input id="addInput" type="text" placeholder="Write Here!" />
      <button type="submit" id="addBtn">
        add
      </button>
    </Post>
  );
};

export default Form;
