import React from "react";
import Link from "next/link";
import styled from 'styled-components'

import { Squash as Hamburger } from "hamburger-react";
import {Collapse} from "@material-ui/core";

import {Toolbar, useMediaQuery} from '@material-ui/core'
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
    {
        header: 'หน้าแรก',
        id: 'top'
    },
    {
        header: 'ทำไมต้องมากระบี่',
        id: 'whykrabi'
    },
    {
        header: 'บล็อก',
        id: 'tabs'
    },
    {
        header: 'แอพลิเคชั่น',
        id: 'app'
    },
    {
        header: 'ผู้จัดทำ',
    }
]

export const Navbar = ({ func }) => {

    const [isCollapse, setIsCollapse] = React.useState(false)
    const [currentMenu, setCurrentMenu] = React.useState(0)

    const { isScroll } = useScroll()

    const maxWidth768px = useMediaQuery('(max-width: 768px)')


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
                    <Collapse in={maxWidth768px ? isCollapse : true}>
                    <div className={`menu w-full  justify-end md:mr-4 md:flex`}>
                        <ul className={'flex flex-col md:flex-row justify-around items-center h-full '}>
                            {
                                menu.map((e, index) => (
                                    index !== menu.length-1 ? (
                                        <li
                                            key={index}
                                            className={`cursor-default md:cursor-pointer ${!isScroll ? 'text-white': currentMenu === index ? 'text-yellow-400' : 'text-black' } p-2 mx-2 hover:text-yellow-400`}
                                            onClick={()=>func(e.id, setCurrentMenu(index))}
                                        >
                                            <span>{e.header}</span>
                                        </li>
                                    ) : (
                                        <Link href={'/team'} key={index}>
                                            <a className={'md:cursor-pointer cursor-default'}>
                                                <li
                                                    className={`${isScroll ? 'text-black' : 'text-white'} p-2 mx-2 hover:text-yellow-400`}>
                                                    <span>{e.header}</span>
                                                </li>
                                            </a>
                                        </Link>
                                )
                                ))
                            }
                        </ul>
                    </div>
                </Collapse>
                </Nav>
            </Toolbar>
        </Header>
    )
}
