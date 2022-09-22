import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  max-width: 25rem;
  min-height: 60vh;

  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: white;
  border-radius: 2rem;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'GmarketSansMedium';
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  ${(props) =>
    props.input &&
    css`
      height: 8rem;
      border-bottom: 1px solid lightgray;
    `}
  ${(props) =>
    props.todo &&
    css`
      height: 100%;
      overflow-y: auto;
      border-bottom: 1px solid lightgray;
    `}
  ${(props) =>
    props.done &&
    css`
      height: 100%;
      overflow-y: auto;
    `}
`;

export const Input = styled.input`
  width: 80%;
  padding: 0.5rem;

  border: 1px solid lightgrey;
  border-radius: 1rem;
`;

export const Btn = styled.button`
  padding: 0.5rem;
  cursor: pointer;
`;

export const Text = styled.span`
  cursor: pointer;
  font-family: 'GmarketSansMedium';
`;

export const DoneItem = styled.li`
  color: lightgray;
  text-decoration-line: line-through;
`;
