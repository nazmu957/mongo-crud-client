import React from 'react';

const SortCard = (lowProducts) => {
    
    const product = lowProducts.lowProduct;
    console.log(product);
    const {_id, productName, productPrice,imageLink} = product;
    return (
        <div>
            

            <div className="card card-side bg-base-100 shadow-xl mx-[12rem] mb-5">
  <figure><img className='w-[14rem] h-[12rem]' src={imageLink} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-xl">{productName}</h2>
    <p className='font-bold text-base'>Price{productPrice}</p>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SortCard;