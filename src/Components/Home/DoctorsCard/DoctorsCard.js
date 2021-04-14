import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DoctorsCard = ({ doctor }) => {
    return (
        <div className='col-md-3'>
            <img style={{ width: "100%" }} className='doctors-img' src={`data:image/png;base64,${doctor.image.img}`} alt="" />
            <div className='text-center'>
                <h4>{doctor.name}</h4>
                <p><FontAwesomeIcon className='doctors-icon mr-1' icon={faPhoneAlt} />{doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorsCard;