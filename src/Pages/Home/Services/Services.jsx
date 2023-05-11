import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="">
<div className="text-center mt-8">
<h3 className="text-2xl text-orange-500 font-bold">Services{services.length}</h3>
<h2 className="text-4xl  font-bold mt-4">Our Service Area</h2>
<p className=" mt-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
</div>

<div className="grid md:grid-cols-3 mt-6 gap-6">
    {
services.map(service =>  <ServiceCard

key={service._id}
service={service}></ServiceCard> )
    }
</div>
   </div>
    );
};

export default Services;