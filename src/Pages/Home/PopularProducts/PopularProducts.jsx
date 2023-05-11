import React from 'react';
import PopularProductCard from '../PopularProductCard/PopularProductCard';

const PopularProducts = () => {
    return (
        <div className="">
        <div className="text-center mt-8">
        <h3 className="text-2xl text-orange-500 font-bold">Popular Products</h3>
        <h2 className="text-4xl  font-bold mt-4">Browse Our Products</h2>
        <p className=" mt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
        
        <div >
    <PopularProductCard></PopularProductCard>
        </div>
           </div>
    );
};

export default PopularProducts;