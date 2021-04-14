import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import teeth from '../../../images/teeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,

    },
    {
        name: 'Cavity Filling',
        img: cavity,

    },
    {
        name: 'Teeth Whitening',
        img: teeth,

    },
]



const Services = () => {
    return (
        <section className='services-container'>
            <div className="text-center mt-5">
                <h5 style={{ color: '#5fc7c7' }}>OUR SERVICES</h5>
                <h1 style={{ color: '#203047' }}>Services We Provide</h1>
            </div>
            <div className='business-card row mx-auto mt-5 py-5'>
                {
                    servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;