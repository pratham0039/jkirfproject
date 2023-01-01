import React from 'react';
import Navigation from '../navigation';
import Topnavigation from '../topnavigation';
import Topheader from './topheader';
import Banner from './Banner'
import Parameters from './parameters'
import Footer from 'C:/Users/mk/Downloads/jkirfproject/src/components/footer.js'

function Homepage(){
    return(
        <>
        <Topnavigation/>
        <Topheader/>
        <Navigation/>
        <Banner/>
        <Parameters/>
        <Footer/>
        </>
    )
}

export default Homepage;