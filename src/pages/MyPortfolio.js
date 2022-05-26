import React from 'react';
import profile from '../image/1653497959006.png';
import './MyPortfolio.css';
const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen portfolio-container">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Portfolio</h1>
                    <h4 class="py-2 mt-6 text-xl"><span className="font-bold">Name:</span> Anik Dev</h4>
                    <h4 class="py-2 text-xl"><span className="font-bold">Email:</span> anikdev2016@gmail.com</h4>
                    <h4 class="py-2 text-xl"><span className="font-bold">Education Qualification:</span> BSC undergraduate in Chemical engineering.</h4>
                    <p class="py-6 text-xl">Technologies That I Can Use As A web Developer:
                        <ul>
                            <li className="list-disc list-inside" >HTML,HTML5</li>
                            <li className="list-disc list-inside" >CSS, CSS3</li>
                            <li className="list-disc list-inside" >CSS frameworks (Bootstrap, Tailwind CSS)</li>
                            <li className="list-disc list-inside" >JavaScript</li>
                            <li className="list-disc list-inside" >ES6</li>
                            <li className="list-disc list-inside" >React</li>
                            <li className="list-disc list-inside" >React Libraries:
                                <ul>
                                    <li className="list-disc list-inside" >Router</li>
                                    <li className="list-disc list-inside" >Hook Form</li>
                                    <li className="list-disc list-inside" >DaisyUI</li>
                                    <li className="list-disc list-inside" >Flowbite</li>
                                    <li className="list-disc list-inside" >React Icons</li>
                                </ul>
                            </li>
                            <li className="list-disc list-inside" >Express JS</li>
                            <li className="list-disc list-inside" >MongoDB</li>
                        </ul>
                    </p>
                    <p class="py-6 font-bold">Recent 3 Projects: </p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;