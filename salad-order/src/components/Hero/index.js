import React,{useState} from 'react';
import Navbar from '../Nav';
import SideBar from '../Sidebar'
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP, HeroBtn} from './HeroElements';

const Hero = () => {

    const [isOpen, setIsOpen] =useState(false);
    const toggle=()=>
    {
         setIsOpen(!(isOpen)); 
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        favour a healthy diet
                    </HeroH1>
                    <HeroP>Fresh delivery</HeroP>
                    <HeroBtn>Order Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
