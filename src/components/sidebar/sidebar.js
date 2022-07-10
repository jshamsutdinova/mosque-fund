import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarLink,
         SidebarMenu, SidebarWrapper } from './sidebar-elements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='documents' onClick={toggle}>Документы</SidebarLink>
                    <SidebarLink to='plan' onClick={toggle}>План строительства</SidebarLink>
                    <SidebarLink to='payInfo' onClick={toggle}>Реквизиты</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar;