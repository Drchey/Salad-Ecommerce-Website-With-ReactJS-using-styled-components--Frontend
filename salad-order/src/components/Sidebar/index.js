import React from 'react';
import {SidebarContainer,
        Icon, CloseIcon,
        SidebarMenu,SidebarLink,
        SideBtnWrap,SidebarRoute} from './SidebarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Choose Salad</SidebarLink>
                <SidebarLink to="/">Fruit Salad</SidebarLink>
                <SidebarLink to="/">Family Order</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
            <SidebarRoute to='/'>Place Order</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar;
