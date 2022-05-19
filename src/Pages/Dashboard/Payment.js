import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Lodding from '../../Shared/Lodding';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0tOqAO38zOuUv0XugrKf0tPfBx7WstDw4swHf4rdcVy1IhgoP7n1eHJAkDcFyb1fXUoMmYvEEXC30vPrmpHbYi00mr0bEMjW');


const Payment = () => {
    const { id } = useParams();
    const url = `https://quiet-brook-43613.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Lodding />
    }

    return (
        <div className='w-100'>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;