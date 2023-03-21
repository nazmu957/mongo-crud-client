import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storeProduct = useLoaderData();

    const [product, setProduct] = useState({});

    
    const handleUpdateProduct = event =>{
        event.preventDefault();
         console.log(product);

       
    }

    const handleInputChange = event =>{
        const field  = event.target.name;
        const value = event.target.value;
        
        const newProduct = {...product}
        newProduct[field] = value;
        setProduct(newProduct)
       
    }
    return (
        <div>
            <h2>Please Update: {product.productName} </h2>

            <form onSubmit={handleUpdateProduct}>
                <input onChange={handleInputChange} defaultValue={storeProduct.ProductName} className='border px-3 p-[.2rem] my-[.3rem] rounded'  type="text" placeholder='product name' required name="productName" id="" />
                <br />
                <input onChange={handleInputChange} className='border px-3 p-[.2rem]  my-[.3rem] rounded'  type="text" placeholder='product price' required name="productPrice" id="" />
                <br />
                <input onChange={handleInputChange} className='border px-3 p-[.2rem]  my-[.3rem] rounded'  type="text" placeholder='product image link' required name="imageLink" id="" />
                <br />
                <button className='btn btn-sm mt-3' type='submit'>Update Prouct</button>
            </form>
        </div>
    );
};

export default Update;