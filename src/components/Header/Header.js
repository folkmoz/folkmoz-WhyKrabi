import React from "react";
import Link from "next/link";
import styled from 'styled-components'

import {AppBar, Grid, Toolbar, Typography} from '@material-ui/core'
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

    const { offset, isScroll } = useScroll()



    return (
        <Header active={isScroll ? true : undefined}>
            <Toolbar className={'h-full'}>
                <Nav
                    className={'px-5 flex justify-between w-full'}
                    active={isScroll ? true : undefined }
                >
                    <div className={'brand w-1/2'} >
                        <Link href={'/'}>
                            <a>
                                <em>w</em>
                                hykrabi
                            </a>
                        </Link>
                    </div>
                    <div className={'menu w-1/2'}>
                        <ul className={'flex sm:flex-col md:flex-row justify-around items-center h-full'}>
                            {
                                menu.map(e => (
                                    <li
                                        key={e}
                                        className={`cursor-pointer ${isScroll ? 'text-black' : 'text-white'} p-2 hover:text-yellow-400`}><span>{e}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </Nav>
            </Toolbar>
        </Header>
    )
}
