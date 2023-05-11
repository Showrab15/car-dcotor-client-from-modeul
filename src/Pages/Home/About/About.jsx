import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img src={person} className=" rounded-lg w-[460px] h-[473px]" />
                    <img src={parts} className="absolute top-1/2 md:left-48 md:mb-0 mb-8 rounded-lg w-[327px] h-[322px] border-8 border-white bg-gradient-to-r from-[rgba(0, 0, 0, 0.2)] to-[rgba(0, 0, 0, 0.2)]" />

                </div>
                <div className='w-1/2 space-y-4'>
                    <h3 className="font-bold text-3xl text-orange-600">About Us</h3>
                    <h1 className="text-5xl font-bold leading-[50px]">We are qualified & of experience in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;