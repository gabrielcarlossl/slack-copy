import React from 'react'

import styled from 'styled-components'

import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'


export default function Header() {

    const [user, loading] = useAuthState(auth)


  return (
    <HeaderContainer>

        {/* header left */}

        <HeaderLeft>
            <HeaderAvatar
                onClick={()=> auth.signOut()}
                alt={user?.displayName}         
                src={user?.photoURL}
            ></HeaderAvatar>
            <AccessTimeIcon></AccessTimeIcon>
        </HeaderLeft>
        
        {/* header search */}

        <HeaderSearch>
            <SearchIcon></SearchIcon>
            <input placeholder='Pesquisar 7ennoxChannel' />
        </HeaderSearch>

        {/* header right */}

        <HeaderRight>
            <HelpOutlineIcon></HelpOutlineIcon>
        </HeaderRight>

    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0; 
    background-color: var(--slack-color-dark);
    color: white;

`

const HeaderLeft = styled.div`
    
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }

`

const HeaderRight = styled.div`

flex: 0.3;
display: flex;
align-items: flex-end;

> .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }

`

const HeaderAvatar = styled(Avatar)`
    
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }

`

const HeaderSearch = styled.div`

flex:0.4;
opacity: 1;
border-radius: 6px;
background-color: #252525;
display: flex;
padding: 0 50px;
color: gray;
border: 1px gray solid;

> input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width:30vw;
    outline: 0;
    color: white;
}

`

