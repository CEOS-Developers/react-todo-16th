import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Input=({addTask})=>{

    const [value,setValue]=useState('');

      const onSubmit = (e)=>{
          addTask(value);
          e.preventDefault();

          setValue(''); // value 값 초기화
    }

    return(
        <form style={{flexDirection:'row'}} onSubmit={onSubmit}>
            <InputBox placeholder="할 일을 입력하세요" onChange={e=>setValue(e.target.value)} value={value} />
            <InputButton type="submit">+</InputButton>
        </form>
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