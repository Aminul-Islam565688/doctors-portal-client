import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor.png';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const doctorsData = [
    {
        img: doctor,
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
    },
    {
        img: doctor,
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
    },
    {
        img: doctor,
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
    },
]



const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://serene-citadel-65750.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section className="py-5">
            <h4 className='text-color text-center mb-5 pb-5'>Our Doctors</h4>
            <div className="row d-flex justify-content-center">
                {doctors.map(doctor => <DoctorsCard doctor={doctor}></DoctorsCard>)}
            </div>
        </section>
    );
};

export default Doctors;