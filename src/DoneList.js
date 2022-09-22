import React from 'react';
import styled from 'styled-components';
import DoneItem from './DoneItem';

const DoneListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    padding:3%;
    overflow-x: scroll;
`

const DoneList = (props) => {
    const {handleToToDo,handleRemove,dones}=props;
    console.log(dones);
    return (
        <div>
            <DoneListBlock>
                DONE
                ({dones.length})
                {
                    dones.map((done) => (
                        <DoneItem
                        done={done}
                        key={done.id}
                        handleToToDo={handleToToDo}
                        handleRemove={handleRemove}
                        />
                    ))
                }
            </DoneListBlock>
        </div>
    );
};

export default DoneList;