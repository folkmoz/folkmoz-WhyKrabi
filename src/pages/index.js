import React from 'react';
import styled from "styled-components";
import {useScroll} from "../hooks/useScroll";
import Section2 from "../components/page.home/Section-2";
import Section3 from "../components/page.home/Section-3";

const Parallax = styled.div`
  width: 100%;
  height: 100vh;
  background: url("./images/home/whykrabi-bg.jpg") center/cover no-repeat;
  vertical-align: middle;
  padding-top: 35vh;
`



const Home = () => {

    const { offset } = useScroll()

    return (
        <>
            <section>
                <Parallax style={{backgroundPosition: `center calc(50% + ${offset * 0.5}px)`}} />
            </section>
            <Section2 />
            <Section3 />
        </>
    );
}

export default Home;
