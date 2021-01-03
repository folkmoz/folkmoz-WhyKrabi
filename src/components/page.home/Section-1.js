import React from 'react';
import styled from "styled-components";

import {useScroll} from "../../hooks/useScroll";

const Parallax = styled.section`
  width: 100%;
  height: 100vh;
  background: url("./images/home/whykrabi-bg.jpg") center/cover no-repeat;
  vertical-align: middle;
  padding-top: 35vh;
`

const Section1 = ({ id }) => {

    const { offset } = useScroll()


    return (
        <>
            <Parallax data-scroll={id} style={{backgroundPosition: `center calc(50% + ${offset * 0.5}px)`}} />
        </>
    );
}

export default Section1;
