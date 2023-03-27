import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddProducts from './AddProducts';
import Footer from './Footer';
import Products from './Products';



const Home = () => {
    const products = useLoaderData();
   
    return (
        <div>
         <h1 className='text-4xl py-3 font-bold'>Welcome to Our Online Shop</h1>
        <div className='grid grid-cols-3 py-[5rem] mx-[3rem] gap-5'>
            {
                products.map(product => <Products 
                    key={product._id}
                    product={product}
                ></Products> )
            }
        </div>
        
        <AddProducts></AddProducts>
        <Footer></Footer>
    </div>
    );
};

export default Home;