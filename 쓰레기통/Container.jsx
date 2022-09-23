import styled from 'styled-components';
import List from './List';

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

const Container = ({ id, cnt, list, getDeleteId }) => {
  const getDelete = (id) => {
    getDeleteId(id);
  };
  return (
    <ListContainer>
      <Title>
        {id} ({cnt})
      </Title>
      {list.map((content, index) => (
        <List
          id={id}
          value={content}
          key={index}
          list={list}
          index={index}
          deleteList={getDelete}
        />
      ))}
    </ListContainer>
  );
};

export default Container;
