import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import Input from "./components/Input";
import { DoneTask, TodoTask } from "./components/Task";
import { Container ,ListContainer,ListHeaderContainer} from "./ContainerStyled";

const App=()=>{

  const week=['월','화','수','목','금','토','일'];

  const [tasks,setTasks]=useState([]);

  const nextId=useRef(1);
  const addTask=(text)=>{
      const todo= {
        id:nextId.current,
        text,
        done:false,
      };
      setTasks(tasks.concat(todo));
      nextId.current+=1;
  }

  const removeTask=(i)=>{
    setTasks(tasks.filter(task => task.id !== i));
  }

  const toggleTask=(id)=>{
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task ),
    );
  }

  let todoTaskNum=0;
  tasks.map(task=>task.done? todoTaskNum : todoTaskNum++);

  return(
    <Container>

      {/* 날짜 및 제목 */}
        <Header color="grey" size="10px" marginBottom='0px' bold='normal'> 
          {new Date().getFullYear()+'년 '+(new Date().getMonth()+1)+'월 '+new Date().getDate()+'일 '+week[new Date().getDay()-1]+'요일'} </Header>
        <Header>To Do List</Header>
        
      {/* 인풋박스 */}
        <Input addTask={addTask}/>

      {/* 할일 목록  */}
      <ListContainer>
        <ListHeaderContainer>남은 할 일 {todoTaskNum}개</ListHeaderContainer>
        { tasks.map((i)=>(
          i.done ? <></> :<TodoTask task={i} removeTask={removeTask} toggleTask={toggleTask} /> )
        )}
      </ListContainer>

      {/* 남은 할 일 목록 */}
      <ListContainer>
        <ListHeaderContainer color="grey">완료한 일 {tasks.length-todoTaskNum}개</ListHeaderContainer>
        { tasks.map((i)=>(
          i.done ? <DoneTask task={i} removeTask={removeTask} toggleTask={toggleTask}/>: <></> )
        ) }
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
