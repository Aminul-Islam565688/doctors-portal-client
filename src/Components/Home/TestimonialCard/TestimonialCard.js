import React from 'react';

const TestimonialCard = ({ patient }) => {
    return (
        <div className='col-md-3 text-center testimonial-card'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam? iciatis laboriosam veniam odit saepe iure accusamus quisquam. Dignissimos soluta error ea provident ratione quibusdam tenetur fugit et maxime nisi?</p>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img style={{ width: '55px' }} src={patient.img} alt="" />
                </div>
                <div className='ml-3'>
                    <h5 style={{ color: '#1cc7c1' }}>{patient.name}</h5>
                    <p className='text-secondary'>{patient.location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;