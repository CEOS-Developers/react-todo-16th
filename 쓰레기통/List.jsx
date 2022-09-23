import styled from 'styled-components';
import { useState } from 'react';

const Li = styled.li`
  margin-left: 50px;
  margin-top: 10px;
`;

const Btn = styled.button`
  margin-left: 10px;
`;

const List = ({ id, value, list, index, deleteList }) => {
  const [isDone, setIsDone] = useState(false);
  if (id == 'done') setIsDone(true);

  const Delete = (e) => {
    const deleteItem = e.target.parentElement.id;
    deleteList(deleteItem);
  };
  return (
    <Li id={index}>
      {value}
      {isDone ? <Btn>⬆️</Btn> : <Btn id="check">✅</Btn>}
      <Btn id="delete" onClick={Delete}>
        ❌
      </Btn>
    </Li>
  );
};

export default List;
