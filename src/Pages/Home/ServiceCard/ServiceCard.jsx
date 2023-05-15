import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  const { title, img, _id, price, description } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={img} alt="" /></figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-600 font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
        
          <Link to={`/book/${_id}`}> 
           <button className="btn btn-circle  btn-outline"><FaArrowRight className="text-orange-600 h-6 w-6"></FaArrowRight></button>
           </Link>
          </div>
      </div>
    </div>
  );
};

export default ServiceCard;