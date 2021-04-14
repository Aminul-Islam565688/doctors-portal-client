import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppoinmentHome from '../AppoinmentHome/AppoinmentHome';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import ExceptionalService from '../ExceptionalService/ExceptionalService';
import Header from '../Header/Header';
import OurBlogs from '../OurBlogs/OurBlogs';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalService></ExceptionalService>
            <AppoinmentHome></AppoinmentHome>
            <Testimonial></Testimonial>
            <OurBlogs></OurBlogs>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;