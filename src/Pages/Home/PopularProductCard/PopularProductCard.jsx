import React from 'react';
import product1 from '../../../assets/images/products/1.png';
import product2 from '../../../assets/images/products/2.png';
import product3 from '../../../assets/images/products/3.png';
import product4 from '../../../assets/images/products/4.png';
import product5 from '../../../assets/images/products/5.png';
import product6 from '../../../assets/images/products/6.png';
import { FaStar } from 'react-icons/fa';
const PopularProductCard = () => {

  
    return (
        <div className="grid md:grid-cols-3 mt-6 gap-6"> 
                 <div className="card w-full bg-base-100 border-2 border-orange-500">
            <div className='bg-[#F3F3F3] mt-10 mx-auto flex items-center justify-center rounded-lg w-[326px]
h-[215px]'>
            <figure><img src={product1} alt="" className="w-[156px]
h-[153px]" /></figure>

            </div>
        <div className="card-body">
            <h2 className="flex mx-auto text-orange-600" ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></h2>
           
          <h2 className=" font-bold text-xl text-center">Car Engine Plug</h2>
          <p className="text-orange-600 font-semibold text-center">Price: $20.00</p>
        
        </div>
      </div>

       <div className="card w-full bg-base-100 border-2 border-orange-500">
       <div className='bg-[#F3F3F3] mt-10 mx-auto flex items-center justify-center rounded-lg w-[326px]
h-[215px]'>
       <figure><img src={product2} alt="" className="w-[156px]
h-[153px]" /></figure>

       </div>
   <div className="card-body">
       <h2 className="flex mx-auto text-orange-600" ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></h2>
      
     <h2 className=" font-bold text-xl text-center">Car Air Filter</h2>
     <p className="text-orange-600 font-semibold text-center">Price: $15.00</p>
   
   </div>
 </div>

 <div className="card w-full bg-base-100 border-2 border-orange-500">
       <div className='bg-[#F3F3F3] mt-10 mx-auto flex items-center justify-center rounded-lg w-[326px]
h-[215px]'>
       <figure><img src={product3} alt="" className="w-[156px]
h-[153px]" /></figure>

       </div>
   <div className="card-body">
       <h2 className="flex mx-auto text-orange-600" ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></h2>
      
     <h2 className=" font-bold text-xl text-center">Cools Led Light</h2>
     <p className="text-orange-600 font-semibold text-center">Price: $30.00</p>
   
   </div>
 </div>

 <div className="card w-full bg-base-100 border-2 border-orange-500">
       <div className='bg-[#F3F3F3] mt-10 mx-auto flex items-center justify-center rounded-lg w-[326px]
h-[215px]'>
       <figure><img src={product4} alt="" className="w-[156px]
h-[153px]" /></figure>

       </div>
   <div className="card-body">
       <h2 className="flex mx-auto text-orange-600" ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></h2>
      
     <h2 className=" font-bold text-xl text-center">Car Engine Plug</h2>
     <p className="text-orange-600 font-semibold text-center">Price: $20.00</p>
   
   </div>
 </div>

 <div className="card w-full bg-base-100 border-2 border-orange-500">
       <div className='bg-[#F3F3F3] mt-10 mx-auto flex items-center justify-center rounded-lg w-[326px]
h-[215px]'>
       <figure><img src={product5} alt="" className="w-[156px]
h-[153px]" /></figure>

       </div>
   <div className="card-body">
       <h2 className="flex mx-auto text-orange-600" ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></h2>
      
     <h2 className=" font-bold text-xl text-center">Car Engine Plug</h2>
     <p className="text-orange-600 font-semibold text-center">Price: $20.00</p>
   
   </div>
 </div>

 <div className="card w-full bg-base-100 border-2 border-orange-500">
       <div className='bg-[#F3F3F3] mt-10 mx-auto flex items-center justify-center rounded-lg w-[326px]
h-[215px]'>
       <figure><img src={product6} alt="" className="w-[156px]
h-[153px]" /></figure>

       </div>
   <div className="card-body">
       <h2 className="flex mx-auto text-orange-600" ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></h2>
      
     <h2 className=" font-bold text-xl text-center">Car Engine Plug</h2>
     <p className="text-orange-600 font-semibold text-center">Price: $20.00</p>
   
   </div>
 </div>
        </div>
   
    );
};

export default PopularProductCard;