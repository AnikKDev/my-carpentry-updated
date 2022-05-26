import React from 'react';
import profile from '../image/1653497959006.png';
import './MyPortfolio.css';
const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen portfolio-container mb-28 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} className="max-w-sm rounded-lg shadow-2xl" alt="profileimage" />
                <div>
                    <h1 className="text-5xl font-bold">Portfolio</h1>
                    <h4 className="py-2 mt-6 text-xl"><span className="font-bold">Name:</span> Anik Dev</h4>
                    <h4 className="py-2 text-xl"><span className="font-bold">Email:</span> anikdev2016@gmail.com</h4>
                    <h4 className="py-2 text-xl"><span className="font-bold">Education Qualification:</span> BSC undergraduate in Chemical engineering.</h4>
                    <h5 className="py-6 text-xl">Technologies That I Can Use As A web Developer:</h5>
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
                    <p className="py-6 font-bold">Recent 3 Projects: </p>
                    <h5>1. ToDo list app: <a className="underline font-semibold text-primary" href="https://todo-list-e9d06.web.app/">Todo List</a></h5>
                    <h5>2. Laptop Mania: <a className="underline font-semibold text-primary" href="https://laptop-mania-client-side.web.app/">Laptop Mania</a></h5>
                    <h5>3. Pixieco: <a className="underline font-semibold text-primary" href="https://pixieco-react.web.app/">Pixieco</a></h5>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;