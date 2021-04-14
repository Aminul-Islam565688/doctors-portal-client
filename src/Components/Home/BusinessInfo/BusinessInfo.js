import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are Open 7 Days',
        icons: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icons: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+14568913564',
        icons: faPhoneAlt,
        background: 'primary'
    },
]
const BusinessInfo = () => {
    return (
        <section className=''>
            <div className='business-card row m-auto'>
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;