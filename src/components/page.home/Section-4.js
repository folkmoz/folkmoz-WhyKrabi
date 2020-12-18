import React from 'react';
import Image from "next/image";
import styled from "styled-components";
import Typed from 'react-typed'

const App = styled.section`
    background: url("./images/home/sec-4.jpg") center/cover fixed no-repeat;
    height: auto;
    min-height: 95vh;
    width: 100%;
    
`

const Section4 = () => {

    return (
        <App>
            <div className={'flex justify-center max-w-screen-2xl py-12 md:p-16'}>
                <div className={'flex flex-col items-center w-full'}>
                    <span className={'text-white font-bold text-40 mb-4'}>
                        Love Krabi
                    </span>
                    <Typed
                        strings={['Apple Store', 'Play Store']}
                        typeSpeed={300}
                        backDelay={1000}
                        backSpeed={150}
                        loop
                        className={'text-center text-6xl text-green-300 font-bold'}
                    />
                    <span className={'text-white mt-7 text-1xl px-6 text-center'}>
                       มีเธอและมีฉันที่รักกระบี่ Application "รักกระบี่" ที่จะทำให้คุณหลงรักกระบี่ และรู้ว่ารักเดี้ยนเป็นยังไง
                    </span>
                    <span className={'flex mt-10 w-auto'}>
                        <a
                            href="https://play.google.com/store/apps/details?id=th.go.krabi.travel"
                            className={'font-bold rounded flex items-center bg-dark  text-white py-4 px-6 mr-4 transition-02-all hover:shadow-2xl'}
                        >
                            <img
                                width={20} src="./images/home/google-play.png"
                                alt="google-play-logo"
                                className={'mr-2'}
                            />
                            Google Play
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=th.go.krabi.travel"
                            className={'font-bold rounded flex items-center text-white py-4 px-6 bg-dark transition-02-all hover:shadow-2xl'}
                        >
                            <img
                                width={20} src="./images/home/apple.png"
                                alt="apple-logo"
                                className={'mr-2'}
                            />
                            Apple Store
                        </a>
                    </span>
                    <span className={'mt-32'}>
                        <Image
                            src={'/images/home/3dbg.png'}
                            width={750}
                            height={270}
                        />
                    </span>
                </div>
            </div>
        </App>
    );
}

export default Section4;
