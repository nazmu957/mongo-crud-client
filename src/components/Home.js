import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddProducts from './AddProducts';
import Footer from './Footer';
import Navbar from './Navbar';
import Products from './Products';



const Home = () => {
    const products = useLoaderData();
   
    return (
        <div>
            <Navbar></Navbar>
         <h1 className='text-4xl py-3 font-bold'>Welcome to Our Online Shop</h1>
         <section className='flex'>
            <div className='m-5 w-[10rem]'>
                    <h1 className='text-base font-bold'>Sorting Product</h1>
                    <Link to="/products/sort"><button className="btn btn-sm text-xs">Start From Low Price</button></Link>
            </div>
           <div className='grid grid-cols-3 py-[5rem] mx-[3rem] gap-5'>
               {
                   products.map(product => <Products 
                       key={product._id}
                       product={product}
                   ></Products> )
               }
           </div>
         </section>
        
        <AddProducts></AddProducts>
        <Footer></Footer>
    </div>
    );
};

export default Home;