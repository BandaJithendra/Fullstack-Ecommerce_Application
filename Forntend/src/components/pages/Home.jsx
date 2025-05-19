import React from 'react';
import Header from '../header';
import Brands from '../Brands';
// import ClothingSection from '../ClothingSection';
import Carousuel from '../Carousuel';
import Category from '../category';
function Home() {
    return ( 
        <>
            <Header/>
            <Brands/>
            <Carousuel/>
            <Category/>
            {/* <ClothingSection/> */}
            {/* <ClothingSection/> */}
        </>
     );
}

export default Home;