import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Style from './Layout.module.css';
import Head from 'next/head';

interface Props {
    children?: any
}

const Layout = (props: Props) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <Navbar />
            <div className={Style.main}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
