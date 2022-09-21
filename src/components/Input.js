import React from "react";
import styled from "styled-components";

const Input=()=>{
    return(
        <div style={{flexDirection:'row'}}>
            <InputBox/>
            <InputButton>+</InputButton>
        </div>
    )
}

const InputBox=styled.input`
    height: 25px;
    margin-bottom: 10px;
    width: 270px;
    border-radius: 12rem;
    border-color: rgb(210, 210, 210);
    padding-left: 10px;
    margin-left:10px
`;

const InputButton=styled.button`
    width: 50px;
    height: 31px;
    border-radius: 100rem; 
    border-color: #449a80;
    background-color: #449a80;
    font-size: 12px;
    color:white;
    margin-left:6px;
`;

export default Input;