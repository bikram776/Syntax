import React from 'react';
import { useAllcontext } from './Context';
import { Wrapepr} from "./Styles/Wrapepr";
import { Button } from './Styles/Button';
import { NavLink } from 'react-router-dom';

const Services = () => {
  const { services } = useAllcontext();
  console.log(services);
  return <Wrapepr className="section">
   <h2 className="common-heading">Our services</h2>
   <div className="container grid grid-three-column">
    {
      services.map((curEl) => {
         const {id, name, description, image } = curEl;
         return(
          <div key={id} className="card">
            <figure>
              <img src={image} alt={name}/>
            </figure>
            <div className="card-data">
              <h3>{name}</h3>
              <p>{description}</p>
              <NavLink to="/services">
              <Button>Read more</Button>
              </NavLink>
             </div>
             </div>
         );
      })
    };
   </div>
  </Wrapepr>
};



export default Services;