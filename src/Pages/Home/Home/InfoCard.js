import React from 'react';

const InfoCard = ({ inf }) => {
    return (
        <div className={`card sm:card-side text-white px-2 py-4 ${inf.bg}`} >
                <img className='w-16 mx-auto' src={inf.img} alt="" />
                <div className="card-body w-xl">
                    <h2 className="card-title text-bold">{inf.name}</h2>
                    <p>{inf.description}</p>
            </div>
        </div >
    );
};

export default InfoCard;