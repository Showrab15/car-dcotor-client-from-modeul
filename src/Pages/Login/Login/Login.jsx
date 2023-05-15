import React, { useContext, useState } from 'react';
import loginImage from '../../../assets/images/login/login.svg';
import { FaFacebook,FaLinkedin, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {

  const {loginUser} = useContext(AuthContext)
const [error, setError] = useState('')
const [success, setSuccess] = useState('')
const location = useLocation();
const navigate = useNavigate()

const from = location.state?.from?.pathname || "/";

console.log(location)


     const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
        .then(result =>{
          const loggedUser = result.user;
          // console.log(loggedUser);
navigate(from, {replace: true})
          form.reset()
          setError('')
          setSuccess(Swal.fire({
            title: 'Success!',
            text: 'User Login Successfully ',
            icon: 'success',
            confirmButtonText: 'Cool'
          }))

        })

       .catch(error =>{
        setError(error.message);
        console.log(Swal.fire({
          title: 'Error!',
          text: 'Error want to continue',
          icon: 'error',
          confirmButtonText: 'Not Cool'
        }))
        setSuccess('')
       })

    }

    return (
       <div className="hero min-h-screen bg-red-200">
  <div className="hero-content flex-col lg:flex-row items-center">
    <div className="w-1/2 mr-8">
     <img src={loginImage} alt="" />
    </div>
    <div className="card ml-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h3 className="text-center font-bold text-3xl">Login Now</h3>
      <form onSubmit={handleLogin} >
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
            <p href="#" className="label-text-alt ">New to Car Doctor ? <Link className=" font-bold text-orange-600 link link-hover" to="/signup">SignUp</Link></p>
          
          </label>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811]">Sign In</button>
        </div>
      </form>
      <div>
        <p className="text-center font-semibold">Or Sign In with</p>
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

export default Login;