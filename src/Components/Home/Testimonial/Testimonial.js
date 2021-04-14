import React from 'react';
import man from '../../../images/man.png';
import woman from '../../../images/woman.png';
import woman2 from '../../../images/woman2.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const patientData = [
    {
        name: "Winson Herry",
        location: 'California',
        img: man
    },
    {
        name: "Winson Herry",
        location: 'California',
        img: woman
    },
    {
        name: "Winson Herry",
        location: 'California',
        img: woman2
    },
]

const Testimonial = () => {
    return (
        <section className='container testimonial-container'>
            <h4 style={{ color: "#1cc7c1" }}>TESTIMONIAL</h4>
            <h1>What Our Patient<br /> Says</h1>
            <div className="row justify-content-center my-5 testimonial-main">
                {patientData.map(patient => <TestimonialCard patient={patient}></TestimonialCard>)}
            </div>
        </section>
    );
};

export default Testimonial;