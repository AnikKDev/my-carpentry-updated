import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
const ToolDetail = () => {

    const { id } = useParams();
    const [toolDetail, setToolDetail] = useState({});
    const { toolName, price, minQuantity, availableQuantity, picture, detail } = toolDetail;

    useEffect(() => {
        (async function getTool() {
            try {
                const response = await axios.get(`http://localhost:5000/tool/${id}`);
                setToolDetail(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [id])
    return (
        <div className="lg:h-screen flex items-center justify-center">
            <div class="card lg:card-side lg:mx-24 bg-base-100 shadow-xl">
                <figure><img className='w-96' src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{toolName}</h2>
                    <p>{detail}</p>
                    <p>Price: {price}</p>
                    <p>Minimum Quantity: {minQuantity}</p>
                    <p>Availble Quantity: {availableQuantity}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolDetail;