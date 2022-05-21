import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (

        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://images.unsplash.com/photo-1626081063434-79a2169791b1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876" alt="" />
                    <p className="legend text-3xl">Convention at its best</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1499744349893-0c6de53516e6?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869" alt="" />
                    <p className="legend text-3xl">High quality items</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1626081063434-79a2169791b1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876" alt="" />
                    <p className="legend text-3xl">Around the globe</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;