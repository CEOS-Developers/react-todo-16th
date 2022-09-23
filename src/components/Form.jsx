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

const Form = ({ getContent }) => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input) {
      getContent(input);
      setInput('');
    } else {
      alert('Check Plz :)');
    }
  };
  return (
    <Post onSubmit={onSubmit}>
      <input
        id="addInput"
        type="text"
        value={input}
        placeholder="Write Here!"
        onChange={onChange}
      />
      <button type="submit" id="addBtn">
        add
      </button>
    </Post>
  );
};

export default Form;
