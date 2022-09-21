import React from "react";
import styled from "styled-components";
import Input from "./components/Input";
import { DoneTask, TodoTask } from "./components/Task";
import { Container ,ListContainer,ListHeaderContainer} from "./ContainerStyled";

const App=()=>{

  return(
    <Container>

      {/* 날짜 및 제목 */}
        <Header color="grey" size="10px" marginBottom='0px' bold='normal'>2022년 9월 20일 화요일</Header>
        <Header>To Do List</Header>
        
      {/* 인풋박스 */}
        <Input />

      {/* 할일 목록  */}
      <ListContainer>
        <ListHeaderContainer>남은 할 일</ListHeaderContainer>
        <TodoTask/>
      </ListContainer>

      {/* 남은 할 일 목록 */}
      <ListContainer>
        <ListHeaderContainer color="grey">완료한 일</ListHeaderContainer>
        <DoneTask/>
      </ListContainer>

    </Container>
  )
}

const Header=styled.div`
  color: ${props=>props.color||'#384228'};
  text-align: center;
  padding: 5px;
  margin-top: 5px;
  margin-bottom:${props=>props.marginBottom || '10px'};
  font-size: ${props=>props.size||'20px'};
  font-weight: ${props=>props.bold||'bold'};
`

export default App;
