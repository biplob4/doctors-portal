import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons//phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const info = [
        {
            _id: 1,
            name: "Opening Hours",
            img: `${clock}`,
            description: "Lorem Ipsum is simply dummy text of the pri",
            bg:"bg-gradient-to-r from-secondary to-primary"
        },
        {
            _id: 2,
            name: "Visit our location",
            img: `${marker}`,
            description: "Brooklyn, NY 10036, United States",
            bg:"bg-neutral"
        },
        {
            _id: 3,
            name: "Contact us now",
            img: `${phone}`,
            description: "+000 123 456789",
            bg:"bg-gradient-to-r from-secondary to-primary"
        },
    ]
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 ">
            {
                info.map(inf => (<InfoCard key={inf._id} inf={inf}></InfoCard>))
            }
        </div>
    );
};

export default Info;