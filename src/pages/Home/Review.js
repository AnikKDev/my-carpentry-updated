import React from 'react';

const Review = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{comment}</p>
                <p><span className="font-bold">Rating:</span>{rating}/5</p>
            </div>
        </div>
    );
};

export default Review;