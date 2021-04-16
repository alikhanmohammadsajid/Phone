import React from 'react';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Services from '../Services/Services';
import DynamicMobile from '../DynamicMobile/DynamicMobile';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Blog></Blog>
            <DynamicMobile></DynamicMobile>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;