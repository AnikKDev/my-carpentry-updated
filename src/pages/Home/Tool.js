import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Tool = ({ tool }) => {
    const { toolName, price, detail, picture, minQuantity, availableQuantity, _id } = tool;
    const navigate = useNavigate();
    return (
        <div class="card lg:max-w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{toolName}</h2>
                <h5 className="text-md"><span className="font-bold">Price:</span>{price}</h5>
                <p>{detail}</p>
                <p>Minimum Order: {minQuantity}</p>
                <p>Available Order: {availableQuantity}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigate(`/tool/${_id}`)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;