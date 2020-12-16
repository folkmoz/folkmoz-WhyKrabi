import React from "react";
import Head from "next/head";

import '../../styles/index.css'

import {StylesProvider} from "@material-ui/styles";
import { Navbar } from "../components/Header/Header";

const MyApp = ({Component, pageProps}) => {

    return (
        <>
            <StylesProvider injectFirst>
                <Head>
                    <title>WhyKrabi</title>
                    <meta name="description" content="กระบี่เป็นเมืองท่องเที่ยวที่มีชื่อเสียงของภาคใต้มีแหล่งท่องเที่ยวหลายแห่ง เช่น หาดทรายขาว น้ำทะเลใส ปะการัง ถ้ำ และหมู่เกาะน้อยใหญ่กว่า 100 เกาะ"/>
                </Head>
                <Navbar />
                <Component {...pageProps} />
            </StylesProvider>
        </>
    )
}

export default MyApp
