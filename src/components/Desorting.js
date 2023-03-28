import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DesortingCard from './DesortingCard';

const Desorting = () => {
    const highProducts = useLoaderData();
    console.log(highProducts);
    return (
        <div>
            <h2 className='font-bold text-lg font-serif py-[1.5rem]'>High To Low Price Product List</h2>
            <div>
                {
                    highProducts.map(highProduct => <DesortingCard
                        key={highProduct._id}
                        highProduct={highProduct}
                        
                    ></DesortingCard>)
                }
            </div>
        </div>
    );
};

export default Desorting;