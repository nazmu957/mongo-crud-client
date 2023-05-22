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
         <h1 className='text-4xl py-3 font-bold text-cyan-400'>Online Learning platform</h1>
         <div>
                    <Link to="/products/sort"><button className="btn btn-outline btn-info text-xs mb-3 mt-3 mr-3">Low price Course</button></Link>
                    <Link to="/products/dsort"><button className="btn btn-outline btn-error text-xs">High price Course</button></Link>

                   
         </div>
         <section className='flex bg-cyan-100'>
            <div className=' w-[3rem]'>
                    {/* <h1 className='text-base font-bold'>Sorting Product</h1>
                    <Link to="/products/sort"><button className="btn btn-sm text-xs mb-3 mt-3">Low to high price</button></Link>
                    <Link to="/products/dsort"><button className="btn btn-sm text-xs">High to low price</button></Link> */}
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
         <Link to="/products/add"><button className="btn btn-block">Add New Course</button></Link>
        <AddProducts></AddProducts>
        <Footer></Footer>
    </div>
    );
};

export default Home;