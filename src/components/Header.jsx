import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

export default function Header() {
  return (
    <HeaderContainer>

        {/* header left */}
        <HeaderLeft>
            <HeaderAvatar 
            // ADD onclick
            
            ></HeaderAvatar>
            <AccessTimeIcon></AccessTimeIcon>
        </HeaderLeft>
        
        {/* header search */}

        {/* header right */}

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

const HeaderAvatar = styled(Avatar)`
    
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }

`