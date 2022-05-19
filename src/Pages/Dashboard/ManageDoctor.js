import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Lodding from '../../Shared/Lodding';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDelitngDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://quiet-brook-43613.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Lodding />
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDelitngDoctor={setDelitngDoctor}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDelitngDoctor={setDelitngDoctor}
            />}
        </div>
    );
};

export default ManageDoctor;