import React from 'react';
import styled from "styled-components";
import {Container, Divider} from "@material-ui/core";

const AboutKrabi = styled.section`
  width: 100%;
  height: auto;
  min-height: 500px;
  padding: 1.7rem 0;
  background: url("./images/home/sec-2.jpg") center/cover fixed no-repeat;
  display: flex;
  align-items: center;
  

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  padding: 0 .5rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
  
  .col-icon {
    width: 110px;
    height: 110px;
    text-align: center;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #f7c552;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`

const mockData = [
    {
        img: './images/icons/service_icon_01.png',
        title: 'กระบี่',
        paragraph: 'กระบี่เป็นเมืองท่องเที่ยวที่มีชื่อเสียงของภาคใต้มีแหล่งท่องเที่ยวหลายแห่ง เช่น หาดทรายขาว น้ำทะเลใส ปะการัง ถ้ำ และหมู่เกาะน้อยใหญ่กว่า 100 เกาะ'
    },
    {
        img: './images/icons/service_icon_02.png',
        title: 'มาเที่ยวทะเล',
        paragraph: 'ทะเลกระบี่มีเกาะเยอะเยะมากมายน้ำทะเลสีฟ้ากับภูเขาที่ปกคลุมไปด้วยต้นไม้สีเขียวรวมไปถึงสิ่งมหัศจรรย์ที่ธรรมชาติสร้างขึ้น คือ ทะเลแหวก'
    },
    {
        img: './images/icons/service_icon_03.png',
        title: 'มาถ่ายรูป',
        paragraph: 'สถานที่ที่เป็นจุดเด่นของกระบี่ที่มาแล้วต้องถ่ายรูปไปอวดเพื่อนไม่ว่าจะเป็น ปูดำตัวโตที่ตั้งอยู่หน้าเมือง เขาขนาบน้ำที่ตั้งตระหง่านอยู่หน้าเมืองต้อนรับผู้มาเยือน'
    },
    {
        img: './images/icons/service_icon_04.png',
        title: 'มานั่งเรือหัวโทง',
        paragraph: 'ลักษณะของเรือที่ไม่เหมือนที่อื่นสามารถเห็นได้ทั่วไปในจังหวัดกระบี่ไม่ว่าจะเป็น การใช้เรือในการประะกอบอาชีพประมงหรือเพื่อการท่องเที่ยวเป็นเอกลักษณ์ที่โดดเด่นของกระบี่'
    },
]

const Section2 = ({ id }) => {

    return (
        <>
            <AboutKrabi data-scroll={id}>
                <Container maxWidth={"lg"} className={'flex flex-col justify-around items-center h-3/4 md:flex-row'}>
                    {
                        mockData.map((e, i) => (
                            <Col key={i}>
                                <div className={'col-icon'}>
                                    <img src={e.img} alt={e.title}/>
                                </div>
                                <div className={'text-white'}>
                                    {e.title}
                                </div>
                                <Divider variant={"middle"} className={'w-3/4 bg-white'} />
                                <div className={'text-white'}>
                                    <p>
                                        {e.paragraph}
                                    </p>
                                </div>
                            </Col>
                        ))
                    }
                </Container>
            </AboutKrabi>
        </>
    );
}

export default Section2;
