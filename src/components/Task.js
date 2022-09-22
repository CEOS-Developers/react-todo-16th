import React from "react";
import styled from "styled-components";
import { TaskContainer } from "../ContainerStyled";

const TodoTask=({task})=>{

    return(
        <TaskContainer>
            <Image src='img/circle.png' />
            <Text> {task} </Text>
            <Image src='img/delete.png'/>
        </TaskContainer>
    )
}

const DoneTask=({task})=>{
    return(
        <TaskContainer color="#ADB0AD">
            <Image src='img/checkmark.png' />
            <Text>{task}</Text>
            <Image src='img/delete.png'/>
        </TaskContainer>
    )
}

const Image=styled.img`
    width: 16px;
    height: 16px;
    margin-bottom:7px;
`

const Text=styled.div`
    margin-left:10px;
`
export  {TodoTask,DoneTask};