import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import './AppointmentForm.css';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppoinmentForm = ({ modalIsOpen, openModal, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.date);
        data.service = appointmentOn;
        // data.date = date;
        data.created = new Date();
        fetch('http://localhost:9999/addAppointment', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Your Appointment is Successfully Created')
                }
            })
        // const modalForm = document.querySelector('.modal-form');
        // modalForm.reset();
    };
    return (
        <div style={{ borderRadius: '1px' }}>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className='text-color text-center'>{appointmentOn}</h2>
                <form className='modal-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' list='doctors' className='modal-form-input' placeholder='Select Doctor' {...register("doctor", { required: true })} />
                    <datalist id="doctors" name="doctors">
                        <option value="Joseph Lister"></option>
                        <option value="William Osler"></option>
                        <option value="Ibn Sina"></option>
                        <option value="Edward Jenner"></option>
                    </datalist>
                    <br />
                    {errors.doctor && <span style={{ color: 'red' }}>This field is required*</span>}
                    <br />
                    <input type='text' className='modal-form-input' placeholder='Your Name' {...register("name", { required: true })} />
                    <br />
                    {errors.name && <span style={{ color: 'red' }}>This field is required*</span>}
                    <br />
                    <input type='number' className='modal-form-input' placeholder='Phone Number' {...register("phone", { required: true })} />
                    <br />
                    {errors.phone && <span style={{ color: 'red' }}>This field is required*</span>}
                    <br />
                    <input type='email' className='modal-form-input' placeholder='Email' {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span style={{ color: 'red' }}>This field is required*</span>}
                    <br />
                    <input type='date' className='modal-form-input' placeholder='mm/dd/yy' {...register("date", { required: true })} />
                    <br />
                    {errors.date && <span style={{ color: 'red' }}>This field is required*</span>}
                    <br />
                    {/* <div>
                        <input type="text" list='sex' placeholder='Gender' />
                        <datalist id='sex ' name='sex'>
                            <option value="Male"></option>
                            <option value="Female"></option>
                            <option value="Others"></option>
                        </datalist>
                        <input type="number" placeholder='Age' />
                        <input type="number" placeholder='Weight' />
                    </div> */}
                    <input className='appointment-btn modal-btn' value='Send' type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;