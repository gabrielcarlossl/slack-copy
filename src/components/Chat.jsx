import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'
import { FiberManualRecord, InfoOutlined, StarBorderOutlined } from '@material-ui/icons'

import { selectRoomId } from '../features/app'
import { useSelector } from 'react-redux'

import ChatInput from './ChatInput'
import Message from './Message'

import { db } from '../firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'


function Chat() {

    const chatRef = useRef(null)

    const roomId = useSelector(selectRoomId);

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )

    const [roomMessages, loading] = useCollection(
        roomId &&
        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')

    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [roomId, loading])

    return (
        <ChatContainer>
            
            

            {roomDetails && roomMessages && (

            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>{`#${roomDetails?.data().name ? roomDetails?.data().name : 'Selecione um canal'}`}</strong></h4>
                        <StarBorderOutlined></StarBorderOutlined>
                    </HeaderLeft>

                    <HeaderRight>
                        <p>
                            <InfoOutlined></InfoOutlined> Detalhes
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMesseges>
                    {/* Listar todas as mensagens */}

                    {roomMessages?.docs.map(doc => {
                        const { message, timestamp, user, userImage } = doc.data()
                        return (
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            ></Message>
                        )
                    })}

                    <ChatBottom ref={chatRef}></ChatBottom>

                </ChatMesseges>

                <ChatInput 
                    chatRef={chatRef} 
                    channelName={roomDetails?.data().name} 
                    channelId={roomId} 
                    
                ></ChatInput>
            </>
            )}


        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex:0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 70px;

`

const ChatMesseges = styled.div``

const ChatBottom = styled.div`
    padding-bottom: 150px;
`


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px;
    border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`

    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }

`
const HeaderRight = styled.div`

    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px; 
    }
`