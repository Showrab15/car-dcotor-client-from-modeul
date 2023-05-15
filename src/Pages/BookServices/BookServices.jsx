import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const BookServices = () => {
    const services = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user)
    // console.log(services)
    const { title, _id ,price,img} = services;
    // console.log(title, _id)


    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const email = user?.email;
        const booking = {
          customerName : name,
         email,
         date, 
         amount,
         img,
         service: title,
         service_id: _id,
         price: price
        }
        // console.log(booking);

        fetch('http://localhost:5000/bookings',
     {
      method : 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(booking)
     })

        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire({
            title: 'Success!',
            text: 'Order Booking Successfully ',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset()
          }
        })
    }

    return (
        <div>
        <h2 className="text-center font-bold text-4xl">Book Service Of {title}</h2> 
     
  <div className="card-body mt-8 rounded-lg bg-[#F3F3F3]">
   <form onSubmit={handleBookService}>
  <div className="grid md:grid-cols-2 grid-cols-1 gap-6  ">
  <div className="form-control">
   
      <input type="text"  name='name'   required  placeholder="Name"  defaultValue={user?.displayName} className="input input-bordered" />
    </div>
    <div className="form-control">
    
      <input type="date"  name='date'  required  placeholder="date" className="input input-bordered" />
     
    </div>
   <div className="form-control">
    
      <input type="email" name='email'  required  placeholder="Your Email" defaultValue={user?.email} className="input input-bordered" />
    </div>
    <div className="form-control">
  
      <input type="text"  name='amount'  defaultValue={ '$' + price} required   className="input input-bordered" />
     
    </div>
    <div className="form-control w-full">
<textarea className="p-4" name="message" type="text" placeholder="Your Message" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
    <div className="form-control mt-6">
      <button className="btn bg-[#FF3811]">Order Confirm</button>
    </div>
   </form>
  </div>
</div>

    );
};

export default BookServices;