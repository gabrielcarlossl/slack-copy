import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { addDoc, collection} from 'firebase/firestore'

function SideBarOptions({ Icon, title, addChannelOption }) {

    const addChannel =  async () => {
        const channelName = prompt('Por favor diga o nome do canal:')

        if (channelName) {
            await addDoc(collection(db, 'rooms'),{
                name: channelName,
            })
        }
    }

    const selectChannel = () => {}

    return (
        <SideBarOptionsContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize='small' style={{ padding: 10 }}></Icon>}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SideBarOptionChannel>

                    <span>#</span> {title}

                </SideBarOptionChannel>
            )}

        </SideBarOptionsContainer>
    )
}

export default SideBarOptions

const SideBarOptionsContainer = styled.div`

display:flex;
align-items: center;
font-size: 12px;
padding-left: 2px;
cursor: pointer;

:hover{
    opacity: 0.9;
    background-color: var(--slack-color-border);
}

> h3 {
    font-weight: 500;
}

> h3 > span {
    padding: 15px;
}
`

const SideBarOptionChannel = styled.div`


`