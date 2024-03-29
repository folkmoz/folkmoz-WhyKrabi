import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import styled from "styled-components";
import {Divider, useMediaQuery} from "@material-ui/core";

const Blogs =styled.section`
  height: auto;
  width: 100%;
  position: relative;
  background: url("./images/home/hotel-bg.jpg") center/cover fixed no-repeat;
  
    @media (max-width: 768px) {
      height: auto;
    }
`

const LeftSide = styled.div` 
    position: relative;
    padding: 3rem 1.8rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    color: #fff;
    width: 33.333333%;
    min-height: 95vh;
  
    @media (max-width: 768px) {
      justify-content: center;
      width: 100%;
      display: none;
    }
        
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.4);
    z-index: -1;
  }
`


const tabs = [
    {
        title: 'สถานที่ท่องเที่ยว',
        path: '/attraction',
        image: '/images/category/tr.jpg',
        sub: 'ออกสู่โลกทะเล พักผ่อนสูดอากาศสดชื่นให้เต็มปอด บินมาหย่อนขาลงน้ำใสๆหาดสวยๆ ก็เป็นอีกตัวเลือกที่ดี และแน่นอนว่าวันนี้เราก็ได้รวบรวม 21 ที่เที่ยวในจังหวัดกระบี่ที่ไม่ควรพลาด ชอบแบบไหน ไปแบบนั้น เลือกเอาตามใจเลยครับ'
    },
    {
        title: 'ศูนย์การเรียนรู้',
        path: '/learn',
        image: '/images/category/lc.jpg',
        sub: 'มุ่งเน้นนำเสนอเรื่องราวของลูกปัดโบราณ ซึ่งเชื่อมโยงจากอดีตในฐานะเมืองท่ากว่าสองพันปีถ่ายทอดผ่านกาลเวลาจนถึงยุคปัจจุบัน รวมทั้งเป็นสถานที่ในการสร้างสรรค์และนำเสนอผลงานทางศิลปะและวัฒนธรรมอันทรงคุณค่าของจังหวัดกระบี่'
    },
    {
        title: 'ที่พัก',
        path: '/accommodation',
        image: '/images/category/tp.jpg',
        sub: 'คิดจะลงใต้ทั้งทีไปหาที่พักดีๆ พักผ่อนกันเถอะ ทั้งสวย น่ารัก ติดทะเล มีมาให้เลือกหลายแบบหลายสไตล์ ที่พักดี๊ดี หนีร้อนไปนอนทะเลกัน'
    },
    {
        title: 'กิจกรรม',
        path: '/activity',
        image: '/images/category/ky.jpg',
        sub: 'กระบี่มีกิจกรรมมากมายให้นักท่องเที่ยวได้สนุกเพลิดเพลิน ไม่ว่าจะเป็นพายเรือคายักผ่านถ้ำหินปูน หรือตื่นตาตื่นใจกับศิลปะมวยไทยที่มันสะใจ นอกจากนี้แล้วยังมีกิจกรรมสำหรับการพักผ่อนหย่อนใจอีกด้วย'
    },
    {
        title: 'ร้านอาหาร',
        path: '/restaurant',
        image: '/images/category/fd.jpg',
        sub: 'โอ้! ปักษ์ใต้บ้านเรา~ แม่น้ำภูเขาทะเลอุดมสมบูรณ์จริง ๆ แต่ที่สมบูรณ์กว่าธรรมชาติก็ของกินนี่แหละ! โดยเฉพาะของกินกระบี่ที่รสชาติไร้เทียมทานเป็นสวรรค์ของกินถิ่นแดนใต้ที่แท้ทรู~ มาครบทั้งคาวหวานจากหลากหลายวัฒนธรรมอาหาร'
    },
    {
        title: 'สินค้า O-top',
        path: '/o-top',
        image: '/images/category/ht.jpg',
        sub: 'ธุรกิจประกอบการท้องถิ่น สินค้าโอทอปคุณภาพที่มีทั้ง อาหาร เครื่องดื่ม ผ้าและเครื่องแต่งกาย ของใช้ ของประดิษฐ์ และสมุนไพร (ที่ไม่ใช่อาหาร)'
    }
]

