import React from 'react';

const Ourservice = () => {
    return (
        <div class="hero mb-7 min-h-screen" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1499744349893-0c6de53516e6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)" }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">My Carpentry</h1>
                    <p class="mb-5">Provides the best available items from stock</p>
                    <a href='#tools'><button class="btn btn-primary">Watch Our Tools</button></a>
                </div>
            </div>
        </div>
    );
};

export default Ourservice;