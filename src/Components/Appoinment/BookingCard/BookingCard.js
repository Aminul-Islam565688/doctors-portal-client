import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    console.log(date);
    return (
        <div className="col-md-4 mb-5 ">
            <div className="card p-3 booking-card-container">
                <div className="card-body text-center">
                    <h5 className="card-title text-color">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn appointment-btn text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;