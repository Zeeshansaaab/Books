import React from 'react';
import Content from './Content'
import Slider from "./Slider"
import Footer from './Footer'
import MyNavbar from './MyNavbar'

const HomePage = () => {
    return (
        <>
        <MyNavbar/>
        <Slider/>
        <Content/>
        <Footer/>
        </>
    )
}

export default HomePage;