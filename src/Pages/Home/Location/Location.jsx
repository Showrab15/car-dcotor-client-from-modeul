import React from 'react';
import { FaBlenderPhone, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Location = () => {
    return (
        <footer className="footer mt-8 p-10 bg-[#151515] text-neutral-content">

            <div className="flex justify-around"></div>
            <div>
                <div className="flex items-center ">
                    <FaCalendarAlt className="text-orange-600 w-[40.86px]
h-[40.86px]"></FaCalendarAlt>
                    <p className=" font-semibold ml-4">We are open monday-friday</p>

                </div>
                <h3 className="text-xl font-bold ml-14">7:00 am - 9:00 pm</h3>

            </div>

            <div>

                <div className="flex items-center">
<FaBlenderPhone  className="text-orange-600 w-[40.86px]
h-[40.86px]"></FaBlenderPhone>
<p className="font-semibold ml-4" >Have a question?</p>

                </div>
                <h3 className="text-xl font-bold ml-14">7+2546 251 2658</h3>

            </div>
            <div>
            <div className="flex items-center">
<FaMapMarkerAlt  className="text-orange-600 w-[40.86px]
h-[40.86px]"></FaMapMarkerAlt>
<p className="font-semibold ml-4" >Need a repair? our address</p>

</div>
<h3 className="text-xl font-bold ml-14">Liza Street, New York</h3>

            </div>
        </footer>
    );
};

export default Location;