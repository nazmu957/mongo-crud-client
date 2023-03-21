import React from 'react';
import { Link } from 'react-router-dom';

const Products = ( products) => {
 const product = products.product;
 const {_id, productName, productPrice,imageLink} = product;

 const handleDelete = product =>{
  const agree = window.confirm(`Are you sure you want to delete: ${productName}`)
  // console.log(agree);  
  if(agree){
    // console.log('deleteing id',_id );
    fetch(`http://localhost:5000/products/${_id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        alert('User deleted successfully');
      }
    });
  }
 }

 
    return (
        <div className=''>
            <div className= " card w-96 bg-grey-100 shadow-xl">
  <figure><img className='w-[15rem] h-[15rem] pt-[2rem]' src={imageLink} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold ">{productName}</h2>
    <p className='text-center'>Price{productPrice}</p>
    <div className="card-actions justify-end">
    <div className='flex'>
      <Link to={`/update/${_id}`}><button className="btn btn-info mr-[9rem] ">Update</button></Link>

      <button 
      onClick={() => handleDelete(_id)}
      className="btn btn-primary ">Delete</button>
    </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Products;