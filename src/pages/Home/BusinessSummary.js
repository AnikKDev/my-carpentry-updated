import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineFlag } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GrGroup } from 'react-icons/gr';
import { VscFeedback } from 'react-icons/vsc';
import './BussinessSummary.css';
const BusinessSummary = () => {
    return (
        <div className="my-14 py-36 summary-container" >
            <h1
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="100"
                className="text-4xl text-center my-5 text-primary font-bold">WE ARE THE BEST MANUFACTURER FOR CARPENTRY</h1>
            <h4
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="200"

                className="text-2xl text-center text-gray-500">We provide what our users need</h4>
            <div
                data-aos="fade-up"
                data-aos-duration="800"

                className="grid mt-10 gap-y-10 grid-cols-1 lg:grid-cols-4 justify-items-center my-7">
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><AiOutlineFlag /></div>
                    <h1 className="text-5xl font-bold text-primary">72+</h1>
                    <h3 className='text-xl font-semi-bold mt-2 text-gray-500'>Countries</h3>
                </div>
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><HiOutlineDesktopComputer /></div>
                    <h1 className="text-5xl font-bold text-primary">550+</h1>
                    <h3 className='text-xl font-semi-bold mt-2 text-gray-500'>Completed Projects</h3>
                </div>
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><GrGroup /></div>
                    <h1 className="text-5xl font-bold text-primary">190+</h1>
                    <h3 className='text-xl font-semi-bold mt-2 text-gray-500'>Happy Clients</h3>
                </div>
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><VscFeedback /></div>
                    <h1 className="text-5xl font-bold text-primary">450+</h1>
                    <h3 className='text-xl font-semi-bold mt-2 text-gray-500'>Feedbacks</h3>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;