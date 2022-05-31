import React from 'react';
import Rating from 'react-rating';

const Review = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className="card w-96 bg-gray-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary uppercase">{name}</h2>
                <p className="text-gray-500"><span className="font-semibold">Comment:</span> {comment}</p>
                <p>
                    <span className="font-bold">Rating: </span>
                    <Rating
                        className='text-yellow-300 text-xs'
                        initialRating={rating}
                        readonly
                        emptySymbol="fa fa-star-o fa-2x star"
                        fullSymbol="fa fa-star fa-2x star"
                    /></p>
            </div>
        </div>
    );
};

export default Review;