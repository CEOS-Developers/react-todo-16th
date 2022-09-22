import React from 'react';
import styled from 'styled-components';
import DoneItem from './DoneItem';

const DoneListBlock = styled.div`
    background: white;
    width: 300px;
    height: 250px;
    padding:3%;
`

const DoneList = (props) => {
    const {handleToToDo,dones}=props;
    console.log(dones);
    return (
        <div>
            <DoneListBlock>
                DONE
                {
                    dones.map((done) => (
                        <DoneItem
                        done={done}
                        key={done.id}
                        handleToToDo={handleToToDo}
                        />
                    ))
                }
            </DoneListBlock>
        </div>
    );
};

export default DoneList;