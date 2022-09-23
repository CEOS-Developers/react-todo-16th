import { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
  flex: 30;
  overflow: auto;
  margin: 0;
  padding-left: 0;
  overflow: auto;

  li {
    list-style-type: none;
  }
`;

const Title = styled.span`
  padding-left: 30px;
`;

const Done = ({ id }) => {
  const [cnt, setCnt] = useState(0);
  return (
    <ListContainer>
      <Title>
        {id} ({cnt})
      </Title>
    </ListContainer>
  );
};

export default Done;
