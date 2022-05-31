import React, { useEffect, useState } from 'react';
import Review from './Review';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://whispering-sierra-85456.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    // multi carousel setup
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="my-16 px-4">
            <h1 className="text-center text-primary font-bold text-4xl uppercase font-['Bree_Serif']">What Our Customers Say</h1>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-5 my-11">

            </div> */}
            <Carousel
                swipeable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}

                className="py-14" responsive={responsive}>
                {
                    reviews?.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Carousel>
        </div>
    );
};

export default Reviews;