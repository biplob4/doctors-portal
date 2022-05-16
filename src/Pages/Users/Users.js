import React from 'react';
import { useQuery } from 'react-query';
import Lodding from '../../Shared/Lodding';
import UsresRow from './UsresRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users',{
        method : "GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Lodding />
    }
    return (
        <div>
            <h1>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UsresRow key={user._id} user={user} refetch={refetch}>
                            </UsresRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;