import React from 'react';
import feature1 from '../../../assets/icons/check.svg'
import feature2 from '../../../assets/icons/deliveryt.svg'
import feature3 from '../../../assets/icons/Wrench.svg'
import feature4 from '../../../assets/icons/group.svg'
import feature5 from '../../../assets/icons/person.svg'
import feature6 from '../../../assets/icons/group.svg'

const FeatureCard = () => {
    return (
        <div className="grid grid-cols-6 gap-6 mt-8">
            <div className="stack">
                <div className="text-center hover:bg-orange-500 border border-base-content card w-full bg-base-100">
                    <img src={feature1} alt="" className="w-[67px]
h-[53.5px] mx-auto mt-4" />
                    <div className="card-body font-bold">100% Guaranty </div>
                </div>
            </div>

            <div className="stack">
                <div className="text-center border border-base-content card w-full hover:bg-orange-500 bg-base-100">
                    <img src={feature2} alt="" className="w-[67px]
h-[53.5px] mx-auto mt-4" />
                    <div className="card-body font-bold">Timely Delivery </div>
                </div>
            </div>

            <div className="stack">
                <div className="text-center border border-base-content card w-full hover:bg-orange-500 bg-base-100">
                    <img src={feature3} alt="" className="w-[67px]
h-[53.5px] mx-auto mt-4" />
                    <div className="card-body font-bold">Best Equipment </div>
                </div>
            </div>

            <div className="stack">
                <div className="text-center border border-base-content card w-full hover:bg-orange-500 bg-base-100">
                    <img src={feature4} alt="" className="w-[67px]
h-[53.5px] mx-auto mt-4" />
                    <div className="card-body font-bold">Expert Team </div>
                </div>
            </div>

            <div className="stack">
                <div className="text-center border border-base-content card w-full hover:bg-orange-500 bg-base-100">
                    <img src={feature5} alt="" className="w-[67px]
h-[53.5px] mx-auto mt-4" />
                    <div className="card-body font-bold">24/7 Support  </div>
                </div>
            </div>

            <div className="stack">
                <div className="text-center border border-base-content card w-full hover:bg-orange-500 bg-base-100">
                    <img src={feature6} alt="" className="w-[67px]
h-[53.5px] mx-auto mt-4" />
                    <div className="card-body font-bold">100% Guaranty </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;