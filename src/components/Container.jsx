import styled from 'styled-components';

const ListContainer = styled.ul`
  flex: 30;
  overflow: auto;
  margin: 0;
  padding-left: 0;

  li {
    list-style-type: none;
  }
`;

const Title = styled.span`
  padding-left: 30px;
`;

const Container = ({ id, cnt }) => {
  return (
    <ListContainer>
      <Title>
        {id} ({cnt})
      </Title>
    </ListContainer>
  );
};

export default Container;
