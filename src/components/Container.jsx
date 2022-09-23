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

const Container = ({ id }) => {
  return (
    <ListContainer>
      <Title>{id}</Title>
    </ListContainer>
  );
};

export default Container;
