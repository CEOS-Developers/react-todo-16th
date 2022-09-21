import styled, { css } from 'styled-components';

const Item = (props) => {
  return (
        <>
          <ItemSection>
        <h2>{props.title}</h2>
        <ItemList></ItemList>
          </ItemSection>
        </>
    );
}


const ItemSection = styled.section`
  flex: 0.5;
  border-top: 1px solid rgb(213, 213, 213);
`;

const ItemList = styled.ul`
  cursor: pointer;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  overflow: auto;
`;

export default Item;