import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  width: 360px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  border-radius: 9px;
  padding: 15px;
  margin: auto;
`;

const ListContainer = styled.div`
  height: 230px;
  margin-bottom: 10px;
`;

const ListHeaderContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.color || "#449a80"};
  padding-block: 10px;
  font-size: 15px;
  margin: 5px;
  font-weight: 700;
  color: ${(props) => props.color || "#449a80"};
`;

const TaskContainer = styled.div`
  font-size: 13px;
  margin-left: 10px;
  color: ${(props) => props.color || "black"};
  padding: 3px;
  display: flex;
  flex-direction: "row";
`;

const TaskListContainer = styled.div`
  overflow-y: auto;
  height: 190px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export {
  Container,
  ListContainer,
  ListHeaderContainer,
  TaskContainer,
  TaskListContainer,
};
