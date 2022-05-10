import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import Exceptional from './Exceptional';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
            <Appoinment/>
            <Testimonial/>
            <ContuctUs/>
        </div>
    );
};

export default Home;