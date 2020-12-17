import React from "react";
import Link from "next/link";
import styled from 'styled-components'

import { Squash as Hamburger } from "hamburger-react";

import {Toolbar} from '@material-ui/core'
import {useScroll} from "../../hooks/useScroll";

const Header = styled.header`
    background: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    transition: .2s all;
    z-index: 1905;
    
  
    ${({active}) => active && `
        background: #fff;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
    `}
`

const Nav = styled.div `
    
        
      .brand {
        color: #fff;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 25px;
        transition: .2s linear;
        scroll-behavior: smooth;
            ${({active}) => active && `
            color: #000;
        `}

      em {
        font-style: normal;
        color: #f7c552;  
        font-size: 32px;
      }
      
        
      
`

const menu = [
    'หน้าแรก','ทำไมต้องมากระบี่','บล็อก','แอพลิเคชั่น','ผู้จัดทำ'
]

export const Navbar = () => {

    const [isCollapse, setIsCollapse] = React.useState()

    const { isScroll } = useScroll()


    return (
        <Header active={isScroll ? true : undefined}>
            <Toolbar className={'h-full'}>
                <Nav
                    className={'px-5 flex justify-between items-center w-full flex-col md:flex-row'}
                    active={isScroll ? true : undefined }
                >
                    <div className={'brand w-full flex justify-between md:w-1/3'} >
                        <Link href={'/'}>
                            <a>
                                <em>w</em>
                                hykrabi
                            </a>
                        </Link>
                        <span className={'md:d-none'}>
                            <Hamburger
                                hideOutline
                                size={25}
                                color={'#f7c552'}
                                toggle={setIsCollapse}
                                toggled={isCollapse}
                            />
                        </span>
                    </div>
                    <div className={`menu w-full  justify-end duration-200 transition-all ${isCollapse ? 'block visible' : 'd-none'} md:w-4/6 md:mr-4 md:flex`}>
                        <ul className={'flex sm:flex-col md:flex-row justify-around items-center h-full '}>
                            {
                                menu.map(e => (
                                    <li
                                        key={e}
                                        className={`md:cursor-pointer ${isScroll ? 'text-black' : 'text-white'} p-2 mx-2 hover:text-yellow-400`}><span>{e}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </Nav>
            </Toolbar>
        </Header>
    )
}
