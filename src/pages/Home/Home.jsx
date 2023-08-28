import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import SubBanner from './SubBanner';
import Tools from './Tools';
import OurService from './Ourservice';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <OurService></OurService>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;