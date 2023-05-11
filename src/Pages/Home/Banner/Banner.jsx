import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'




const Banner = () => {
    return (
        <div  className="carousel w-full h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full   rounded-lg " />
          <div className="text-white rounded-lg absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="space-y-7 ml-12 md:w-1/2 w-1/3">
            <h2 className="md:leading-[75px] text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="md:flex">
                <button className="btn bg-orange-500 mr-5">Discover More</button>
                <button className="btn btn-outline   md:mt-0 mt-4 btn-secondary">Latest Project</button>

            </div>
          </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a style={{background:" rgba(255, 255, 255, 0.2)"}}  href="#slide6" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn    btn-error btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full  rounded-lg " />
          <div className="text-white  rounded-lg  absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="space-y-7 ml-12 md:w-1/2 w-1/3">
            <h2 className="md:leading-[75px] text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="md:flex">
                <button className="btn bg-orange-500 mr-5">Discover More</button>
                <button className="btn btn-outline  md:mt-0 mt-4 btn-secondary">Latest Project</button>

            </div>
          </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a style={{background:" rgba(255, 255, 255, 0.2)"}} href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn     btn-error   btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full  rounded-lg " />
          <div className="text-white  rounded-lg  absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="space-y-7 ml-12 md:w-1/2 w-1/3">
            <h2 className="md:leading-[75px] text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="md:flex">
                <button className="btn bg-orange-500 mr-5">Discover More</button>
                <button className="btn btn-outline  md:mt-0 mt-4 btn-secondary">Latest Project</button>

            </div>
          </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a style={{background:" rgba(255, 255, 255, 0.2)"}}  href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn     btn-error   btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full  rounded-lg " />
          <div className="text-white  rounded-lg  absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="space-y-7 ml-12 md:w-1/2 w-1/3">
            <h2 className="md:leading-[75px] text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="md:flex">
                <button className="btn bg-orange-500 mr-5">Discover More</button>
                <button className="btn btn-outline  md:mt-0 mt-4 btn-secondary">Latest Project</button>

            </div>
          </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a style={{background:" rgba(255, 255, 255, 0.2)"}} href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide5" className="btn     btn-error   btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner5} className="w-full  rounded-lg " />
          <div className="text-white  rounded-lg  absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="space-y-7 ml-12 md:w-1/2 w-1/3">
            <h2 className="md:leading-[75px] text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="md:flex">
                <button className="btn bg-orange-500 mr-5">Discover More</button>
                <button className="btn btn-outline  md:mt-0 mt-4 btn-secondary">Latest Project</button>

            </div>
          </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a style={{background:" rgba(255, 255, 255, 0.2)"}}  href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide6" className="btn     btn-error   btn-circle">❯</a>
          </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner6} className="w-full  rounded-lg " />
          <div className="text-white  rounded-lg  absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="space-y-7 ml-12 md:w-1/2 w-1/3">
            <h2 className="md:leading-[75px] text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="md:flex">
                <button className="btn bg-orange-500  md:mr-5">Discover More</button>
                <button className="btn btn-outline  md:mt-0 mt-4 btn-secondary">Latest Project</button>

            </div>
          </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a  style={{background:" rgba(255, 255, 255, 0.2)"}} href="#slide5" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn      btn-error  btn-circle">❯</a>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Banner;