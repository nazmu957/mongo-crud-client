import React, { useState } from 'react';
import {   useLoaderData, } from 'react-router-dom';
import Products from './Products';

const AddProducts = () => {
    
    const [product, setProduct] = useState({});
    const handleAddProduct = event =>{
        event.preventDefault();
        // console.log(product);

        fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{ 
           if(data.acknowledged){
            alert('Product added successfully');
            event.target.reset();
            
           }
        })
    }

    const handleInputBlur = event =>{
        const field  = event.target.name;
        const value = event.target.value;
        
        const newProduct = {...product}
        newProduct[field] = value;
        setProduct(newProduct)
       
    }
    return (
        <div className='bg-red-100 py-[4rem]'>
           

            <div>
            <h2 className='font-bold text-2xl py-3'>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <input className='border px-3 p-[.2rem] my-[.3rem] rounded' onBlur={ handleInputBlur} type="text" placeholder='product name' required name="productName" id="" />
                <br />
                <input className='border px-3 p-[.2rem]  my-[.3rem] rounded' onBlur={ handleInputBlur} type="text" placeholder='product price' required name="productPrice" id="" />
                <br />
                <input className='border px-3 p-[.2rem]  my-[.3rem] rounded' onBlur={ handleInputBlur} type="text" placeholder='product image link' required name="imageLink" id="" />
                <br />
                <button className='btn btn-sm mt-3' type='submit'>Add Product</button>
            </form>
            </div>
        </div>
    );
};

export default AddProducts;