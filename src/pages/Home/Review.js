import React from 'react';

const Review = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div class="card w-96 bg-gray-200 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-primary uppercase">{name}</h2>
                <p className="text-gray-500"><span className="font-semibold">Comment:</span> {comment}</p>
                <p><span className="font-bold">Rating:</span> {rating}/5</p>
            </div>
        </div>
    );
};

export default Review;