const Section3 = ({ id }) => {
    const [currentActive, setCurrentActive] = React.useState(0)
    const [maxHeight, setMaxHeight] = React.useState(0)

    const router = useRouter()

    const selectTab = React.useCallback((index, title) => {
        setCurrentActive(index)
        router.replace(`/?@${title}`, undefined, { shallow: true })
    },[])

    const maxWidth768 = useMediaQuery('(max-width: 768px)')

    React.useEffect(() => {
        let offsetHeight = []

        const items = document.querySelectorAll('.item')

        if (items.length !== 0) {
            items.forEach(i => offsetHeight.push(i.offsetHeight))
            setMaxHeight(Math.max.apply(null, offsetHeight))
        }


    }, [maxWidth768])


    return (
        <Blogs data-scroll={id}>
            <div className={'relative flex flex-col-reverse w-full h-full z-1 md:flex-row'}>
                <LeftSide>
                    <div style={{maxWidth: 350}}>
                        <h2 className={'text-2xl'}>แหล่งข้อมูลต่าง ๆ</h2>
                        <Divider variant={"fullWidth"} className={'bg-white my-5'} />
                        <div>
                            <p>
                                ทางเราได้ทำการรวบรวมข้อมูล รีวิว ต่างๆ เพื่อให้เพื่อนๆได้รู้ว่ากระบี่นั้นนอกจากจะมีเกาะแล้วยังมีศูนย์การเรียนรู้ที่เป็นแหล่งข้อมูลให้ศึกษา สินค้า O-top ประจำภาคใต้ และอื่นๆอีกมากมายของเราให้น่าสนใจมากขึ้นครับ
                            </p>
                        </div>
                        <ul className={'mt-16'}>
                            {
                                tabs.map((tab, i) => (
                                    <li
                                        key={tab.title}
                                        className={`py-2 px-6 my-8 select-none md:select-auto md:cursor-pointer ${i === currentActive ? 'text-white bg-yellow-600' : 'text-black bg-white hover:text-yellow-400'} text-center shadow-md max-w-xs`}
                                        onClick={() => selectTab(i, tab.title)}
                                    >
                                        {tab.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </LeftSide>
                <div className={'w-full text-white h-full py-16 md:px-12  md:w-2/3'}>
                    <div className={'h-full'}>
                        {
                            maxWidth768 ? (
                                <div className={'flex flex-nowrap overflow-x-auto'}>
                                    {
                                        tabs.map((item, index) => (
                                            <span style={{maxWidth: 320}} className={'flex-grow-0 flex-shrink-0 flex-basis-auto max-w-full h-full px-2'} key={item.title}>
                                                <div className={'relative w-full max-w-5xl md:max-w-3xl'} style={{marginBottom: -20}}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={770}
                                                        height={420}
                                                        objectFit={"cover"}
                                                    />
                                                </div>
                                                <div style={{height: maxHeight === 0 ? 'auto' : maxHeight}} className={'item py-8 bg-white text-black pl-8 pr-4 max-w-3xl h-full flex flex-col justify-between'}>
                                                    <span className={'text-2xl'}>{item.title}</span>
                                                    <p className={'text-gray-500 mt-2'}>{item.sub}</p>
                                                    <Link
                                                        href={item.path}
                                                    >
                                                        <a style={{maxWidth: 120}} className={'rounded text-white mt-4 inline-block py-2 px-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'}>
                                                            เพิ่มเติม...
                                                        </a>
                                                    </Link>
                                                </div>
                                            </span>
                                        ))
                                    }
                                </div>
                            ) : (
                                tabs.map((item, index) => (
                                    <span className={`${currentActive === index ? 'block' : 'd-none'}`} key={item.title}>
                                        <div className={'relative w-full max-w-5xl md:max-w-3xl'} style={{transform: 'translateY(20px)' }}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={770}
                                                height={420}
                                                objectFit={"cover"}
                                            />
                                        </div>
                                        <div className={'py-8 bg-white text-black px-8 max-w-3xl'}>
                                            <span className={'text-4xl'}>{item.title}</span>
                                            <p className={'text-gray-500 mt-2'}>{item.sub}</p>
                                            <Link
                                                href={item.path}
                                            >
                                                <a className={'rounded text-white mt-4 inline-block py-2 px-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'}>
                                                    เพิ่มเติม...
                                                </a>
                                            </Link>
                                        </div>
                                    </span>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </Blogs>
    );
}

export default Section3;
