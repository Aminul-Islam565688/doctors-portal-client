import React from 'react';

const OurBlogsCard = ({ blog }) => {
    return (
        <div className='col-md-3 our-blogs-card'>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img style={{ width: '55px' }} src={blog.img} alt="" />
                </div>
                <div className='ml-3'>
                    <h5 style={{ color: '#1cc7c1' }}>{blog.name}</h5>
                    <p className='text-secondary'>{blog.date}</p>
                </div>
            </div>
            <div className='ml-2'>
                <h4>{blog.title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam? iciatis laboriosam veniam odit saepe iure accusamus quisquam. Dignissimos soluta error ea provident ratione quibusdam tenetur fugit et maxime nisi?</p>
            </div>
        </div>
    );
};

export default OurBlogsCard;