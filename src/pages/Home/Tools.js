import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [allTools, setAllTools] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/tools')
            .then(function (response) {
                // handle success
                setAllTools(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
            {
                allTools.map(tool => <Tool tool={tool} key={tool._id}></Tool>)
            }
        </div>
    );
};

export default Tools;