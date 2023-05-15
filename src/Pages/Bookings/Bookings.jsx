import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingTable from '../BookingTable/BookingTable';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {

    const {user}= useContext(AuthContext)
    const [bookings, setBookings]  = useState([]);
    const navigate = useNavigate()
    const url = `https://car-dcotor-server-side-from-modeul-showrab15.vercel.app/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url,{
           method: 'GET',
           headers: {
            authorization: `Bearer ${localStorage.getItem('car-access-token')}`
           }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(!data.error){
                setBookings(data)

            }
            else{

                //logout and navigate
                navigate('/')
            }
        })
    },[])


    const handleDelete = id =>{
        const proceed = confirm("Are you sure you want to delete?")
        
        if(proceed){
       
        fetch(`https://car-dcotor-server-side-from-modeul-showrab15.vercel.app/bookings/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert ('deleted Successfully')
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        } )
        
        }
        }




        //handle update data

        const handleConfirmBooking = id =>{
           
            fetch(` https://car-dcotor-server-side-from-modeul-showrab15.vercel.app/bookings/${id}`,
            {
                method: 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({status: 'confirm'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    //update state

                    const remaining = bookings.filter(booking => booking._id !==id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                }
            })
        }
    return (
        <div>
            <h2 className="text-4xl font-bold text-center ">Your Bookings {bookings.length} </h2>

            <div className="overflow-x-auto mt-8  w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        <button className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     {
        bookings.map(booking => <BookingTable
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        handleConfirmBooking={handleConfirmBooking}
        ></BookingTable> )
     }
    
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default Bookings;