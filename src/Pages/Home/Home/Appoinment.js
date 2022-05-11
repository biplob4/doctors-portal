import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import HomeBtn from '../../../Shared/HomeBtn';
import appoinmentbg from '../../../assets/images/appointment.png';

const Appoinment = () => {
    return (
        <div  style={{backgroundImage:`url(${appoinmentbg})`}} className='my-40'>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row gap-8">
                    <img src={doctor} className="max-w-xl hidden lg:block rounded-lg mt-[-100px]" alt='' />
                    <div className='text-white p-4'>
                        <h3 className='text-secondary text-xl font-bold mb-5'>Appoinment</h3>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <HomeBtn>Get Started</HomeBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;