import React from 'react';
import BookingCard from '../BookingCard/BookingCard';


const bookingData = [
    {
        _id: '',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 7:30 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]



const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className='text-center text-color'>Available Appointments On {date.toDateString()}</h2>
            <div className="row mx-auto my-5 container">
                {bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)}
            </div>
        </section>
    );
};

export default BookAppointment;