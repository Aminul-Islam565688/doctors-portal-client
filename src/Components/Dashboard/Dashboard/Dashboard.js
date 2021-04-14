import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import SideBar from '../SideBar/SideBar';


const conatinerStyle = {
    backgroundColor: '#f4fdfb',
    height: '100%',
}



const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])

    const handleDateChange = (date) => {
        setSelectedDate(date.toISOString().slice(0, 10));
    }

    useEffect(() => {
        fetch('https://serene-citadel-65750.herokuapp.com/appointmentsByDate', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
                console.log(data);
            })
    }, [selectedDate])

    console.log(selectedDate, loggedInUser.email);
    return (
        <section>
            <div style={conatinerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;