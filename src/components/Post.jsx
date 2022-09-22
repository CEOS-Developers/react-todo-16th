import styled from 'styled-components';
import { useState } from 'react';
import App from '../App';

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

const PostForm = () => {
  const [input, setInput] = useState('');
  //   const [adding, setAdding] = useState('');
  const addToDo = (e) => {
    e.preventDefault();
    input.trim();
    if (input) {
      console.log(input); //여기에 input을 Doing List로 보내주는 코드
      setInput('');
    } else {
      alert('Check plz :)');
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <Post onSubmit={addToDo}>
      <input
        type="text"
        placeholder="Write Here!"
        id="addInput"
        value={input}
        onChange={onChange}
      />
      <button type="submit" id="addBtn">
        add
      </button>
    </Post>
  );
};

export default PostForm;
