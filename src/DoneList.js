import React from 'react';
import styled from 'styled-components';

const DoneListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    padding:3%;
`

const DoneList = () => {
    return (
        <div>
            <DoneListBlock>
                DoneList
            </DoneListBlock>
        </div>
    );
};

export default DoneList;