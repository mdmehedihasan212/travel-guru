import React from 'react';

const Booking = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse gap-24">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Origin</span>
                            </label>
                            <select class="select select-bordered w-full max-w-xs">
                                <option>Dhaka</option>
                                <option>Barishal</option>
                            </select>
                            <label class="label">
                                <span class="label-text">Destination</span>
                            </label>
                            <select class="select select-bordered w-full max-w-xs">
                                <option>Cox's Bazar</option>
                                <option>Kuakata</option>
                            </select>
                            <label class="label">
                                <span class="label-text">From</span>
                            </label>
                            <select class="select select-bordered w-full max-w-xs">
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <button class="btn btn-active btn-primary w-full">Start Booking</button>
                    </div>
                </div>
                <div>
                    <h1 class="text-5xl font-bold uppercase">Cox's bazar</h1>
                    <p class="py-6 max-w-md text-justify">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button class="btn btn-primary">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Booking;