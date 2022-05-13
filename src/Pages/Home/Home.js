import React from 'react';
import bg from '../../assets/images/Rectangle 1.png';

const Home = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bg} alt='' className='w-1/2' />
                <div>
                    <h1 class="text-5xl font-bold uppercase">Cox's bazar</h1>
                    <p class="py-6 max-w-md text-justify">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button class="btn btn-primary">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Home;