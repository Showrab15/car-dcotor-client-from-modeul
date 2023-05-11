import React from 'react';
import teamMate1 from '../../../assets/images/team/1.jpg'
import teamMate2 from '../../../assets/images/team/2.jpg'
import teamMate3 from '../../../assets/images/team/3.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const TeamCard = () => {
    return (
        <div className="grid md:grid-cols-3 mt-6 gap-6">
            <div className="card w-full bg-base-100 border-2 border-orange-500">

                <figure><img src={teamMate1} alt="" className="p-4 rounded-xl" /></figure>

                <div className="card-body">


                    <h2 className=" font-bold text-xl text-center">Car Engine Plug</h2>
                    <p className="text-orange-600 font-semibold text-center">Engine Expert</p>
                    <div className="md:flex justify-center gap-4">
                        <button className="btn bg-[#395185] btn-circle text-white btn-outline">
                            <FaFacebook></FaFacebook>

                        </button>
                        <button className="btn btn-circle bg-[#55ACEE] text-white btn-outline">
                            <FaTwitter></FaTwitter>

                        </button>
                        <button style={{ background: "linear-gradient(150deg, #774ADF 3.9%, #9748BE 14.95%, #BD4697 30.43%, #D8447A 44.65%, #E94369 57%, #EF4363 66.1%, #EF545E 72.21%, #F08053 84.3%, #F2C141 100%)" }} className="btn btn-circle  text-white btn-outline">

                            <FaInstagram ></FaInstagram>
                        </button>
                        <button className="btn  bg-[#0A66C2] btn-circle text-white btn-outline">

                            <FaLinkedin></FaLinkedin>
                        </button>

                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 border-2 border-orange-500">

<figure><img src={teamMate2} alt="" className="p-4 rounded-xl" /></figure>

<div className="card-body">


    <h2 className=" font-bold text-xl text-center">Car Engine Plug</h2>
    <p className="text-orange-600 font-semibold text-center">Engine Expert</p>
    <div className="md:flex justify-center gap-4">
        <button className="btn bg-[#395185] btn-circle text-white btn-outline">
            <FaFacebook></FaFacebook>

        </button>
        <button className="btn btn-circle bg-[#55ACEE] text-white btn-outline">
            <FaTwitter></FaTwitter>

        </button>
        <button style={{ background: "linear-gradient(150deg, #774ADF 3.9%, #9748BE 14.95%, #BD4697 30.43%, #D8447A 44.65%, #E94369 57%, #EF4363 66.1%, #EF545E 72.21%, #F08053 84.3%, #F2C141 100%)" }} className="btn btn-circle  text-white btn-outline">

            <FaInstagram ></FaInstagram>
        </button>
        <button className="btn  bg-[#0A66C2] btn-circle text-white btn-outline">

            <FaLinkedin></FaLinkedin>
        </button>

    </div>
</div>
</div>


<div className="card w-full bg-base-100 border-2 border-orange-500">

<figure><img src={teamMate3} alt="" className="p-4 rounded-xl" /></figure>

<div className="card-body">


    <h2 className=" font-bold text-xl text-center">Car Engine Plug</h2>
    <p className="text-orange-600 font-semibold text-center">Engine Expert</p>
    <div className="md:flex justify-center gap-4">
        <button className="btn bg-[#395185] btn-circle text-white btn-outline">
            <FaFacebook></FaFacebook>

        </button>
        <button className="btn btn-circle bg-[#55ACEE] text-white btn-outline">
            <FaTwitter></FaTwitter>

        </button>
        <button style={{ background: "linear-gradient(150deg, #774ADF 3.9%, #9748BE 14.95%, #BD4697 30.43%, #D8447A 44.65%, #E94369 57%, #EF4363 66.1%, #EF545E 72.21%, #F08053 84.3%, #F2C141 100%)" }} className="btn btn-circle  text-white btn-outline">

            <FaInstagram ></FaInstagram>
        </button>
        <button className="btn  bg-[#0A66C2] btn-circle text-white btn-outline">

            <FaLinkedin></FaLinkedin>
        </button>

    </div>
</div>
</div>

        </div>
    );
};

export default TeamCard;