// import React, { useState } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Update = () => {
    const storeProduct = useLoaderData();

    const [product, setProduct] = useState({storeProduct});
    
    
    const handleUpdateProduct = event =>{
        event.preventDefault();
        
        fetch(`http://localhost:5000/products/${storeProduct._id}`, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Product Updated Successfully');
                console.log(data);
                
            }
        })

       
    }

    const handleInputChange = event =>{
        const field  = event.target.name;
        const value = event.target.value;
        
        const newProduct = {...product}
        newProduct[field] = value;
        setProduct(newProduct)
       
    }

    return (
        <div className= 'grid grid-cols-2 bg-red-100 '>
            <div >
            <div className="card w-64 bg-base-100 shadow-xl ml-[20rem] py-[2rem]">
  <figure><img src={storeProduct.imageLink} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold text-2xl">{storeProduct.productName}</h2>
    <p className='font-bold'>Price:{storeProduct.productPrice} </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda ea harum fugit in.Rem placeat temporibus expedita quia dolore culpa.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
            </div>
            <div>
            <h2 className='font-bold text-xl py-5'>Please Update Your Product  </h2>
            <form onSubmit={handleUpdateProduct}>
                <input onChange={handleInputChange} defaultValue={storeProduct.productName} className='border px-3 p-[.2rem] my-[.3rem] rounded'  type="text" placeholder= 'updated product name' required name="productName" id="" />
                <br />
                <input onChange={handleInputChange} defaultValue={storeProduct.productPrice} className='border px-3 p-[.2rem]  my-[.3rem] rounded'  type="text" placeholder='Updated price' required name="productPrice" id="" />
                <br />
                <input onChange={handleInputChange} defaultValue={storeProduct.imageLink} className='border px-3 p-[.2rem]  my-[.3rem] rounded'  type="text" placeholder='Updated image link' required name="imageLink" id="" />
                <br />
                <button className='btn btn-sm mt-3 mb-5' type='submit'>Update Product</button>
            </form>
            </div>
         
        </div>
   
    );
};

export default Update;