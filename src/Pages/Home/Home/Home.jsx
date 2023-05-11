import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Location from '../Location/Location';
import PopularProducts from '../PopularProducts/PopularProducts';
import Team from '../Team/Team';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
<Banner></Banner> 
<About></About>  
<Services></Services>
<Location></Location>
<PopularProducts></PopularProducts>
<Team></Team>
<Features></Features>
     </div>
    );
};

export default Home;