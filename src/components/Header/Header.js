import React from "react";
import Link from "next/link";
import styled from 'styled-components'

import { Squash as Hamburger } from "hamburger-react";
import {Collapse} from "@material-ui/core";

import {Toolbar, useMediaQuery} from '@material-ui/core'
import {useScroll} from "../../hooks/useScroll";
import {useRouter} from "next/router";

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
            ${({active}) => active && `
            color: #000;
        `}
            
      h1 {
        cursor: pointer;
              
          @media (max-width: 768px) {
              cursor: default;
          }
      }

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

export const Navbar = ({ func, path }) => {

    const [isCollapse, setIsCollapse] = React.useState(false)
    const [currentMenu, setCurrentMenu] = React.useState(0)

    const { isScroll } = useScroll()
    const router = useRouter()

    const maxWidth768px = useMediaQuery('(max-width: 768px)')

    const scrollToTop = () => {
        if (router.pathname === '/') func('top')

        else router.push('/', undefined, { shallow: true })

    }

    return (
        <Header active={isScroll ? true : undefined}>
            <Toolbar className={'h-full'}>
                <Nav
                    className={'px-5 flex justify-between items-center w-full flex-col md:flex-row'}
                    active={isScroll ? true : undefined }
                >
                    <div className={'brand w-full flex justify-between md:w-1/3'} >
                            <h1 onClick={scrollToTop}>
                                <em>w</em>
                                hykrabi
                            </h1>
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
                                path === '/' && menu.map((e, index) => (
                                    index !== menu.length-1 ? (
                                        <li
                                            key={index}
                                            className={`cursor-default md:cursor-pointer ${!isScroll ? 'text-white': currentMenu === index ? 'text-yellow-400' : 'text-black' } p-2 mx-2 hover:text-yellow-400`}
                                            onClick={()=>func(e.id, setCurrentMenu(index))}
                                        >
                                            <span>{e.header}</span>
                                        </li>
                                    ) : (
                                        <li
                                            className={`md:cursor-pointer cursor-default ${isScroll ? 'text-black' : 'text-white'} p-2 mx-2 hover:text-yellow-400`}
                                            key={index}
                                        >
                                            <Link href={'/team'}>
                                                <a>
                                                    <span>{e.header}</span>
                                                </a>
                                            </Link>
                                        </li>

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
