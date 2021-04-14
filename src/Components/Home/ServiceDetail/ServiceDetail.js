import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{ width: "70px", height: '70px' }} src={service.img} alt="" />
            <h4 className='my-5'>{service.name}</h4>
            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsum eos iusto maiores earum veritatis?</p>
        </div>
    );
};

export default ServiceDetail;