import React, { useContext, useState } from 'react';
import loginImage from '../../../assets/images/login/login.svg';
import { FaFacebook,FaLinkedin, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {

    const {createUser, logOut} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        // console.log(name,email, password);
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            handleLogout();
            navigate('/login')
            form.reset();
            setError('')
            setSuccess(Swal.fire({
              title: 'Success!',
              text: 'User Created Successfully ',
              icon: 'success',
              confirmButtonText: 'Cool'
            }))

        })
        .catch(error =>{
            console.log(error.message);
          setError(Swal.fire({
            title: 'Error!',
            text: 'Error want to continue',
            icon: 'error',
            confirmButtonText: 'Not Cool'
          }));
          setSuccess('');
        })

    }


    const handleLogout= ()=>{
      logOut()
      .then(()=>{})
      .catch(error=> console.log(error.message))
    }
    console.log(error)
    console.log(success)
    return (
       <div className="hero min-h-screen bg-red-200">
  <div className="hero-content flex-col lg:flex-row items-center">
    <div className="w-1/2 mr-8">
     <img src={loginImage} alt="" />
    </div>
    <div className="card ml-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h3 className="text-center font-bold text-3xl">Sign Up Now</h3>
      <form onSubmit={handleSignUp} >
           <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name="name" placeholder="name" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name="password" placeholder="password" className="input input-bordered" />
        </div>
           <label className="label">
            <p href="#" className="label-text-alt ">Already Have An Account ? <Link className=" font-bold text-orange-600 link link-hover" to="/login">Login</Link></p>
          
          </label>
            {/* <p className="text-2xl text-orange-600 font-bold">{error}</p>
            <p className="text-2xl text-orange-600 font-bold">{success}</p> */}

        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811]">Sign Up</button>
        </div>
      </form>
      <div>
        <p className="text-center font-semibold">Or Sign Up with</p>
        <div className="flex mt-6 justify-center gap-4">
           <FaFacebook className="text-[#3B5998] w-[30px] h-[30px]"></FaFacebook>
           <FaLinkedin className="text-[#0A66C2]  w-[30px] h-[30px]"></FaLinkedin>
           <FaGoogle className="text-sky-600  w-[30px] h-[30px]"></FaGoogle>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;