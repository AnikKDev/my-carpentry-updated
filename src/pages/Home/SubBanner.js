import React from 'react';

const SubBanner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="text-center w-3/5">
                <h4 className="text-lg font-semibold">Welcome to our website</h4>
                <h2 className="text-5xl my-3 font-bold text-primary">My Carpenry</h2>
                <p className="text-xl mb-6 font-mono">One of the leading carpentry tools providing inc. around the globe </p>
                <p className="text-gray-400"><span className="font-semibold">MyCarpentry</span> is a manufacturer of cutting tools, which is located in Bangladesh. With 'KWS' as its well-known brand, has been devoting it self into PCD saw blades, TCT saw blades, cold saw blades, finger joint cutter, drill bits, router bits and spiral cutter head since its establishment in 2002.</p>
                <hr className="my-8" />
            </div>
        </div>
    );
};

export default SubBanner;