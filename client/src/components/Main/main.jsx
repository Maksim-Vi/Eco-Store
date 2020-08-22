import React from 'react';
import Header from '../Header/header';
import PopularContainer from '../Popular/popularContainer';
import Contacts from '../Contacts/contacts';
import HeaderIntro from '../Header/HeaderIntro';
import Footer from '../Footer/footer';


const Main = () =>{
    return (
        <div>
            <Header />
            <HeaderIntro />
            <PopularContainer />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main