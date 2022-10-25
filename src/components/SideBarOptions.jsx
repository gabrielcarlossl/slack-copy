import React from 'react'

import { useDispatch } from 'react-redux'
import { enterRoom } from '../features/appSlice'

import styled from 'styled-components'

import { db } from '../firebase'



function SideBarOptions({ Icon, title, addChannelOption,id }) {

    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = prompt('Por favor diga o nome do canal:')

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }

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

const SideBarOptionChannel = styled.h3`

    padding: 10px 0;
    font-weight: 300;

`