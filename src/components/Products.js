import React from 'react';

const Products = ( products) => {
 const product = products.product;
 console.log(product);

 const {_id, productName, productPrice,imageLink} = product;
    return (
        <div className=''>
            <div className= " card w-96 bg-grey-100 shadow-xl">
  <figure><img className='w-[15rem] h-[15rem]' src={imageLink} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p>Price{productPrice}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Products;