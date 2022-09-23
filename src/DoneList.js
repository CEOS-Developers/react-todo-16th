import React from 'react';
import styled from 'styled-components';
import DoneItem from './DoneItem';

const DoneListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    overflow-x: scroll;
`

const DoneList = (props) => {
    const {onChangeTodo,onRemove,dones}=props;
    return (
        <div>
            <DoneListBlock>
                ⭕DONE
                ({dones.length})
                {
                    dones.map((done) => (
                        <DoneItem
                        done={done}
                        key={done.id}
                        onChangeTodo={onChangeTodo}
                        onRemove={onRemove}
                        />
                    ))
                }
            </DoneListBlock>
        </div>
    );
};

export default DoneList;