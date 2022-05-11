import React from 'react';
import HomeBtn from '../../../Shared/HomeBtn';
import appoinmentbg from '../../../assets/images/appointment.png';


const ContuctUs = () => {
    return (
        <div style={{ backgroundImage: `url(${appoinmentbg})` }} className="hero py-16 mb-16">
            <div className="bg-transparent card flex-shrink-0 w-full max-w-xl bg-base-100">
                <h3 className='text-xl font-bold text-center text-secondary'>Contact Us</h3>
                <h2 className='text-3xl text-white font-bold text-center py-4'>Stay connected with us</h2>
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="Email Address" className="input text-lg text-gray-500" />
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" placeholder="Subject" className="input text-lg text-gray-500" />
                    </div>
                    <div className="form-control mt-2">
                        <textarea placeholder="Your message" className="input h-32 text-lg text-gray-500" />
                    </div>
                    <div className="block mx-auto mt-5">
                        <HomeBtn>Submit Now</HomeBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContuctUs;