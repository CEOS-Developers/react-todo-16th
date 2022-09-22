import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: powderblue;
    font-family: 'SEBANG_Gothic_Bold';
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Box></Box>
    </>
  );
}

export default App;
