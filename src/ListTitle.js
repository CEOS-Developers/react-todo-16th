import React from 'react';
import styled from 'styled-components';

const ListTitleBlock = styled.div`
    background: white;
    width: 300px;
    height: 70px;
    padding:3%;
    border-bottom-style: dashed;
`
const ListTitle = () => {
    return (
        <div>
            <ListTitleBlock>
                ListTitle
                <form>
                    <input
                    type="text"
                    placeholder='할 일을 입력하세요'
                    />
                    <button type='submit'>+</button>
                </form>
            </ListTitleBlock>
        </div>
    );
};

export default ListTitle;