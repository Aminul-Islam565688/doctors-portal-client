import React from 'react';
import doctor from '../../../images/doctor.png';

const AppoinmentHome = () => {
    return (
        <section className='py-5 my-5'>
            <div className="row align-items-center appointment-container">
                <div className="col-sm-6 doctors-img">
                    <img className='' src={doctor} alt="" />
                </div>
                <div className="col-sm-6 text-white">
                    <h4 className='my-4' style={{ color: "#1cc7c1" }}>APPOINMENT</h4>
                    <h2 className='my-4'>Make an Appoinment <br /> Today</h2>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed earum non exercitationem odit corrupti!</p>
                    <button className='my-4' style={{ padding: '10px 25px' }} className="btn appointment-btn ">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentHome;