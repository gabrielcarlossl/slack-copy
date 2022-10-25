import React from 'react'

import styled from 'styled-components'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SideBarOptions from './SideBarOptions'

import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookMarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'


function SideBar() {
    return (
        <SideBarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Gabriel Carlos</h2>
                    <h3>
                        <FiberManualRecordIcon></FiberManualRecordIcon>
                        Gabriel Carlos
                    </h3>
                </SidebarInfo>
                <CreateIcon></CreateIcon>
            </SidebarHeader>

            <SideBarOptions Icon={InsertCommentIcon} title='Tópicos'></SideBarOptions>
            <SideBarOptions Icon={InboxIcon} title='Menções e reações'></SideBarOptions>
            <SideBarOptions Icon={DraftsIcon} title='Itens Salvos'></SideBarOptions>
            <SideBarOptions Icon={BookMarkBorderIcon} title='Todos os canais'></SideBarOptions>
            <SideBarOptions Icon={PeopleAltIcon} title='Pessoas e Grupos de usuários'></SideBarOptions>
            <SideBarOptions Icon={AppsIcon} title='Apps'></SideBarOptions>
            <SideBarOptions Icon={FileCopyIcon} title='Arquivos'></SideBarOptions>
            <SideBarOptions Icon={ExpandLessIcon} title='Mostrar menos'></SideBarOptions>
            <hr />
            <SideBarOptions Icon={ExpandMoreIcon} title='Canais'></SideBarOptions>
            <hr />
            <SideBarOptions Icon={AddIcon} addChannelOption title='Adicionar Canal'></SideBarOptions>


        </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color: var(--slack-color-dark);
    color: white;
    flex: 0.3;
    border-top: 1px solid var(--slack-color-border);
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid var(--slack-color-border); 
    }
`
const SidebarHeader = styled.div`

    display: flex;
    border-bottom: 1px solid var(--slack-color-border);
    padding-bottom: 10px;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: var(--slack-color-border);
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }

`
const SidebarInfo = styled.div`

    flex:1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`

