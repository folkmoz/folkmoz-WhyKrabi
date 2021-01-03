import React from 'react';

import Section1 from "../components/page.home/Section-1";
import Section2 from "../components/page.home/Section-2";
import Section3 from "../components/page.home/Section-3";
import Section4 from "../components/page.home/Section-4";
import {Navbar} from "../components/Header/Header";





const Home = () => {

    const scrollCurrentSection = React.useCallback( (id)=> {
        document.querySelector(`section[data-scroll="${id}"]`).scrollIntoView({ behavior: "smooth" })

    },[])


    return (
        <>
            <Navbar func={scrollCurrentSection} path={'/'}/>
            <Section1 id={'top'} />
            <Section2 id={'whykrabi'} />
            <Section3 id={'tabs'}/>
            <Section4 id={'app'}/>
        </>
    );
}

export default Home;
