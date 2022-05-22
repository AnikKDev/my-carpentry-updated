import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import SubBanner from './SubBanner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
        </div>
    );
};

export default Home;