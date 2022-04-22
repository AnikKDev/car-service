import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
            <h1 className="content-header">Car Service</h1>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;