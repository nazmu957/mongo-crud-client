import React from 'react';

const DesortingCard = (highProducts) => {
    const product = highProducts.highProduct;
    console.log(product);
    const {_id, productName, productPrice,imageLink} = product;
    return (
        <div>
            

        <div className="card card-side bg-base-100 shadow-xl mx-[12rem] mb-5">
<figure><img className='w-[14rem] h-[12rem]' src={imageLink} alt="Movie"/></figure>
<div className="card-body">
<h2 className="font-bold text-xl font-serif">{productName}</h2>
<p className='font-bold text-base font-mono'>Price:{productPrice}</p>
<p className='font-serif'>Click the button to add your cart</p>
<div className="card-actions justify-end">
  <button className="btn btn-sm font-serif">Add to Cart</button>
</div>
</div>
</div>
    </div>
    );
};

export default DesortingCard;