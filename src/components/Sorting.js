import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SortCard from './SortCard';
import Navbar from './Navbar';

const Sorting = () => {
    const lowProducts = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='font-bold text-lg font-serif py-[1.5rem]'>Low to High Price Course List</h2>
            <div>
                {
                    lowProducts.map(lowProduct => <SortCard
                        key={lowProduct._id}
                        lowProduct={lowProduct}
                        
                    ></SortCard>)
                }
            </div>
        </div>
    );
};

export default Sorting;