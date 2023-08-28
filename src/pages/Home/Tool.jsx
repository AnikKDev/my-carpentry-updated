import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Tool = ({ tool }) => {
    const { toolName, price, detail, picture, minQuantity, availableQuantity, _id } = tool;
    const navigate = useNavigate();
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary uppercase">{toolName}</h2>
                <h5 className="text-2xl text-gray-500"><span className="font-bold">Price: $</span>{price}(per piece)</h5>
                <p className="text-gray-600">{detail}</p>
                <p className="text-xl font-semibold text-gray-500">Minimum Order: {minQuantity}</p>
                <p className="text-xl font-semibold text-gray-500">Available Order: {availableQuantity}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/tool/${_id}`)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;