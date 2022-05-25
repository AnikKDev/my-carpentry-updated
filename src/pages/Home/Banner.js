import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel autoPlay useKeyboardArrows>
            <div>
                <img src="https://images.unsplash.com/photo-1605125626499-e2c7efbd1ab3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1630939757617-462c09027875?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1520372561567-bac27b0e5fa1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984" />
            </div>
        </Carousel>
    );
};

export default Banner;