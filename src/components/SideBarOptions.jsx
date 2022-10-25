import React from 'react'
import styled from 'styled-components'

function SideBarOptions({ Icon, title, addChannelOption }) {
    return (
        <SideBarOptionsContainer>
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