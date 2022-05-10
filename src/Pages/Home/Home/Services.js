import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Theet from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            img: `${Fluoride}`,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            _id: 2,
            name: "Cavity Filling",
            img: `${Cavity}`,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            img: `${Theet}`,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
    ];
    return (
        <div className='my-40'>
            <div className="my-24">
                <h3 className='text-primary text-center text-lg font-bold'>OUR SERVICES</h3>
                <h3 className=' text-center text-4xl my-2'>Services We Provide</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 ">
                {
                    services.map(service => (<Service key={service._id} service={service}></Service>))
                }
            </div>
        </div>
    );
};

export default Services;