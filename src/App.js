import styled, { createGlobalStyle } from 'styled-components';
import PostForm from './components/Post';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: powderblue;
    font-family: 'SEBANG_Gothic_Bold';
  }

  @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;

    hr {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 500px;
  height: 700px;
  border: 10px black;
  border-radius: 7%;
  background-color: white;
  box-shadow: 1px 1px 3px 1px #dadce0;
  line-height: 1;
  margin: auto;
`;

const Header = styled.h1`
  flex: 5;
  align-self: center;
`;

const Container = styled.ul`
  flex: 30;
  overflow: auto;
  margin: 0;
  padding-left: 0;

  li {
    list-style-type: none;
  }
`;

const Text = styled.span`
  padding-left: 30px;
`;

function App() {
  const [doing, setDoing] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Box>
        <Header>My To Do List ^^</Header>
        <PostForm />
        <hr />
        <Container id="Doing">
          <Text id="DoingText">Doing</Text>
        </Container>
        <hr />
        <Container id="Done">
          <Text id="DoneText">Done</Text>
        </Container>
      </Box>
    </>
  );
}

export default App;
