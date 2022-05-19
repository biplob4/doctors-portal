import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import tr from 'date-fns/esm/locale/tr/index.js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const { _id, price, patient, patientName } = appointment;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [trangactionId, setTransgactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch('https://quiet-brook-43613.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);
        // comrim card payment
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError('');
            setSuccess('Congrats! Your payment is completed')
            // store payment on database
            const payment = {
                appointment: _id,
                trnangectionId: paymentIntent.id
            };
            setTransgactionId(paymentIntent.id);
            fetch(`https://quiet-brook-43613.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-success my-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay {processing && <span className='text-xl'>...</span>}
                </button>
            </form>
            {cardError && <p className='text-xs text-red-500'>{cardError}</p>}
            {success && <div className='text-xs text-green-500'>
                <p>{success}</p>
                <p>your trangection id: <small className='text-orange-500 font-bold'>{trangactionId}</small></p>
            </div>}
        </>
    );
};

export default CheckoutForm;