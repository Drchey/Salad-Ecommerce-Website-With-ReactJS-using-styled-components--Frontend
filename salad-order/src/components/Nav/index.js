import React from 'react';
import {Nav,NavLink,NavIcon,Bars } from './NavElements';


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Salad </NavLink> 
                <NavIcon onClick ={toggle}>
                   
                    <Bars />
                </NavIcon>
            </Nav>     
        </>
    )
}

export default Navbar;
