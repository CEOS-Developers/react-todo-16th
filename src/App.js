import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./components/Input";
import { DoneTask, TodoTask } from "./components/Task";
import {
  Container,
  ListContainer,
  ListHeaderContainer,
  TaskListContainer,
} from "./ContainerStyled";

const App = () => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [tasks, setTasks] = useState([]);

  const nextId = useRef(1);
  const addTask = (text) => {
    const task = {
      id: nextId.current,
      text,
      done: false,
    };
    setTasks(tasks.concat(task));
    nextId.current += 1;
  };

  const removeTask = (i) => {
    setTasks(tasks.filter((task) => task.id !== i));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  //남은 할 일 개수
  let todoTaskNum = 0;
  tasks.map((task) => (task.done ? todoTaskNum : todoTaskNum++));

  //완료 비율
  let completedRate = 0;
  if (tasks.length != 0) {
    completedRate = parseInt(
      ((tasks.length - todoTaskNum) / tasks.length) * 100
    );
  }

  const [emoji, setEmoji] = useState("");

  const _setEmoji = () => {
    if (completedRate >= 80) {
      setEmoji("😍");
    } else if (completedRate >= 60) {
      setEmoji("😚");
    } else if (completedRate >= 40) {
      setEmoji("🙂");
    } else if (completedRate >= 20) {
      setEmoji("🤔");
    } else if (completedRate >= 0) {
      setEmoji("😔");
    }
  };

  useEffect(() => {
    _setEmoji();
  }, [completedRate]);

  return (
    <>
      <Container>
        {/* 날짜 및 제목 */}
        <Header color="grey" size="10px" marginBottom="0px" bold="normal">
          {new Date().getFullYear() +
            "년 " +
            (new Date().getMonth() + 1) +
            "월 " +
            new Date().getDate() +
            "일 " +
            week[new Date().getDay()] +
            "요일"}
        </Header>
        <Header>To Do List</Header>

        {/* 인풋박스 */}
        <Input addTask={addTask} />

        {/* 할일 목록  */}
        <ListContainer>
          <ListHeaderContainer>남은 할 일 {todoTaskNum}개</ListHeaderContainer>
          <TaskListContainer>
            {tasks.map((i) =>
              i.done ? (
                <></>
              ) : (
                <TodoTask
                  task={i}
                  removeTask={removeTask}
                  toggleTask={toggleTask}
                />
              )
            )}
          </TaskListContainer>
        </ListContainer>

        {/*  목록 */}
        <ListContainer>
          <ListHeaderContainer color="grey">
            완료한 일 {tasks.length - todoTaskNum}개
          </ListHeaderContainer>
          <TaskListContainer>
            {tasks.map((i) =>
              i.done ? (
                <DoneTask
                  task={i}
                  removeTask={removeTask}
                  toggleTask={toggleTask}
                />
              ) : (
                <></>
              )
            )}
          </TaskListContainer>
        </ListContainer>
      </Container>

      <CompletedRate>
        completed {completedRate} % {emoji}
      </CompletedRate>
    </>
  );
};

const Header = styled.div`
  color: ${(props) => props.color || "#384228"};
  text-align: center;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: ${(props) => props.marginBottom || "10px"};
  font-size: ${(props) => props.size || "20px"};
  font-weight: ${(props) => props.bold || "bold"};
`;

const CompletedRate = styled.div`
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: 900;
`;

export default App;
