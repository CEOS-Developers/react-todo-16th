import React from "react";
import styled from "styled-components";
import { TaskContainer } from "../ContainerStyled";

const TodoTask=()=>{
    return(
        <TaskContainer>
            <div> To do List 만들기</div>
            <Image src='img/delete.png'/>
        </TaskContainer>
    )
}

const DoneTask=()=>{
    return(
        <TaskContainer color="#ADB0AD">
            To do List 만들기
            <Image src='img/delete.png'/>
        </TaskContainer>
    )
}

const Image=styled.img`
    width: 16px;
    height: 16px;
    margin-bottom:8px;
`
export  {TodoTask,DoneTask};