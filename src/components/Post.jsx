import styled from 'styled-components';

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
  return (
    <Post>
      <input type="text" placeholder="Write Here!" id="addInput" />
      <button type="submit" id="addBtn">
        add
      </button>
    </Post>
  );
};

export default PostForm;
