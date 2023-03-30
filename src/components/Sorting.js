import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SortCard from './SortCard';

const Sorting = () => {
    const lowProducts = useLoaderData();
    return (
        <div>
            <h2 className='font-bold text-lg font-serif py-[1.5rem]'>Low to High Price Products List</h2>
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