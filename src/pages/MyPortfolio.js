import React from 'react';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Portfolio</h1>
                    <p class="py-6">Name: Anik Dev</p>
                    <p class="py-6">Email: anikdev2016@gmail.com</p>
                    <p class="py-6">Education Qualification: BSC undergraduate in Chemical engineering.</p>
                    <p class="py-6">Technologies That I Can Use As A web Developer:
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
                    <p class="py-6">Recent 3 Projects: </p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;