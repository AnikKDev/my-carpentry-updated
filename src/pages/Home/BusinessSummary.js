import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineFlag } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GrGroup } from 'react-icons/gr';
import { VscFeedback } from 'react-icons/vsc';
const BusinessSummary = () => {
    return (
        <div className="my-14">
            <h1 className="text-4xl text-center">Millions Business Trust Us</h1>
            <h4 className="text-2xl text-center">Try To Understand Users Expectations</h4>
            <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center my-7">
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><AiOutlineFlag /></div>
                    <h1>72+</h1>
                    <p>Countries</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><HiOutlineDesktopComputer /></div>
                    <h1>550+</h1>
                    <p>Completed Projects</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><GrGroup /></div>
                    <h1>190+</h1>
                    <p>Happy Clients</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center text-7xl"><VscFeedback /></div>
                    <h1>450+</h1>
                    <p>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;