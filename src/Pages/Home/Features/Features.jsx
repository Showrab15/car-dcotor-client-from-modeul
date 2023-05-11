import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';

const Features = () => {
    return (
        <div>
              <div className="">
        <div className="text-center mt-8">
        <h3 className="text-2xl text-orange-500 font-bold">Core Features</h3>
        <h2 className="text-4xl  font-bold mt-4">Why Choose Us</h2>
        <p className=" mt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
        
        <div>
    <FeatureCard></FeatureCard>
        </div>
           </div>
        </div>
    );
};

export default Features;