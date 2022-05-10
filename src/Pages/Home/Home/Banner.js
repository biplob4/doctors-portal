import React from 'react';
import banner from '../../../assets/images/chair.png'
import HomeBtn from '../../../Shared/HomeBtn';
import homeBg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${homeBg})`,backgroundSize:"cover"}} class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <HomeBtn>Get Started</HomeBtn>
                    </div>
                    <img src={banner} class="max-w-xl rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;