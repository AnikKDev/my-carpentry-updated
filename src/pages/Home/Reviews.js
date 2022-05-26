import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://whispering-sierra-85456.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="my-16 px-4">
            <h1 className="text-center text-primary font-bold text-4xl uppercase font-['Bree_Serif']">What Our Customers Say</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-5 my-11">
                {
                    reviews?.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;