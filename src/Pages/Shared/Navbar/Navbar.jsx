import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => { 
        
      })
      .catch(error => console.log(error.message))
  }


  return (
    <div className="navbar bg-red-100 my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to="/" className="font-bold text-orange-400">Home</Link>
            <Link to="/about" className="font-bold text-orange-400">About</Link>
            <Link to="/blog" className="font-bold text-orange-400">Blog</Link>
            <Link to="/contact" className="font-bold text-orange-400">Contact</Link>
            {
            user ? <>
                      <Link to="/bookings" className="font-bold text-orange-400">Bookings</Link>
                      <Link onClick={handleLogOut} className="font-bold   text-orange-400">Logout</Link> 
            </>: <Link to="/login" className="font-bold text-orange-400">Login</Link>


          }
          </ul>
        </div>
        <Link to="/" className=" normal-case"><img style={{
          width: "107px",
          height: "86.78px"
        }} src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <Link to="/" className="font-bold text-orange-400">Home</Link>
          <Link to="/about" className="font-bold text-orange-400">About</Link>

          <Link to="/blog" className="font-bold text-orange-400">Blog</Link>
          <Link to="/contact" className="font-bold text-orange-400">Contact</Link>
          {
            user ? <>
                      <Link to="/bookings" className="font-bold text-orange-400">Bookings</Link>
                      <Link onClick={handleLogOut} className="font-bold   text-orange-400">Logout</Link> 
            </>: <Link to="/login" className="font-bold text-orange-400">Login</Link>


          }
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error">Appointment</button>

      </div>
    </div>
  );
};

export default Navbar;