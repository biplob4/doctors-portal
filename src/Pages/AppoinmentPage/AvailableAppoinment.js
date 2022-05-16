import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Lodding from '../../Shared/Lodding';
import AppoinmentServices from './AppoinmentServices';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({ selected }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattaedDate = format(selected, "PP");
    const { data: services, isLoading, refetch } = useQuery(['available', formattaedDate], () => fetch(`http://localhost:5000/available?date=${formattaedDate}`).then(res => res.json()))

    if (isLoading) {
        return <Lodding />
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattaedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattaedDate])

    return (
        <div>
            <h3 className='font-bold text-center text-secondary text-3xl my-24 '>Available Appointments on {format(selected, 'PP')}.</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16'>
                {
                    services?.map(service => <AppoinmentServices
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppoinmentServices>)
                }
            </div>
            {treatment && <BookingModal date={selected} setTreatment={setTreatment} treatment={treatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;