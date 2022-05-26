import React from 'react';
import './OurService.css';
const Ourservice = () => {
    return (
        <div class="hero  service-container my-20 min-h-screen" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1499744349893-0c6de53516e6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)" }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero lg:px-28 py-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        src="https://images.unsplash.com/photo-1544164560-adac3045edb2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411" class="max-w-sm rounded-lg shadow-2xl" alt="wood-cutter" />
                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h1 class="text-5xl font-bold text-primary">10 Years of</h1>
                        <h1 class="text-5xl font-bold text-white">Amazing Project</h1>
                        <h3 class="py-6 text-xl text-white">Selected study case from our clients</h3>
                        <p className="text-gray-300">We got our experts from around the world and they continue working as smart as possible to get data from our user experience and applying them to regular product basis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourservice;