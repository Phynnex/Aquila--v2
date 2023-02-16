import React from 'react';

const Trial = () => {
    return (
        <div>
            <div className='h-48 flex justify-between items-center mx-24'>
                <div className='flex flex-col text-secondary font-semibold'>
                <p className='text-2xl'>Let’s help you get Started.</p>
                <p className='text-4xl'>Try a free Vulnerability Scan.</p>
                </div>
                <button className='bg-secondary text-white py-4 px-24 rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold'>Try Now</button>
            </div>
        </div>
    );
}



export default Trial;