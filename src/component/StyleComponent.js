import styled, { css } from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 200px;
  overflow: hidden auto;

  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
`;

export { Box, List };
